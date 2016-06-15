// Click to show fahrenheit
$('#c').on('click', function(){
    $(this).siblings().removeClass('active'); 
    $(this).toggleClass('active');
    $('#dInCel').show();
    $('#dInFar').hide();
});
// Click to show Celsius
$('#f').on('click', function(){
    $(this).siblings().removeClass('active'); 
    $(this).toggleClass('active');
    $('#dInCel').hide();
    $('#dInFar').show();
});
