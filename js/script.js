setInterval(function() {
  document.getElementById("loader").style.display='none';
}, 2800);

var image = 0;

setInterval(function() {
  advertisement();
}, 60*(60*1000));

function advertisement() {
  setTimeout(function() {
    document.getElementById(image).style.display='inline'
  }, 0*1000);
  
  setTimeout(function() {
    document.getElementById(image).style.display='none'
    image++;
  }, (10*1000));
  //-------------------------------------------------
  setTimeout(function() {
    document.getElementById(image).style.display='inline'
  }, 15*(60*1000));
  
  setTimeout(function() {
    document.getElementById(image).style.display='none'
    image++;
  }, (15*(60*1000))+(10*1000));
//-------------------------------------------------
  setTimeout(function() {
    document.getElementById(image).style.display='inline'
  }, 30*(60*1000));
  
  setTimeout(function() {
    document.getElementById(image).style.display='none'
    image++;
  }, (30*(60*1000))+(10*1000));
//-------------------------------------------------
  setTimeout(function() {
    document.getElementById(image).style.display='inline'
  }, 45*(60*1000));
  
  setTimeout(function() {
    document.getElementById(image).style.display='none'
    
  }, (45*(60*1000))+(10*1000));
  //-------------------------------------------------
  image = 0;
}
  
  
    setInterval(function() {
      buttonClickRef()
      }, 3000);
      let money = null;
      let total = null;
      let lateC = 0;
      
      
      function buttonClickRef() {
        
        fetch("https://api.raisedforyou.com/api/v1/sessions/67EC02/donations", {
            method: 'GET'
          })
  
          .then(result => result.json())
          .then(data => {
            
            total = 0;
            for (var c = 0; c < data.length; c++) {
              total += data[c].amount+29;
              
              if(data.length != lateC) {
                console.log("it must be not equal"+ "data lenght is:" +data.length 
              +"and counter is:" +lateC)
                setTimeout(function() {
                  document.getElementById("message").style.display='inline'
                }, (3*1000));
                setTimeout(function() {
                  document.getElementById("message").style.display='none'
                }, (8*1000));
                lateC= data.length;
                console.log("this is late one must be equal"+ "data lenght is:" +data.length 
              +"and" +lateC)
              }
              
              
              }
              
            
          })
  
        var perc = 0;
        var i = 0;
  
        perc = Math.round((total / 100)+366);
        
        document.getElementById('percentage').innerHTML = "€" + perc;
        document.getElementById('percentageUp').innerHTML = "€1000" ;
        document.getElementById('percentageDown').innerHTML = "€0" ;
        document.getElementById("pipe").style.display='inline';
       
         var bar = new ldBar(".myBar", {
          "preset": "energy",
         });

         bar.set(perc/10, true);
        
      }
  
      function percentage(per) {
        return Math.round((100 / 1000) * per);
      }
  
    
     