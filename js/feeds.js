var FeedsViewModel = function(){
    this.feedsList = ko.observableArray([]);
        
    this.defaultAddInputValue = 'http://';
    
    return this;
};

FeedsViewModel.prototype = {
    
    addFeed : function(data,event){
        
        if(event.keyCode == 13){
            
            var el = event.target;
            var value = el.value;
            var name = this.getDomainName(value);
   
            this.feedsList.push({
                id: 'feed_'+this.feedsList().length,
                url: value,
                name: name,
                enabled: ko.observable(true)
            });
        
            el.value = this.defaultAddInputValue;
            
            $('.reader_addZone').removeClass('opened');
        
            return false;
        }
        
        return true;
        
    },
    
    getDomainName: function(href) {
        var l = document.createElement("a");
        l.href = href;
        var domain = (l.host.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/) || [])[1]
        return domain;
    }
        
};

ko.applyBindings(new FeedsViewModel());