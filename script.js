
window.onscroll = function() {scrollFunction()};

function myFunction(){
 var x = document.getElementsByClassName("note");
  for (let i = 0; i < x.length; i++) {
    const element = x[i];
    element.style.color = "yellow";
    
  }
alert('a cor da sua nota mudou para amarelo');  
}

function scrollFunction(){
   const nav= document.getElementById('navbar');
   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      nav.style.backgroundColor='white';
    }else {
      nav.style.backgroundColor='transparent';
    }

}


