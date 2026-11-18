const gruposMusculares = {
    pecho: {
        nombre: "Pecho",
        descripcion: "El pecho está formado por pecho superior, medio e inferior. Participa en movimientos de empuje y aproximación de los brazos",
        consejo: "Controla el descenso del peso y evita levantar los hombros durante los presses",
        ejercicios: [
            {
                nombre: "Press de banca",
                descripcion: "Acostado en un banco, baja la barra de forma controlada hacia el pecho y empuja hacia arriba",
                series: "4 series de 12 repeticiones"
            },
            {
                nombre: "Press inclinado",
                descripcion: "Utiliza un banco inclinado y empuja las mancuernas hacia arriba manteniendo el control",
                series: "4 series de 12 repeticiones"
            },
            {
                nombre: "Aperturas en peck deck",
                descripcion: "Con los codos ligeramente flexionados, abre los brazos y vuelve a juntarlos lentamente",
                series: "4 series de 12 repeticiones"
            }
        ]
    },

    espalda: {
        nombre: "Espalda",
        descripcion: "La espalda incluye músculos como el dorsal ancho, trapecio y romboides. Ayuda a realizar movimientos de tracción y estabilizar el cuerpo",
        consejo: "Evita impulsarte con el cuerpo y concéntrate en mover los brazos y los omóplatos de forma controlada",
        ejercicios: [
            {
                nombre: "Jalón al pecho",
                descripcion: "Sentado frente a la polea, lleva la barra hacia la parte superior del pecho sin balancearte",
                series: "4 series de 12 repeticiones"
            },
            {
                nombre: "Remo sentado",
                descripcion: "Lleva el agarre hacia el abdomen manteniendo el torso estable",
                series: "4 series de 12 repeticiones"
            },
            {
                nombre: "Remo con mancuerna",
                descripcion: "Apoya una mano en un banco y lleva la mancuerna hacia la cadera",
                series: "4 series de 12 repeticiones"
            }
        ]
    },

    piernas: {
        nombre: "Piernas",
        descripcion: "Las piernas incluyen cuádriceps, isquiotibiales, glúteos y pantorrillas. Son fundamentales para caminar, correr y mantener la estabilidad",
        consejo: "Utiliza un rango de movimiento que puedas controlar y mantén una postura estable",
        ejercicios: [
            {
                nombre: "Sentadilla",
                descripcion: "Flexiona caderas y rodillas para descender de manera controlada y vuelve a levantarte",
                series: "4 series de 12 repeticiones"
            },
            {
                nombre: "Peso muerto rumano",
                descripcion: "Lleva la cadera hacia atrás manteniendo la espalda estable y el peso cerca de las piernas",
                series: "4 series de 12 repeticiones"
            },
            {
                nombre: "Elevación de pantorrillas",
                descripcion: "Eleva los talones lentamente, mantén un instante y vuelve a bajar",
                series: "4 series de 12 repeticiones"
            }
        ]
    },

    hombros: {
        nombre: "Hombros",
        descripcion: "Los deltoides tienen porciones anterior, lateral y posterior. Participan en diferentes movimientos de los brazos",
        consejo: "Evita utilizar impulso y selecciona pesos que permitan movimientos controlados",
        ejercicios: [
            {
                nombre: "Press militar",
                descripcion: "Empuja las mancuernas hacia arriba sin arquear excesivamente la espalda",
                series: "4 series de 12 repeticiones"
            },
            {
                nombre: "Elevaciones laterales",
                descripcion: "Levanta las mancuernas hacia los lados con los codos ligeramente flexionados",
                series: "4 series de 12 repeticiones"
            },
            {
                nombre: "Pájaros",
                descripcion: "Inclina el torso y abre los brazos para trabajar la parte posterior del hombro",
                series: "4 series de 12 repeticiones"
            }
        ]
    },

    biceps: {
        nombre: "Bíceps",
        descripcion: "Los bíceps se encuentran en la parte anterior del brazo y ayudan a flexionar el codo y girar el antebrazo",
        consejo: "Mantén los codos relativamente estables y evita balancear el cuerpo",
        ejercicios: [
            {
                nombre: "Curl con mancuernas",
                descripcion: "Flexiona los codos para subir las mancuernas y bájalas lentamente",
                series: "4 series de 12 repeticiones"
            },
            {
                nombre: "Curl martillo",
                descripcion: "Sube las mancuernas manteniendo las palmas orientadas hacia el cuerpo",
                series: "4 series de 12 repeticiones"
            },
            {
                nombre: "Curl en polea",
                descripcion: "Flexiona los codos manteniendo tensión en el cable durante el movimiento",
                series: "4 series de 12 repeticiones"
            }
        ]
    },

    triceps: {
        nombre: "Tríceps",
        descripcion: "El tríceps se encuentra detrás del brazo y es responsable principalmente de extender el codo",
        consejo: "Evita mover demasiado los hombros y controla tanto la subida como la bajada",
        ejercicios: [
            {
                nombre: "Extensión en polea",
                descripcion: "Empuja el agarre hacia abajo extendiendo los codos sin balancearte",
                series: "4 series de 12 repeticiones"
            },
            {
                nombre: "Extensión por encima de la cabeza",
                descripcion: "Flexiona y extiende los codos manteniendo los brazos elevados",
                series: "4 series de 12 repeticiones"
            },
            {
                nombre: "Press cerrado",
                descripcion: "Realiza un press con un agarre relativamente estrecho y los codos controlados",
                series: "4 series de 12 repeticiones"
            }
        ]
    },

    abdomen: {
        nombre: "Abdomen",
        descripcion: "Los músculos abdominales ayudan a estabilizar el tronco, mantener la postura y controlar los movimientos del cuerpo",
        consejo: "Prioriza la estabilidad y la respiración en lugar de hacer repeticiones rápidamente",
        ejercicios: [
            {
                nombre: "Plancha",
                descripcion: "Mantén el cuerpo alineado apoyándote sobre antebrazos y puntas de los pies",
                series: "3 series de 30 segundos"
            },
            {
                nombre: "Crunch abdominal",
                descripcion: "Eleva ligeramente el tronco contrayendo el abdomen sin tirar del cuello",
                series: "3 series de 20 repeticiones"
            },
            {
                nombre: "Dead bug",
                descripcion: "Acostado boca arriba, extiende lentamente un brazo y la pierna contraria manteniendo el tronco estable",
                series: "3 series de 20 repeticiones por lado"
            }
        ]
    }
};

