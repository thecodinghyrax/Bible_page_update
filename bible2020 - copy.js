//This sets the value of the day to today's "Day number"(current day number)
var today = new Date()
var version = "NIV";
console.log(today);



var day = Math.ceil((today - new Date(today.getFullYear(), 0, 1)) / 86400000);
//day = 365 // For testing. Comment out when go live.
year = today.getFullYear();
year = 2017 // For testing. Comment out when go live.
console.log("The start day of the year is : " + day);
console.log("The start year is : " + year);

var requestURL = "https://raw.githubusercontent.com/thecodinghyrax/gh-pages/master/final" + year + ".json"
var request = new XMLHttpRequest();
request.open('GET', requestURL)
request.responseType = 'json';
request.send();


function createLink(verse){
    var gatewayLinkMain = "https://www.biblegateway.com/passage/?search=";
    if (verse.includes("(")){
      verse = verse.split("(");
      verse[1].replace(")", "");
      link = gatewayLinkMain + verse[0] + "&version=" + verse[1];
    }
    else {
      link = gatewayLinkMain + verse + "&version=" + version;
    }
    return link
}

function dateLine(line){
    var line1 = document.createElement("h2");
    var text1 = document.createTextNode("Daily Text - " + line);
    line1.appendChild(text1);
    document.querySelector("body").appendChild(line1);
}

function verseLine (line){
        var para = document.createElement("p");
        for (var j = 0; j < line.length; j++){
            var span = document.createElement("span");
            var anchor = document.createElement("a");
            var text = document.createTextNode(line[j]);
            var tab = document.createTextNode("\t\t");
            anchor.appendChild(text);
            anchor.setAttribute("href", createLink(line[j]));
            anchor.setAttribute("target", "_blank");
            span.appendChild(anchor);
            para.appendChild(span);
            para.appendChild(tab);
            }
        document.querySelector("body").appendChild(para);
        version = "NIV";
        }

function textAndVerse(line) {
    var para = document.createElement("p");
    var span = document.createElement("span");
    var verseSpan = document.createElement("span");
    var anchor = document.createElement("a");
    var text = document.createTextNode(line[0]);
    var verseText = document.createTextNode(line[1]);
    var tab = document.createTextNode("\t\t");

    span.appendChild(text);
    para.appendChild(span);
    anchor.appendChild(verseText);
    anchor.setAttribute("href", createLink(line[1]));
    anchor.setAttribute("target", "_blank");
    verseSpan.appendChild(anchor);
    para.appendChild(verseSpan);
    document.querySelector("body").appendChild(para);
    version = "NIV";
    
}

function textOnly(line){
    var para = document.createElement("p");
    var text = document.createTextNode(line);
    para.appendChild(text);
    document.querySelector("body").appendChild(para);
}

function sectionHeading(heading){
    var heading2 = document.createElement("h3");
    var text = document.createTextNode(heading);
    heading2.appendChild(text);
    document.querySelector("body").appendChild(heading2);
}

function textOnlyH1(line){
    var para = document.createElement("h1");
    var text = document.createTextNode(line);
    para.appendChild(text);
    document.querySelector("body").appendChild(para);
}

function textOnlyH2(line){
    var para = document.createElement("h2");
    var text = document.createTextNode(line);
    para.appendChild(text);
    document.querySelector("body").appendChild(para);
}

function fiveLineDay(currentDayEntry){
    //This is a reset of the body
    var body = document.querySelector("body");
    body.innerHTML = '';
    // Handeling line 1
    dateLine(currentDayEntry["line1"]);
    // Handeling line 2
    sectionHeading("Daily Scripture Lessions");
    verseLine(currentDayEntry["line2"]);
    // Handeling line 3
    sectionHeading("Watchword For the Day");
    textAndVerse(currentDayEntry["line3"]);
    // Handeling line 4
    sectionHeading("Doctrinal Text");
    textAndVerse(currentDayEntry["line4"]);
    // Handeling line 5
    sectionHeading("Prayer");
    textOnly(currentDayEntry["line5"]);
}

function sixLineDay(currentDayEntry){
    //This is a reset of the body
    var body = document.querySelector("body");
    body.innerHTML = '';
    // Handeling line 1
    textOnlyH1(currentDayEntry["line1"]);
    // Handeling line 2
    dateLine(currentDayEntry["line2"]);
    // Handeling line 3
    sectionHeading("Daily Scripture Lessions");
    verseLine(currentDayEntry["line3"]);
    // Handeling line 4
    sectionHeading("Watchword For the Day");
    textAndVerse(currentDayEntry["line4"]);
    // Handeling line 5
    sectionHeading("Doctrinal Text");
    textAndVerse(currentDayEntry["line5"]);
    // Handeling line 6
    sectionHeading("Prayer");
    textOnly(currentDayEntry["line6"]);
}

