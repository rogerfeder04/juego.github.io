

// Objeto que contiene las categorías y las palabras asociadas
let wordsByCategory = {
    'Carros Deportivos': ['Ferrari','Porsche','Chevrolet Corvette','Lamborghini Huracán','Nissan GTR'],
    'Jugadores Futbol': ['cristiano', 'maradona', 'valderrrama', 'falcao', 'neymar'],
    'Animales salvajes': ['pantera', 'zorro', 'cocodrilo', 'venado', 'hipopotamo']
};

// document.getElementById('categories').style.display = 'none';
//evento juega play
document.getElementById('playButton').addEventListener('click', function() {
    document.getElementById('categories').style.display = 'block';
    document.getElementById('playButton').style.display = 'none';
    document.getElementById('Bienvenido').style.display = 'none';
});

//evento categorias
document.querySelectorAll('.categoryButton').forEach(button => {
    button.addEventListener('click', function() {
        let category = this.dataset.category;
        // Mostrar las palabras correspondientes a la categoría seleccionada
        let words = wordsByCategory[category];
        console.log(words); // Solo para comprobar en la consola
        document.getElementById('categories').style.display = 'none';
        document.getElementById('difficulty').style.display = 'block';
    });
});

//evento dificultad
document.querySelectorAll('.difficultyButton').forEach(button => {
    button.addEventListener('click', function() {
        let difficulty = this.dataset.difficulty;
        document.getElementById('difficulty').style.display = 'none';
        document.getElementById('game').style.display = 'block';
        // Cambiar la imagen de fondo dependiendo de la dificultad seleccionada
        document.getElementById('backgroundImg').src = './imagenesjuego/inicio juego.jpg';

        // Generar el teclado con las letras del abecedario
        let keyboard = document.getElementById('keyboard');
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let keysPerRow = 13; // Número de teclas por fila

        for (let i = 0; i < alphabet.length; i++) {
            let key = document.createElement('button');
            key.textContent = alphabet[i];
            key.classList.add('key');
            keyboard.appendChild(key);

            // Agregar salto de línea después de cierto número de teclas
            if ((i + 1) % keysPerRow === 0) {
                keyboard.appendChild(document.createElement('br'));
            }
        }
    });
});