const informacionMusculo = document.getElementById("informacion_musculo");
const botonesMusculos = document.querySelectorAll(".boton_musculo");

function mostrarMusculo(nombreMusculo) {
    const musculo = gruposMusculares[nombreMusculo];

    if (!musculo) {
        return;
    }

    informacionMusculo.innerHTML = "";

    const titulo = document.createElement("h3");
    titulo.textContent = musculo.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = musculo.descripcion;

    const subtitulo = document.createElement("h4");
    subtitulo.textContent = "Ejercicios recomendados";

    const lista = document.createElement("div");
    lista.className = "lista_ejercicios";

    musculo.ejercicios.forEach(function(ejercicio) {
        const tarjeta = document.createElement("article");
        tarjeta.className = "ejercicio";

        const nombre = document.createElement("h4");
        nombre.textContent = ejercicio.nombre;

        const explicacion = document.createElement("p");
        explicacion.textContent = ejercicio.descripcion;

        const series = document.createElement("span");
        series.textContent = ejercicio.series;

        tarjeta.append(nombre, explicacion, series);
        lista.appendChild(tarjeta);
    });

    const consejo = document.createElement("p");
    consejo.style.marginTop = "20px";
    consejo.textContent = "Consejo: " + musculo.consejo;

    informacionMusculo.append(
        titulo,
        descripcion,
        subtitulo,
        lista,
        consejo
    );

    botonesMusculos.forEach(function(boton) {
        const seleccionado = boton.dataset.musculo === nombreMusculo;
        boton.classList.toggle("activo", seleccionado);
        boton.setAttribute("aria-pressed", seleccionado);
    });
}

