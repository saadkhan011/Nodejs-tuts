// in jquery insted og wirting document.querselector we use $  
// it select all attribute 
// so we not need to write All 

$("h1");
// *************selecting element 
let btn = $(".set button");
console.log(btn);
// *************style with jquery 
// when we add two value in bracket then it set the value 
$("h1").css("color", "orange");
// when we wite one value in bracke it give us the css of that elemnet 
console.log($("h1").css("color"))
// ************* Addding and removing class 
$("h1").addClass("heading");
$("h1").removeClass("heading");
console.log($("h1").hasClass("heading"));
// ******************text 
$(".drum").text("click me");
$(".drum").html("<strong>click me</strong>");
// *********************Attribute 
// by adding one value we get that attribute 
console.log($("a").attr("href"));
// by adding two valyue we set the attribute 
$("a").attr("href", "https://yahoo.com")
// class is also attribute so you can check classes in the elemnt too 
console.log($("h1").attr("class"));
// ************************Event lstner in jquery 
$("h1").click(function(){
    $("h1").css("color", "yellow")
})
$("button").click(function(Event){
    console.log(Event)
    $("h1").css("color", "red");
})
$("body").keypress(function(e){
    console.log(e.key);
})
// ************adding and removing 
$(".set").before("<h3>button</h3>")
$(".set").append("<h3>button</h3>")
$(".set").prepend("<h3>button</h3>")
// $(".set").remove();

// *****************animation 
$("button").click(function(Event){
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();
    // .animate allow you to add custom css 
    // $("h1").animate({opacity: 0.5});
    // you can only add numeric value  
    // see you can not add color 
    // it will give you error 
    // $("h1").animate({color: black});
    // you can also add multiple animation 
    $("h1").slideUp().slideDown().animate({margin: "10%"});


})