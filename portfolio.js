var showLoader = () => {
    $('#loader').fadeIn();
}
var hideLoader = () => {
    $('#loader').fadeOut();
}

$(document).ready(function () {
    $('.nav_bar i').click(function () {
        showLoader();
        setTimeout(() => {
            var id = $(this).attr('data-id');
            $('.main_cont').hide();
            $('#'+id).show();
            hideLoader()    
        }, 1000);
        
    })    
});