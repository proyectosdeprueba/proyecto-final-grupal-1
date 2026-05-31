$(document).ready(function() {
    // Animación interactiva para el menú desplegable (Dropdown)
    $('.dropdown-toggle').click(function(e) {
        e.preventDefault(); // Evita que recargue la página al hacer clic
        $(this).next('.dropdown-menu').slideToggle(300);
    });

    // Cerrar el menú si se hace clic fuera de él
    $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown')) {
            $('.dropdown-menu').slideUp(300);
        }
    });
});const robotBtn =
document.getElementById("robotBtn");

const chatBox =
document.getElementById("chatBox");

robotBtn.onclick = () => {

if(chatBox.style.display==="block"){

chatBox.style.display="none";

}else{

chatBox.style.display="block";

}

};

function respuesta(opcion){

const respuestaBot =
document.getElementById("respuestaBot");

let texto = "";

switch(opcion){

case "productos":
texto = "Tenemos PCs Gamer, laptops, monitores y accesorios.";
break;

case "promos":
texto = "Actualmente tenemos descuentos en periféricos gamer.";
break;

case "contacto":
texto = "Puedes contactarnos al 2222-2222.";
break;

case "horario":
texto = "Atendemos de lunes a sábado de 8 AM a 6 PM.";
break;

}

respuestaBot.innerHTML =
`<p style="margin-top:15px;"><b>TechBot:</b> ${texto}</p>`;



chatBody.scrollTop = chatBody.scrollHeight;


}
document.getElementById("cerrarChat").onclick = () => {

chatBox.style.display = "none";

};
setTimeout(() => {

const msg =
document.getElementById("robotMsg");

if(msg){

msg.style.display = "none";

}

}, 5000);