botonesMusculos.forEach(function(boton) {
    boton.addEventListener("click", function() {
        mostrarMusculo(boton.dataset.musculo);
    });
});

const rutinas = {
    3: [
        { dia: "Lunes", entrenamiento: "Pecho, espalda, hombros y cardio" },
        { dia: "Miércoles", entrenamiento: "Pierna completa y abdomen" },
        { dia: "Viernes", entrenamiento: "Biceps, triceps y cardio" }
    ],

    4: [
        { dia: "Lunes", entrenamiento: "Pecho, espalda, hombros y cardio" },
        { dia: "Martes", entrenamiento: "Pierna parte delantera, pantorillas y abdomen" },
        { dia: "Jueves", entrenamiento: "Biceps, triceps y cardio" },
        { dia: "Viernes", entrenamiento: "Pierna parte trasera, pantorillas y abdomen" }
    ],

    5: [
        { dia: "Lunes", entrenamiento: "Pecho, espalda, hombros y cardio" },
        { dia: "Martes", entrenamiento: "Pierna parte delantera, pantorillas y abdomen" },
        { dia: "Miércoles", entrenamiento: "Biceps, triceps y cardio" },
        { dia: "Jueves", entrenamiento: "Pierna parte trasera, pantorillas y abdomen" },
        { dia: "Viernes", entrenamiento: "Pecho, espalda, hombros y cardio" }
    ],

    6: [
        { dia: "Lunes", entrenamiento: "Pecho, espalda, hombros y cardio" },
        { dia: "Martes", entrenamiento: "Pierna parte delantera, pantorillas y abdomen" },
        { dia: "Miércoles", entrenamiento: "Biceps, triceps y cardio" },
        { dia: "Jueves", entrenamiento: "Pierna parte trasera, pantorillas y abdomen" },
        { dia: "Viernes", entrenamiento: "Pecho, espalda, hombros y cardio" },
        { dia: "Sábado", entrenamiento: "Biceps, triceps y cardio" }
    ]
};

const selectorDias = document.getElementById("dias_entrenamiento");
const botonGenerar = document.getElementById("generar_rutina");
const resultadoRutina = document.getElementById("resultado_rutina");

function generarRutina() {
    const dias = selectorDias.value;
    const rutinaSeleccionada = rutinas[dias];

    resultadoRutina.innerHTML = "";

    rutinaSeleccionada.forEach(function(dia) {
        const tarjeta = document.createElement("article");
        tarjeta.className = "dia_rutina";

        const titulo = document.createElement("h3");
        titulo.textContent = dia.dia;

        const entrenamiento = document.createElement("p");
        entrenamiento.textContent = dia.entrenamiento;

        tarjeta.append(titulo, entrenamiento);
        resultadoRutina.appendChild(tarjeta);
    });
}

botonGenerar.addEventListener("click", generarRutina);

const botonMenu = document.getElementById("boton_menu");
const menu = document.getElementById("menu");

botonMenu.addEventListener("click", function() {
    const abierto = menu.classList.toggle("mostrar");

    botonMenu.setAttribute("aria-expanded", abierto);
    botonMenu.setAttribute(
        "aria-label",
        abierto ? "Cerrar menú" : "Abrir menú"
    );
});

document.querySelectorAll(".menu a").forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        menu.classList.remove("mostrar");
        botonMenu.setAttribute("aria-expanded", "false");
        botonMenu.setAttribute("aria-label", "Abrir menú");
    });
});

mostrarMusculo("pecho");
generarRutina();