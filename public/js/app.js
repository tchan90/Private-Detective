$(function(){  
  //jQuery code

//fade in graphic
  $(".hidden").fadeIn(800);    

//Main Menu
//casefile hover
$('a').on('mouseenter', function() {
  $(this).find('#casefile').attr('src', '/images/large buttons/hover 2/casefile-large-hover-2_alt.png');
});

$('a').on('mouseleave', function() {
$(this).find('#casefile').attr('src', '/images/large buttons/casefile-large.png');
});
//directory hover
$('a').on('mouseenter', function() {
  $(this).find('#directory').attr('src', '/images/large buttons/hover 2/directory-large-hover-2-alt_03.png');
});

$('a').on('mouseleave', function() {
$(this).find('#directory').attr('src', '/images/large buttons/directory-large.png');
});
//notes hover
$('a').on('mouseenter', function() {
  $(this).find('#notes').attr('src', '/images/large buttons/hover 2/notes-large-hover_2-alt_03.png');
});

$('a').on('mouseleave', function() {
$(this).find('#notes').attr('src', '/images/large buttons/notes-large.png');
});

//solve hover
$('a').on('mouseenter', function() {
  $(this).find('#solve').attr('src', '/images/large buttons/hover 2/solve-large-hover-alt_03.png');
});

$('a').on('mouseleave', function() {
$(this).find('#solve').attr('src', '/images/large buttons/solve-large.png');
});

//date in footer
document.getElementById("date").innerHTML = new Date().getFullYear();

//hover text
$('.hovering-text-cf').mouseover(function() {
  $('.hover-txt-cf').css("visibility","visible");
});

$('.hovering-text-cf').mouseout(function() {
  $('.hover-txt-cf').css("visibility","hidden");
});

$('.hovering-text-d').mouseover(function() {
  $('.hover-txt-d').css("visibility","visible");
});

$('.hovering-text-d').mouseout(function() {
  $('.hover-txt-d').css("visibility","hidden");
});

$('.hovering-text-n').mouseover(function() {
  $('.hover-txt-n').css("visibility","visible");
});

$('.hovering-text-n').mouseout(function() {
  $('.hover-txt-n').css("visibility","hidden");
});

$('.hovering-text-s').mouseover(function() {
  $('.hover-txt-s').css("visibility","visible");
});

$('.hovering-text-s').mouseout(function() {
  $('.hover-txt-s').css("visibility","hidden");
});
});


//drop down solve
$(function(){
  $("#submit").click(function(e){
    e.preventDefault();
    const solve = $("#solveNames").val();
    alert(solve);
  });
})


