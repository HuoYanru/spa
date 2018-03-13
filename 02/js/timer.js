var i=9;
var btn = $('#btn');
btn.val('同意('+i+'s)');
btn.attr('disabled','disabled')
var timer = setInterval(function(){
  btn.val('同意('+i--+'s)');
  if(i <= 0){
    clearInterval(timer);
    btn.val('同意');
    btn.removeAttr('disabled');
  }
},1000);
btn.click(function(){
  alert('就知道你会同意的');
})