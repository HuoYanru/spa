window.onload = function(){
  document.getElementById('rectangle__width').focus();
}
var calc = document.getElementById('rectangle__calc');
calc.onclick = function(){
  var width = document.getElementById('rectangle__width');
  var height = document.getElementById('rectangle__height');
  var per = document.getElementById('rectangle__perimeter');
  var are = document.getElementById('rectangle__area');
  $('#rectangle__perimeter').attr('disabled','disabled');
  $('#rectangle__area').attr("disabled",'disabled');
  if(width.value !== "" && height.value !== ""){
    per.value = width.value * 2 + height.value * 2;
    are.value = width.value * height.value;
  }
  else{
    document.getElementById('tx1').innerHTML = "*";
    document.getElementById('tx2').innerHTML = "*";
  }
  width.onfocus = function(){
    document.getElementById('tx1').innerHTML = "";
    document.getElementById('tx2').innerHTML = "";
  }
  height.onfocus = function(){
    document.getElementById('tx1').innerHTML = "";
    document.getElementById('tx2').innerHTML = "";
  }

  if(width.value ==''){
    document.getElementById('width_err').innerHTML="宽度不能为空"
  }
  if(height.value == ''){
    document.getElementById('height_err').innerHTML="高度不能为空"
  }
    
}


