$(function(){
    
    $('.reader__loader').addClass('hidden');
    
    resizeContent();
    initPanel();
    
    $(window).resize(resizeContent);
    
    $(".imgl").imgLiquid();
    
    initRivets();
    
});

function resizeContent(){
    
    var wh = $(window).outerHeight();
    var hh = $('.reader_header').outerHeight();
    var fh = $('.reader_filters').outerHeight();
    
    $('.reader_filtersPanel,.reader_overlay').height(wh-hh);
    $('.reader_content').height(wh-fh-hh);
    
    var hph = $('.reader_filtersPanel_header').outerHeight();
    $('.reader_filtersPanel_content').height(wh-hh-hph);

}

function initPanel(){
    $('.reader_filters_panelButton, .reader_filtersPanel_header span').click(function(e){
        e.preventDefault();
        $('.reader_filters').toggleClass('opened');
        $('.reader_content').toggleClass('panel_shown');
    });
    
    $('.filtersPanel_add').click(function(e){
        e.preventDefault();
        $('.reader_addZone').addClass('opened');
    });
    
    $('.reader_addZone_close').click(function(e){
        e.preventDefault();
        $('.reader_addZone').removeClass('opened');
    });
}

function initRivets(){

    rivets.bind($('.filtersPanel_feedsList'), {feeds: feeds});
    
    rivets.formatters.empty = function(feedsList){
        
        var result = feedsList.length == 0;
        
        console.log(result);
        return result;      
    }

}