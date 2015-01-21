$(function(){
    
    resizeContent();
    initPanel();
    
    $(window).resize(resizeContent);
    
    $(".imgl").imgLiquid();
    
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
}