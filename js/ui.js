$(function(){
    
    $('.r__loader').addClass('hidden');
    
    resizeContent();
    resizeImgs();
    
    $(window).resize(resizeContent);
    
});

function resizeContent(){
    
    var wh = $(window).height();
    var hh = $('.r_header').height();
    var fh = $('.r_filters').height();
    
    $('.r_fp,.r_overlay').height(wh-hh);
    $('.r_content').height(wh-fh-hh);
    
    var hph = $('.r_fp_header').height();
    $('.r_fp_content').height(wh-hh-hph);

}

function resizeImgs(){
    $('.r_content img').each(function(){
        var url = $(this).attr('src');
        $(this).hide().parent().css({'background-image' : 'url('+url+')'});
    });
}

