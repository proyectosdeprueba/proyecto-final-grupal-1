$(document).ready(function() {
  
    $('.dropdown-toggle').click(function(e) {
        e.preventDefault(); 
        $(this).next('.dropdown-menu').slideToggle(300);
    });

  
    $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown')) {
            $('.dropdown-menu').slideUp(300);
        }
    });
});
/* EFECTO 3D TARJETAS */

const cards =

document.querySelectorAll(
".tarjeta-intro"
);



cards.forEach(card=>{


let rotX=0;
let rotY=0;

let velX=0;
let velY=0;



card.addEventListener(

"mousemove",

(e)=>{


let rect=

card.getBoundingClientRect();


let x=
e.clientX-
rect.left;


let y=
e.clientY-
rect.top;



let centerX=
rect.width/2;


let centerY=
rect.height/2;



velY=
(x-centerX)
/20;


velX=
-(y-centerY)
/20;



});



card.addEventListener(

"mouseleave",

()=>{


velX=0;
velY=0;


});





function animate(){


rotX+=

(velX-rotX)

*0.1;



rotY+=

(velY-rotY)

*0.1;



card.style.transform=


`perspective(1000px)

rotateX(${rotX}deg)

rotateY(${rotY}deg)`;


requestAnimationFrame(
animate
);


}



animate();



});



}
