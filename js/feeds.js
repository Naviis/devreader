var Feeds = function(){
    this.feedsList = [
        {id : 'feed_0', url : 'http://www.google.fr', name : 'Google', enabled : true},
        {id : 'feed_1', url : 'http://www.yahoo.fr', name : 'Yahoo', enabled : false},
    ];
    
    return this;
};

Feeds.prototype = {
    
};

var feeds = new Feeds();