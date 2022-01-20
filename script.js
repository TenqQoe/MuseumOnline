const MyTitle = document.getElementById("MyTitle");
const myimage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

let lokaties = 
[
    {
        "titel": "Havenstad",
        "Description": "De havenstad"
        "image": "foto/Havenstad.jpg",
    },
    {
        "titel": "Verhaal van de Walvis",
        "Description": "de geschiedenis van de walvis en walvis jacht"
        "image": "foto/Walvisverhaal.jpg",
    }
    {
        "titel": "Willem van de Velde & Zoon",
        "Description": "een gallerij vol kunsten van Willem van de Velde en zijn Zoon"
        "image": "foto/WillemEnZoon.jpg",
    }
    {
        "titel": "Hoofd gallerij",
        "Description": "Hier ziet u ..."
        "image": "foto/Hoofdgallerij.jpg",
    }
    {
        "titel": "VR Experience",
        "Description": "Hier ziet u ..."
        "image": "foto/VR room.jpg",
    }
    {
        "titel": "Koningssloep",
        "Description": "Hier ziet u ..."
        "image": "foto/Koningssloep.jpg",
    }
    {
        "titel": "VOC Schip Amsterdam",
        "Description": "Hier ziet u ..."
        "image": "foto/VOCschip.jpg",
    }
    {
        "titel": "Stoomschip Christiaan Brunings",
        "Description": "Hier ziet u ..."
        "image": "foto/ChristiaanBrunings.jpg",
    }
    {
        "titel": "Jachtmodellen",
        "Description": "Hier ziet u ..."
        "image": "foto/Jachtmodellen.jpg",
    }
    {
        "titel": "Navigatie Instrumenten",
        "Description": "Hier ziet u ..."
        "image": "foto/NavigatieInstrumenten.jpg",
    }
    {
        "titel": "Scheepsornamenten",
        "Description": "Hier ziet u ..."
        "image": "foto/Ornamenten.jpg",
    }
    {
        "titel": "Verloren Gewaand Manuscript",
        "Description": "Hier ziet u ..."
        "image": "Manuscript.jpg",
    }
];

//myTitle.innerHTML = "iets";
//myImage.src = "foto/windroos.png";

function show(index){
    MyTitle.innerHTML = lokaties[index].titel;
    myimage.src = lokaties[index].image;
}

function getInput(){
    show(myInput.value);
    console.log(myInput.value)
}
