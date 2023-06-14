$(document).ready(function(){
    $('.outer-menu-item').hover(function(){
        $(this).find('.inner-menu').show();
    }, function(){
        $(this).find('.inner-menu').hide();
    });
});


$(document).ready(function(){

})

$(document).ready(function(){
    
})

$('#left-button').click(function(){
    if(currentPage > 0){
        currentPage = currentPage - 1;
        changePage();
    }
});

$('#right-button').click(function(){
    if(currentPage < count - 1){
        currentPage = currentPage + 1;
        changePage();
    }
});