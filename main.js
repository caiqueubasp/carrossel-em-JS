let img1 = $('#img1');
let img2 = $('#img2');
let img3 = $('#img3');
let btn = $('#mudar1');



$('#img1').hide();
$('#img2').hide();
$('#img3').hide();

$('#mudar1').click(function(){
    $('#img1').fadeIn(2000);
    $('#img2').hide();
    $('#img3').hide();
 } );
 
 $('#mudar2').click(function(){
    $('#img1').hide();
    $('#img2').fadeIn(2000);
    $('#img3').hide();
 } );

 $('#mudar3').click(function(){
    $('#img1').hide();
    $('#img2').hide();
    $('#img3').fadeIn(7000);
 } );