function sevenLineDay(currentDayEntry){
    //This is a reset of the body
    var body = document.querySelector("body");
    body.innerHTML = '';
    // Handeling line 1
    textOnlyH1(currentDayEntry["line1"]);
    // Handeling line 2
    dateLine(currentDayEntry["line3"]);//order is switched intentionally
    // Handeling line 3
    sectionHeading("Watchword for the Week");
    verseLine(currentDayEntry["line2"]);//This will need to be fixed in the Parser. "Watchword" stuff will need to be striped. Todo
    // Handeling line 4
    sectionHeading("Daily Scripture Lessions");
    verseLine(currentDayEntry["line4"]);
    // Handeling line 5
    sectionHeading("Watchword For the Day");
    textAndVerse(currentDayEntry["line5"]);
    // Handeling line 6
    sectionHeading("Doctrinal Text");
    textAndVerse(currentDayEntry["line6"]);
    // Handeling line 7
    sectionHeading("Prayer");
    textOnly(currentDayEntry["line7"]);
}

function eightLineDay(currentDayEntry){//might want to consider parsing the "Watchword" and "Ascension" onto a seperate line and joining all verses. Todo
    //This is a reset of the body
    var body = document.querySelector("body");
    body.innerHTML = '';
    // Handeling line 1
    textOnlyH1(currentDayEntry["line1"]);
    // Handeling line 2
    dateLine(currentDayEntry["line3"]);//order is switched intentionally
    // Handeling line 3
    sectionHeading("Watchword for the Ascension");
    verseLine(currentDayEntry["line2"]);//This will need to be fixed in the Parser. "Watchword" stuff will need to be striped. Todo
    // Handeling line 4
    sectionHeading("Daily Scripture Lessions");
    verseLine(currentDayEntry["line4"]);
    // Handeling line 5
    sectionHeading("Watchword For the Day");
    textAndVerse(currentDayEntry["line5"]);
    // Handeling line 6
    sectionHeading("Doctrinal Text");
    textAndVerse(currentDayEntry["line6"]);
    // Handeling line 7
    sectionHeading("Prayer");
    textOnly(currentDayEntry["line7"]);
}

function nineLineDay(currentDayEntry){//might want to consider parsing the "Watchword" and "Ascension" onto a seperate line and joining all verses. Todo
    //This is a reset of the body
    var body = document.querySelector("body");
    body.innerHTML = '';
    // Handeling line 1
    textOnlyH1(currentDayEntry["line1"]);
    // Handeling line 2
    textOnlyH2("line2")
    // Handeling line 3
    dateLine(currentDayEntry["line3"]);
    // Handeling line 4
    sectionHeading("Daily Scripture Lessions");
    verseLine(currentDayEntry["line4"]);
    // Handeling line 5
    verseLine(currentDayEntry["line5"]);//This will need to be fixed in the Parser. "Watchword" stuff will need to be striped. Todo
    // Handeling line 6
    verseLine(currentDayEntry["line6"]);
    // Handeling line 7
    sectionHeading("Watchword For the Day");
    textAndVerse(currentDayEntry["line7"]);
    // Handeling line 8
    sectionHeading("Doctrinal Text");
    textAndVerse(currentDayEntry["line8"]);
    // Handeling line 9
    sectionHeading("Prayer");
    textOnly(currentDayEntry["line9"]);
}
//This is where all the functions are called
request.onload = function() { //Add a function to check for line_count and call the approiate day function. Todo
    
    
    function main(){
    var data = request.response;
    console.log(data);
    if (data.myObj[day]["line_count"] == 5){
        fiveLineDay(data.myObj[day]);
    } else if (data.myObj[day]["line_count"] == 6){
        sixLineDay(data.myObj[day]);
    } else if (data.myObj[day]["line_count"] == 7){
        sevenLineDay(data.myObj[day]);
    } else if (data.myObj[day]["line_count"] == 8){
        eightLineDay(data.myObj[day]);
    } else if (data.myObj[day]["line_count"] == 9){
        nineLineDay(data.myObj[day]);
    } else {
        console.log("I have failed to match a line_count for today!")
        }

    var div = document.createElement("div");
    var buttonPrevious = document.createElement("button");
    buttonPrevious.setAttribute("id", "previous");
    buttonPrevious.innerHTML = "Previous";
    var buttonNext = document.createElement("button");
    buttonNext.setAttribute("id", "next");
    buttonNext.innerHTML = "Next";
    div.appendChild(buttonPrevious);
    div.appendChild(buttonNext);
    document.querySelector("body").appendChild(div);
    

    //Hides the previous button if date entry is not found (null) This would happen if you were at the first entry
    if (day <= 1 && year <= 2016){//This will need to be changed everytime a new year file is added. Todo
        document.getElementById("previous").style.visibility = "hidden";
    } else {
        document.getElementById("previous").style.visibility = "visible";
    };
    
    //Hides the next button if current day is displayed
    if (day >= 365 && year == 2018){ //This will need to be changed after go live. Todo
        document.getElementById("next").style.visibility = "hidden";
    } else {
        document.getElementById("next").style.visibility = "visible";
    };
    
    //defines button function. when pressed-increment or decrement the navCounter and reloads the main function
    document.getElementById("previous").onclick = function () {
        if (day == 1){
            year -= 1;
            day = 365;
            console.log("The day of the year is now = " + day);
            console.log("The year is now = " + year);
        } else {
            day -= 1;
        } 
            
        
        main(); };
    document.getElementById("next").onclick = function () {
        if (day == 365){
            year += 1;
            day = 1
            console.log("The day of the year is now = " + day);
            console.log("The year is now = " + year);
        } else {
            day += 1;
        }
       
        console.log("The day of the year is now = " + day);
        console.log("The year is now = " + year);
        main();};
  
  };
    
    main();    

}