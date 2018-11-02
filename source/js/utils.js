function debounce(fn,delay){
  var timer;
  return function(){
    var args = arguments;
    var that = this;
    clearTimeout(timer);

    timer = setTimeout(function(){
      fn.apply(that,args);
    },delay);
  };
}

function throttle(fn,threshhold){
  var timer;
  var last;
  threshhold || (threshhold = 250);
  return function(){
    var that = this;
    var args = arguments;
    var now = Date.now();
    clearTimeout(timer);
    if (last && last + threshhold > now){
      timer = setTimeout(function(){
        last = Date.now();
        fn.apply(that,args);
      },threshhold);
    }else{
      last = Date.now();
      fn.apply(that,args);
    }
  };
}
window.debounce = debounce;
window.throttle = throttle;
