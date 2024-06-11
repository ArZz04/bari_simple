
const pantallas = {
    "PANTALLAS": {
        "RES": {
            "RESOURCES": {
                "ID" : "1",
                "TIPO": "VIDEO",
                "NOMBRE": "PRECIOS",
                "URL": "http://localhost:8080/RESOURCES/RESOURCES.html",
                "DURACION": "10"
            }
        },
        "CERDO": {
            "RESOURCES": {
                "ID" : "1",
                "TIPO": "VIDEO",
                "NOMBRE": "PRECIOS",
                "URL": "http://localhost:8080/RESOURCES/RESOURCES.html",
                "DURACION": "10"
            }
        },
        "CENTRO": {
            "RESOURCES": {
                "ID" : "1",
                "TIPO": "VIDEO",
                "NOMBRE": "PRECIOS",
                "URL": "http://localhost:8080/RESOURCES/RESOURCES.html",
                "DURACION": "10"
            }
        },
        "POLLO": {
            "RESOURCES": {
                "ID" : "1",
                "TIPO": "VIDEO",
                "NOMBRE": "PRECIOS",
                "URL": "http://localhost:8080/RESOURCES/RESOURCES.html",
                "DURACION": "10"
            }
        },
        "MARISCO": {
            "RESOURCES": {
                "ID" : "1",
                "TIPO": "VIDEO",
                "NOMBRE": "PRECIOS",
                "URL": "http://localhost:8080/RESOURCES/RESOURCES.html",
                "DURACION": "10"
            }
        },
        "IMAGES": {
            "RESOURCES": [
                {
                    "ID" : "0",
                    "TIPO": "IMAGEN",
                    "NOMBRE": "PRECIOS-RES",
                    "URL": "/public/images/publicidad/PRECIOS-RES.png",
                    "DURACION": "10"
                },
                {
                    "ID" : "1",
                    "TIPO": "IMAGEN",
                    "NOMBRE": "RANCHO1",
                    "URL": "/public/images/publicidad/RANCHO1.JPG",
                    "DURACION": "10"
                },
                {
                    "ID" : "2",
                    "TIPO": "IMAGEN",
                    "NOMBRE": "RANCHO2",
                    "URL": "/public/images/publicidad/RANCHO2.JPG",
                    "DURACION": "10"
                },
                {
                    "ID" : "3",
                    "TIPO": "IMAGEN",
                    "NOMBRE": "RANCHO3",
                    "URL": "/public/images/publicidad/RANCHO3.JPG",
                    "DURACION": "10"
                },
                {
                    "ID" : "4",
                    "TIPO": "IMAGEN",
                    "NOMBRE": "RANCHO4",
                    "URL": "/public/images/publicidad/RANCHO4.JPG",
                    "DURACION": "10"
                },
                {
                    "ID" : "5",
                    "TIPO": "IMAGEN",
                    "NOMBRE": "RANCHO5",
                    "URL": "/public/images/publicidad/RANCHO5.JPG",
                    "DURACION": "10"
                }
            ]
        }
    }
}

function getResourcesPantalla(pantalla, tipo) {
    return pantallas.PANTALLAS[pantalla].RESOURCES.filter(resource => resource.TIPO === tipo)
}

function changeImage(url){
    document.getElementById("imageSrc").src = url;
}

function runLoopImages() {
    let images = getResourcesPantalla("IMAGES", "IMAGEN");
    let delay = 0; // Inicializamos el retardo como 0
    
    function showNextImage() {
        images.forEach((image, index) => {
            console.log(index); // Imprimir la imagen
            setTimeout(() => {
                console.log(image); // Imprimir la imagen
                changeImage(image.URL); // Cambiar la imagen
                if (index === images.length - 1) { // Si es la última imagen
                    // Luego de mostrar todas las imágenes, reiniciar el bucle
                    setTimeout(runLoopImages, delay); // Reiniciar el bucle después de que se hayan mostrado todas las imágenes
                }
            }, delay + (image.DURACION * 1000 * index)); // Añadir el retardo basado en el índice de la imagen
            delay += image.DURACION * 1000 ; // Añadir la duración total de todas las imágenes al retardo
        });
    }
    
    showNextImage(); // Mostrar todas las imágenes
}

runLoopImages(); // Iniciar el bucle de imágenes
