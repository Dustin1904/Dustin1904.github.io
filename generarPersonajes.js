const conseguirPersonaje = async (id, number) => {
    fetch(`https://api.jikan.moe/v4/characters/${id}/full`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            pintarPersonaje(data, number);
        })
    .catch(error => {
        console.log(error);
    });
};

const btnAñadir = () => 
{
    let primerPersonaje = Math.round(Math.random() * 9999);
    let segundoPersonaje = Math.round(Math.random() * 9999);
    conseguirPersonaje(primerPersonaje,1);
    conseguirPersonaje(segundoPersonaje,2);
};

btnAñadir();

const lista = document.getElementById("personajes");

const pintarPersonaje = (data, id) =>
{
    let item = lista.querySelector(`#pok-${id}`);
    item.getElementsByTagName("img")[0].setAttribute("src", data.data.images.webp.image_url);
    item.getElementsByTagName("p")[0].innerHTML = data.data.name;
    item.getElementsByTagName("p")[1].innerHTML = data.data.name_kanji;
}

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname2
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselector
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1