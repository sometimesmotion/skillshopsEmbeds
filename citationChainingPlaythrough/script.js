$(function(){
 
  //$(".active").show();
  
  $(".trigger").click(function(e){
    //e.preventDefault();
    $("section").removeClass("active");
    $(this).closest("section").next().addClass("active");
    $("active").find("h1").focus();
  });
  
  $(".mask").click(function(){
    $(".skipToNav").addClass("off");
    $(this).hide();
  });
  
  var backButton = '<button class="back"><span class="sr-only">Back</span><i class="bi bi-arrow-left-circle-fill"></i></button>';
  
  $(".slide").append(backButton);
  $("section:first").find(".back").remove();
  
  $(".back").click(function(e){
    e.preventDefault();
    $(this).closest("section").prev().addClass("active");
    $(this).closest("section").removeClass("active");
  });
  
  $(".navToggle").click(function(e){
    //e.preventDefault();
    $(".mask").show();
    $(".skipToNav").toggleClass("off");
    $(".navigationArea").toggleClass("bottomMargin");
  });
  
  $("#pubmedSelect").click(function(e){
    e.preventDefault();
    $("section").removeClass("active");
    $("#pubmed1").addClass("active");
    $(".skipToNav").toggleClass("off");
    $(".mask").hide();
  });
  
  $("#googleScholarSelect").click(function(e){
    e.preventDefault();
    $("section").removeClass("active");
    $("#googleScholar1").addClass("active");
    $(".skipToNav").toggleClass("off");
    $(".mask").hide();
  });
  
  $("#proquestSelect").click(function(e){
    e.preventDefault();
    $("section").removeClass("active");
    $("#proquest1").addClass("active");
    $(".skipToNav").toggleClass("off");
    $(".mask").hide();
  });
  
  $(".end-trigger").click(function(e){
    e.preventDefault();
    $("section").removeClass("active");
    $("#pubmed1").addClass("active");
  });
  
 
 });
