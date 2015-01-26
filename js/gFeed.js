var GoogleFeed = function(){
    
    return this;
};

GoogleFeed.prototype = {
    
    processFeed: function(url,callback){
        
        feedResult = null;
        
        var feed = new google.feeds.Feed(url);
        feed.load(function(result) {
            if (!result.error) {
                feedResult = result;
            }else{
                feedResult = {error : true};
            }
            
            callback(feedResult);
        });        
    }
    
};