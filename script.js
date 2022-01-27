const myTitle = document.getElementById("myTitle");
const myText = document.getElementById("myText");
const myText2 = document.getElementById("myText2");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

let lokaties = [
    {
        "titel":"Begin",
        "image":"foto/windroos.png",
        "text":"Welke kant wilt u op?",
        "text2":"1 = Westvleugel, 3 = Noordvleugel, 9 = Oostvleugel"
    },
    {
        "titel":"Havenstad",
        "image":"foto/Havenstad.jpg",
        "text":"Hier staan apperaturen die in 1700 werden gebruikt.",
        "text2":"2 gaat naar Verhaal van de walvis, 0 gaat terug naar begin"
    },
    {
        "titel":"Verhaal van de Walvis",
        "image":"foto/Walvisverhaal.jpg",
        "text":"De geschiedenis va walvisjacht.",
        "text2":"0 gaat terug naar begin, 1 gaat terug naar havenstad."

    },
    {
        "titel":"Willem van de Velde & Zoon",
        "image":"foto/WillemEnZoon.jpg",
        "text":"Schilderijen van Willem van de Velde en zijn zoon.",
        "text2":"4 gaat verder naar de Hoofdgallerij, 0 gaat terug naar begin."

    },
    {
        "titel":"Hoofd Gallerij",
        "image":"foto/Hoofdgallerij.jpg",
        "text":"Gallerij van kunst uit de tijd van de VOC.",
        "text2":"5 = verder naar VR experience, 4 = terug naar Willem V.D & Zoon"
    },
    {
        "titel":"VR Experience",
        "image":"foto/VR room.jpg",
        "text":"Reis met een VR headset door de tijd van de VOC.",
        "text2":"6 = verder naar Koningssloep, 5 = Terug naar Hoofdgallerij"
    },
    {
        "titel":"Koningssloep",
        "image":"foto/Koningssloep.jpg",
        "text":"Bekijk het schip die door meerdere koningklijkheden is gebruikt.",
        "text2":"7 = verder naar VOC Schip, 5 = terug naar VR experience"
    },
    {
        "titel":"VOC Schip Amsterdam",
        "image":"foto/VOCschip.jpg",
        "text":"Een  schip dat verloren is gegaan in 1749, waar nu een replica van is gemaakt",
        "text2":"8 = verder naar Stoomschip Christiaan Brunings, 6 = terug naar Koningssloep"
    },
    {
        "titel":"Stoomschip Christiaan Brunings",
        "image":"foto/ChristiaanBrunings.jpg",
        "text":"Stoomboot die is gebouwd in 1900",
        "text2":"9 = terug naar begin, 7 = terug naar VOC schip"
    },
    {
        "titel":"Jachtmodellen",
        "image":"foto/Jachtmodellen.jpg",
        "text":"op schaal gemaakte kopies van gebruikten jachtschepen",
        "text2":"10 = verder naar Navigatie Instrumenten, 0 = terug naar begin"
    },
    {
        "titel":"Navigatie Instrumenten",
        "image":"foto/NavigatieInstrumenten.jpg",
        "text":"Apperatuur dat werd gebruikt voor Navigatie op boten",
        "text2":"11 = verder naar Scheepsornamenten, 9 = terug naar jachtmodellen"
    },
    {
        "titel":"Scheeps Ornamenten",
        "image":"foto/Ornamenten.jpg",
        "text":"scheepsversiering",
        "text2":"12 = verder naar een verloren gewaand manuscript, 10 = terug naar navigatie instrumenten"
    },
    {
        "titel":"Een verloren gewaand manuscript",
        "image":"foto/Manuscript.jpg",
        "text":"oude teksten over de Banda-eilanden",
        "text2":"0 = verder naar begin"
    }



]

function show(index){
    myTitle.innerHTML = lokaties[index].titel;
    myText.innerHTML = lokaties[index].text;
    myText2.innerHTML = lokaties[index].text2;
    myImage.src = lokaties[index].image;
}

function getInput(){
    show(myInput.value)
    console.log(myInput.value)
}


show(0);
