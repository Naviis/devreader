var FeedsViewModel = function(){
    
    // Bools
    this.feedsPanelOpened = ko.observable(true);
    this.addPanelOpened = ko.observable(false); 
    
    this.feedsList = ko.observableArray([]);
    this.currentFeed = ko.observable(null);
        
    this.defaultAddInputValue = 'http://';
    
    // APi
    this.gFeed = null;
    
    //simpleStorage.flush()
    
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
            this.getFeed(value, name, true, function(){
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
    
    getFeed: function(value, name,newFeed, callback){
        
        var self = this;
        this.gFeed.processFeed(value,function(feedProcessed){
            if( !feedProcessed.error ){
                self.addNewFeedToList(value,name,feedProcessed.feed.entries);
                self.storeFeeds();
                
                if(newFeed)
                    new Notification('The feed was successfully added','success');
            }else{
                new Notification('The feed \''+name+'\' is invalid','error');
            }          
            
            if( callback )
                callback();
        });
    },
    
    addNewFeedToList: function(url,name,entries){
        
        var id = 'feed_'+this.feedsList().length;
        this.feedsList.push({
            id: id,
            url: url,
            name: name,
            checked: ko.observable(false),
            entries : entries
        });
        
        this.currentFeed(id);
    },
    
    // LOCAL STORAGE
    
    storeFeeds : function(){

        var feedsStorage = [];
        for( var i = 0; i < this.feedsList().length; i++){            
            var currentFeed = this.feedsList()[i];            
            feedsStorage[i] = {url:currentFeed.url,name:currentFeed.name};
        }
        
        var json = JSON.stringify(feedsStorage);
        simpleStorage.set('feeds', json);
    },
    
    parseLocalStorage: function(){
        var feeds = JSON.parse(simpleStorage.get('feeds'));
        
        for( var i = 0; i < feeds.length; i++){            
            var currentFeed = feeds[i];  
            this.getFeed(currentFeed.url,currentFeed.name, false);
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