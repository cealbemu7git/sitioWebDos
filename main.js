document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

function mostrarUno() {
    document.getElementById('seccionUno').style.display = 'none';
    document.getElementById('seccionDos').style.display = 'block';
    document.getElementById('seccionTres').style.display = 'none';
    document.getElementById('seccionCuatro').style.display = 'none';
    document.getElementById('seccionCinco').style.display = 'none';
}

function mostrarDos() {
    document.getElementById('seccionUno').style.display = 'none';
    document.getElementById('seccionDos').style.display = 'none';
    document.getElementById('seccionTres').style.display = 'block';
    document.getElementById('seccionCuatro').style.display = 'none';
    document.getElementById('seccionCinco').style.display = 'none';
}

function mostrarTres() {
    document.getElementById('seccionUno').style.display = 'none';
    document.getElementById('seccionDos').style.display = 'none';
    document.getElementById('seccionTres').style.display = 'none';
    document.getElementById('seccionCuatro').style.display = 'block';
    document.getElementById('seccionCinco').style.display = 'none';
}

function mostrarCuatro() {
    document.getElementById('seccionUno').style.display = 'none';
    document.getElementById('seccionDos').style.display = 'none';
    document.getElementById('seccionTres').style.display = 'none';
    document.getElementById('seccionCuatro').style.display = 'none';
    document.getElementById('seccionCinco').style.display = 'block';
}

function mostrarCinco() {
    document.getElementById('seccionUno').style.display = 'block';
    document.getElementById('seccionDos').style.display = 'none';
    document.getElementById('seccionTres').style.display = 'none';
    document.getElementById('seccionCuatro').style.display = 'none';
    document.getElementById('seccionCinco').style.display = 'none';
}