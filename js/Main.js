/* ======== MENU SHOW ============= */

const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/* movimiento de palabras */

const typed = new Typed('.typed', {
    strings:['<i class="Actividad">MAYOR</i>',
      '<i class="Actividad">UNIDAD </i>',
    ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: true, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

/* ======== REMOVE MENU ===== */

const navLink = document.querySelectorAll('.nav__link'),
    navMenu = document.getElementById('nav-menu')

function linkAction(){
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener ('click',linkAction) )

/* ==== SCROLL SECTION ACTIVE LINK ===== */
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 40
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[herf*='+ sectionId+']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[herf*='+sectionId+']').classList.remove('active')
        }

    })
}
/* ==== CHANGE COLOR HEADER ===== */
window.onscroll = ()=>{
    const nav = document.getElementById('header')
    if(this.scrollY >= 200)nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
}

