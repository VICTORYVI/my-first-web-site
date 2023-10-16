var body = {
 setbackgroundColor: function(color){
    $("body").css("background-color", color)
 },
 setColor: function(color){
    $("body").css("color", color)
 } 
}

var links = {
 setColor: function(color){
    $("a").css("color", color)
 }
}





function pinkbluehandler(self) {
  if(self.value== 'blue') {
  body.setbackgroundColor('powderblue');
  body.setColor('white');
  links.setColor('pink');
  self.value='pink';
  }
   else{
    body.setbackgroundColor('pink');
    body.setColor('black');
    links.setColor('blue');
    self.value='blue';
   }
}