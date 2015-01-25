var FeedsViewModel = function(){
    
    // Bools
    this.feedsPanelOpened = ko.observable(true);
    this.addPanelOpened = ko.observable(false); 
    
    this.feedsList = ko.observableArray([]);
        
    this.defaultAddInputValue = 'http://';
    
    // APi
    this.gFeed = new GoogleFeed();
    
    return this;
};

FeedsViewModel.prototype = {
  
    addFeed : function(data,event){
        
        if(event.keyCode == 13){
            
            var self = this;
            var el = event.target;
            var value = el.value;
            var name = this.getDomainName(value);
            
            // Process
            this.gFeed.processFeed(value,function(feedProcessed){
                if( !feedProcessed.error ){
                    self.feedsList.push({
                        id: 'feed_'+self.feedsList().length,
                        url: value,
                        name: name,
                        checked: ko.observable(true),
                        entries : feedProcessed.feed.entries
                    });
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
    
    // UI METHODS
    
    toggleFeedsPanel : function(){
        this.feedsPanelOpened((this.feedsPanelOpened() ? false : true));
    },
    
    toggleAddPanel : function(){
        this.addPanelOpened((this.addPanelOpened() ? false : true));
    },
        
};

ko.applyBindings(new FeedsViewModel());