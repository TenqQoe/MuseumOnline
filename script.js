const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

let lokaties = [
    {
        "titel":"Begin",
        "image":"foto/windroos.png"
    },
    {
        "titel":"Havenstad",
        "image":"foto/Havenstad.jpg"
    },
    {
        "titel":"Verhaal van de Walvis",
        "image":"foto/Walvisverhaal.jpg"
    },
    {
        "titel":"Willem van de Velde & Zoon",
        "image":"foto/WillemEnZoon.jpg"
    },
    {
        "titel":"Hoofd Gallerij",
        "image":"foto/Hoofdgallerij.jpg"
    },
    {
        "titel":"VR Experience",
        "image":"foto/VR room.jpg"
    },
    {
        "titel":"Koningssloep",
        "image":"foto/Koningssloep.jpg"
    },
    {
        "titel":"VOC Schip Amsterdam",
        "image":"foto/VOCschip.jpg"
    },
    {
        "titel":"Stoomschip Christiaan Brunings",
        "image":"foto/ChristiaanBrunings.jpg"
    },
    {
        "titel":"Jachtmodellen",
        "image":"foto/Jachtmodellen.jpg"
    },
    {
        "titel":"Navigatie Instrumenten",
        "image":"foto/NavigatieInstrumenten.jpg"
    },
    {
        "titel":"Scheeps Ornamenten",
        "image":"foto/Ornamenten.jpg"
    },
    {
        "titel":"Een verloren gewaand manuscript",
        "image":"foto/Manuscript.jpg"
    }

]

function show(index){
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;
}

function getInput(){
    show(myInput.value)
    console.log(myInput.value)
}

show(0);
