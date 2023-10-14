var body = {
    setbackgroundColor :function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
   ,
   setColor : function(color){
    document.querySelector('body').style.color = color;
  }
   }

var links = {
   setColor : function(color){
    var i = 0;
    var alist = document.querySelectorAll('a');
    while (i<alist.length){
    alist[i].style.color= color;
    i = i+1;
       
    }
   }
}

/*function linksSetColor(color){
  var i = 0;
  var alist = document.querySelectorAll('a');
  while (i<alist.length){
  alist[i].style.color= color;
  i = i+1;
     
  }
}

function BodySetcolor (color){
  document.querySelector('body').style.color = color;
}

function BodybgSetColor(color){
  document.querySelector('body').style.backgroundColor= color;
}*/

function nightDayhandler(self){   
      if(self. value== 'day'){
      body.setbackgroundColor('white');
      body.setColor('black');
      links.setColor('powderblue');

      body.setbackgroundColor('white');
      body.setColor ('black');
      self.value='night'
      links.SetColor('powderblue')
      }

      else{
        body.setbackgroundColor('black');
        body.setColor('white');
        self.value='day'
        links.setColor('blue') 
    }
  }