var uneye = $('#uneye');
var inp = $('#inp');
uneye.mouseover(function(){
  uneye[0].src = "images/password.png";
  inp.attr('type','textbox');
});
uneye.mouseout(function(){
  uneye[0].src = "images/password.png";
  inp.attr('type','password');
})