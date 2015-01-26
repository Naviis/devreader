var Notification = function(text,format){
    this.text = text;
    this.format = format;
    this.time = 5;
    
    this.create();
}

Notification.prototype = {
    
    create : function(){
        var notif = $('<div></div>').html(this.text).addClass('g_notification '+this.format);
        $('body').append(notif);
        
        window.setTimeout(function(){
            notif.addClass('active');
        },100);
        
        window.setTimeout(function(){
            notif.removeClass('active');
            window.setTimeout(function(){
                notif.remove();
            },500);
        },this.time*1000);
    }
    
}