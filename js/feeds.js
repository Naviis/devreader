var FeedsViewModel = function(){
    
    // Bools
    this.feedsPanelOpened = ko.observable(true);
    this.addPanelOpened = ko.observable(false); 
    
    this.feedsList = ko.observableArray([]);
        
    this.defaultAddInputValue = 'http://';
    
    // APi
    this.gFeed = null;
    
    // Init
    this.init();
    
    return this;
};

FeedsViewModel.prototype = {
    
    init: function(){
        this.gFeed = new GoogleFeed();
        
        if( simpleStorage.get('feeds') ){
            this.parseLocalStorage();
        }
    },
  
    addFeed : function(data,event){
        
        if(event.keyCode == 13){
            
            var self = this;
            var el = event.target;
            var value = el.value;
            var name = this.getDomainName(value);
            
            // Process
            this.gFeed.processFeed(value,function(feedProcessed){
                if( !feedProcessed.error ){
                    self.addNewFeedToList(value,name,feedProcessed.feed.entries);
                    self.storeFeeds();
                }else{
                    alert('error GFeed');
                }          

                el.value = self.defaultAddInputValue;
                self.toggleAddPanel();
            });
        }
        
        return true;
        
    },
    
    getDomainName: function(href) {
        var l = document.createElement("a");
        l.href = href;
        var domain = (l.host.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/) || [])[1];
        return domain;
    },
    
    addNewFeedToList: function(url,name,entries){
        this.feedsList.push({
            id: 'feed_'+this.feedsList().length,
            url: url,
            name: name,
            checked: ko.observable(true),
            entries : entries
        });
    },
    
    // LOCAL STORAGE
    
    storeFeeds : function(){
        var json = JSON.stringify(this.feedsList()) ;        
        simpleStorage.set('feeds', json);
    },
    
    parseLocalStorage: function(){
        var feeds = JSON.parse(simpleStorage.get('feeds'));
        
        for( var i = 0; i < feeds.length; i++){            
            var currentFeed = feeds[i];            
            this.addNewFeedToList(currentFeed.url,currentFeed.name,currentFeed.entries);
        }
    },
    
    // UI METHODS
    
    toggleFeedsPanel : function(){
        this.feedsPanelOpened((this.feedsPanelOpened() ? false : true));
    },
    
    toggleAddPanel : function(){
        this.addPanelOpened((this.addPanelOpened() ? false : true));
    },
        
};

ko.applyBindings(new FeedsViewModel());