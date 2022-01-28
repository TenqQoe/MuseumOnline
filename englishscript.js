const myTitle = document.getElementById("myTitle");
const myText = document.getElementById("myText");
const myText2 = document.getElementById("myText2");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

let lokaties = [
    {
        "titel":"start",
        "image":"Foto/windroos.png",
        "text":"where do you want to go to?",
        "text2":"1 = Westwing, 3 = Northwing, 9 = Eastwing"
    },
    {
        "titel":"Havenstad",
        "image":"Foto/Havenstad.jpg",
        "text":"equipment from the 1700s.",
        "text2":"2 = story of the whale, 0 = back to start"
    },
    {
        "titel":"Story of the whale",
        "image":"Foto/Walvisverhaal.jpg",
        "text":"The history of whale hunting",
        "text2":"0 = back to start, 1 = move back to Havenstad"

    },
    {
        "titel":"Willem van de Velde & Son",
        "image":"Foto/WillemEnZoon.jpg",
        "text":"Paintings from Willem vd Velde and his son",
        "text2":"4 = Move further to the Main gallery, 0 = go back to start"

    },
    {
        "titel":"Main Gallery",
        "image":"Foto/Hoofdgallerij.jpg",
        "text":"Gallery of art from the 1700s",
        "text2":"5 = move further to the VR experience, 4 = move back to willem vd Velde & Son"
    },
    {
        "titel":"VR Experience",
        "image":"Foto/VR room.jpg",
        "text":"Journey through the time of the VOC",
        "text2":"6 = Move further to koningssloep, 5 = move back to the Main Gallery"
    },
    {
        "titel":"Koningssloep",
        "image":"Foto/Koningssloep.jpg",
        "text":"See a ship that has been used by different royalties",
        "text2":"7 = move further to VOC Schip, 5 = move back to VR experience"
    },
    {
        "titel":"VOC Ship Amsterdam",
        "image":"Foto/VOCschip.jpg",
        "text":"Replica of a ship that sunk in 1749",
        "text2":"8 = Move further toStoomschip Christiaan Brunings, 6 = Move back to Koningssloep"
    },
    {
        "titel":"Steamboat Christiaan Brunings",
        "image":"Foto/ChristiaanBrunings.jpg",
        "text":"Steamboat that was used in 1900",
        "text2":"0 = Move back to start, 7 = move back to VOC schip"
    },
    {
        "titel":"Hunting Models",
        "image":"Foto/Jachtmodellen.jpg",
        "text":"made to scale copies of different ships from the time of the VOC",
        "text2":"10 = move further to Navigatie Instrumenten, 0 = move back to start"
    },
    {
        "titel":"Navigation Instruments",
        "image":"Foto/NavigatieInstrumenten.jpg",
        "text":"Equipment that was used vor navigation on boats",
        "text2":"11 = move further to Scheepsornamenten, 9 = move back to huntingmodels"
    },
    {
        "titel":"Ships Ornaments",
        "image":"Foto/Ornamenten.jpg",
        "text":"schip decoration",
        "text2":"12 = move further to a lost thought manuscript, 10 = move back to navigation instruments"
    },
    {
        "titel":"A lost thought manuscript",
        "image":"Foto/Manuscript.jpg",
        "text":"Old texts from the Banda-Islands",
        "text2":"0 = move back to start, 11 = move back to Schips Ornaments"
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