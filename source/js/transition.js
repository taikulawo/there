/* eslint-disable */
$(function(){
  $(".index-posts, .post-container")
    .velocity("stop")
    .velocity("transition.slideUpIn",{
      delay:500,
      duration:1000,
      easing:"easeInOutQuart"
    })
})