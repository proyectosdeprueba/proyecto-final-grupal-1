$(document).ready(function() {

    $('.dropdown-toggle').click(function(e) {
        e.preventDefault();
        $(this).next('.dropdown-menu').slideToggle(300);
    });

    $(document).click(function(e) {
        var target = e.target;
        if (
            !$(target).is('.dropdown-toggle') &&
            !$(target).parents().is('.dropdown')
        ) {
            $('.dropdown-menu').slideUp(300);
        }
    });

});


const chatBox = document.getElementById("chatBox");
const robotBtn = document.getElementById("robotBtn");

if(robotBtn && chatBox){
    robotBtn.onclick = () => {
        if(chatBox.style.display === "block"){
            chatBox.style.display = "none";
        }else{
            chatBox.style.display = "block";
        }
    };
}


const cerrarChat = document.getElementById("cerrarChat");

if(cerrarChat && chatBox){
    cerrarChat.onclick = () => {
        chatBox.style.display = "none";
    };
}


function respuesta(opcion){
    const respuestaBot = document.getElementById("respuestaBot");
    if(!respuestaBot) return;

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

    respuestaBot.innerHTML = `
    <p style="margin-top:15px;">
        <b>TechBot:</b> ${texto}
    </p>`;
}


setTimeout(() => {
    const msg = document.getElementById("robotMsg");
    if(msg){
        msg.style.display = "none";
    }
}, 5000);


const cards = document.querySelectorAll(".tarjeta-intro");

cards.forEach(card => {
    let rotX = 0;
    let rotY = 0;
    let velX = 0;
    let velY = 0;

    card.addEventListener("mousemove", (e) => {
        let rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        let centerX = rect.width / 2;
        let centerY = rect.height / 2;

        velY = (x - centerX) / 20;
        velX = -(y - centerY) / 20;
    });

    card.addEventListener("mouseleave", () => {
        velX = 0;
        velY = 0;
    });

    function animate(){
        rotX += (velX - rotX) * 0.1;
        rotY += (velY - rotY) * 0.1;

        card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        requestAnimationFrame(animate);
    }

    animate();
});


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle && navLinks){
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


const abrirCarrito = document.getElementById("abrirCarrito");
const panelCarrito = document.getElementById("panelCarrito");
const cerrarCarritoBtn = document.getElementById("cerrarCarrito");
const listaCarrito = document.getElementById("listaCarrito");
const totalCarrito = document.getElementById("totalCarrito");
const contadorCarrito = document.getElementById("contadorCarrito");
const toast = document.getElementById("toast");
const toastTexto = document.getElementById("toastTexto");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

if(abrirCarrito && panelCarrito){
    abrirCarrito.addEventListener("click", () => {
        panelCarrito.classList.add("active");
    });
}

if(cerrarCarritoBtn && panelCarrito){
    cerrarCarritoBtn.addEventListener("click", () => {
        panelCarrito.classList.remove("active");
    });
}

const botonesAgregar = document.querySelectorAll(".btn-agregar");
botonesAgregar.forEach(boton => {
    boton.addEventListener("click", function(){
        const producto = this.dataset.producto;
        const precio = parseFloat(this.dataset.precio);

        carrito.push({ producto, precio });
        actualizarCarrito();
        mostrarToast(producto);
    });
});

function actualizarCarrito(){
    let total = 0;

    if(listaCarrito){
        listaCarrito.innerHTML = "";
    }

    carrito.forEach((item, index) => {
        total += item.precio;
        if(listaCarrito){
            listaCarrito.innerHTML += `
            <div style="background:#242b45; padding:15px; margin-bottom:10px; border-radius:12px;">
                <h4>${item.producto}</h4>
                <p>$${item.precio}</p>
                <button onclick="eliminarProducto(${index})" style="background:#e94560; border:none; padding:8px 12px; border-radius:8px; color:white; cursor:pointer;">
                    Eliminar
                </button>
            </div>`;
        }
    });

    if(contadorCarrito){
        contadorCarrito.textContent = `(${carrito.length})`;
    }

    if(totalCarrito){
        totalCarrito.textContent = total.toFixed(2);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));

    if(carrito.length === 0 && listaCarrito){
        listaCarrito.innerHTML = `<p class="carrito-vacio">Tu carrito está vacío</p>`;
    }
}

function eliminarProducto(index){
    carrito.splice(index, 1);
    actualizarCarrito();
}

function mostrarToast(producto){
    if(!toast || !toastTexto) return;

    toastTexto.textContent = `${producto} agregado al carrito`;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}


actualizarCarrito();

const darkBtn =
document.getElementById(
"darkModeBtn"
);

if(
localStorage.getItem(
"darkMode"
)==="on"
){

document.body.classList.add(
"dark-mode"
);

if(darkBtn){

darkBtn.textContent =
"☀️";

}

}

if(darkBtn){

darkBtn.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"dark-mode"
);

if(
document.body.classList.contains(
"dark-mode"
)
){

localStorage.setItem(
"darkMode",
"on"
);

darkBtn.textContent =
"☀️";

}else{

localStorage.setItem(
"darkMode",
"off"
);

darkBtn.textContent =
"🌙";

}

}
);

}
