$(document).ready(function(){
    $('.outer-menu-item').hover(function(){
        $(this).find('.inner-menu').show();
    }, function(){
        $(this).find('.inner-menu').hide();
    });
});

$(document).ready(function(){
    var width = $('[data-role="slider"]').attr('data-width');
    var height = $('[data-role="slider"]').attr('data-height');
    var count = $('[data-role="slider"] div.item').length;
    var count1 = $('[data-role="slider"] div.item1').length;

    $('[data-role="slider"]').css({
        position: 'relative',
        overflow: 'hidden',
        width: width,
        height: height
    }).find('.container').css({
        position: 'absolute',
        overflow: 'hidden',
        width: width * count
    }).find('.item').css({
        width: width,
        height: height,
        float: 'left'
    });

    $('[data-role="slider"]').css({
        position: 'relative',
        overflow: 'hidden',
        width: width,
        height: height
    }).find('.container1').css({
        position: 'absolute',
        overflow: 'hidden',
        width: width * count1
    }).find('.item1').css({
        width: width,
        height: height,
        float: 'left'
    });

    var currentPage = 0;
    var currentPage1 = 0;
    var changePage = function(){
        $('[data-role="slider"] > .container').animate({
            left: -currentPage * width
        }, 500);
    };
    var changePage1 = function(){
        $('[data-role="slider"]>.container1').animate({
            left: -currentPage1 * width
        }, 500);
    };

    $('#left-button').click(function(){
        if(currentPage > 0){
            currentPage = currentPage - 1;
            changePage();
        }
    });
    
    $('#left-button1').click(function(){
        if(currentPage1 > 0){
            currentPage1 = currentPage1 - 1;
            changePage1();
        }
    });
    
    $('#right-button').click(function(){
        if(currentPage < count - 1){
            currentPage = currentPage + 1;
            changePage();
        }
    });
    
    $('#right-button1').click(function(){
        if(currentPage1 < count1 - 1){
            currentPage1 = currentPage1 + 1;
            changePage1();
        }
    });
});


