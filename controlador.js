//LLAMADO POST PARA CONSUMR API Y OBTENER UN TOKEN
const llave1 = "grant_type=client_credentials";
const llave2 = "client_id=46c11e95c2294d08ad65281bdc012f9a";
const llave3 = "client_secret=a1cb7a2eb64f4cc3bea3a5c3fe95a00e";

const parametrosPOST = {
    method: "POST",
    headers: { "Content-Type":   'application/x-www-form-urlencoded' },
    body: llave1 + '&' + llave2 + '&' + llave3 
}
const urlPOST = "https://accounts.spotify.com/api/token";
fetch(urlPOST, parametrosPOST)
    .then(respuesta => respuesta.json())
    .then(datos => obtenerToken(datos));



//FUNCION PARA LLAMAR AL SERVICIO GET Y TRAER INFO DEL ARTISTA
function obtenerToken(datos) {

    let token = datos.access_token;
    token = "Bearer " + token; 

    const parametrosGET = {
        method: "GET",
        headers: { "Authorization": token }
    }

    const urlGET = "https://api.spotify.com/v1/artists/6vWDO969PvNqNYHIOW5v0m/top-tracks?market=US";

    fetch(urlGET, parametrosGET)
        .then(respuesta => respuesta.json())
        .then(datos => depurarArtista(datos));
}


function depurarArtista(datos) {

    //Datos que llegan del API
    let titulo1 = (datos.tracks[0].name);
    let audio1 = (datos.tracks[0].preview_url);
    let imagen1 = (datos.tracks[0].album.images[0].url);

    let titulo2 = (datos.tracks[1].name);
    let audio2= (datos.tracks[1].preview_url);
    let imagen2 = (datos.tracks[1].album.images[0].url);

    let titulo3 = (datos.tracks[2].name);
    let audio3= (datos.tracks[2].preview_url);
    let imagen3 = (datos.tracks[2].album.images[0].url);

   
    //Referencias a las etiquetas de HTML
    let titulo1DOM = document.getElementById("titulo1");
    let audio1DOM = document.getElementById("audio1");
    let imagen1DOM = document.getElementById("imagen1");

    let titulo2DOM = document.getElementById("titulo2");
    let audio2DOM = document.getElementById("audio2");
    let imagen2DOM = document.getElementById("imagen2");

    let titulo3DOM = document.getElementById("titulo3");
    let audio3DOM = document.getElementById("audio3");
    let imagen3DOM = document.getElementById("imagen3");

    //Modificando las etiquetas de HTML con los datos del API
    titulo1DOM.textContent = titulo1;
    audio1DOM.src = audio1;
    imagen1DOM.src = imagen1;

    titulo2DOM.textContent = titulo2;
    audio2DOM.src = audio2;
    imagen2DOM.src = imagen2;

    titulo3DOM.textContent = titulo3;
    audio3DOM.src = audio3;
    imagen3DOM.src = imagen3;

}

