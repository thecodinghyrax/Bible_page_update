//This sets the value of the day to today's "Day number"(current day number)
var today = new Date()
console.log(today);
var day = Math.ceil((today - new Date(today.getFullYear(), 0, 1)) / 86400000);
//day = 365 // For testing. Comment out when go live.
year = today.getFullYear();
year = 2017 // For testing. Comment out when go live.
console.log("Today is day : " + day);
console.log("This year is : " + year);

// Default bible version to use
var version = "NIV";

// This is the request function. I only moved it into a funtion to try to reuse it. So far, I can not figure a way to call this with a different "textYear" and retreive a new JSON file.
// I now have three JSON files on github to test this. final2016.json, final2017.json and final2019.json. They are all copies of final2017.json
// I am using the onclick button functions to change the day and year function but I think that the scope of that change is local to the main() function inside of the requests.onload function
// Not sure how to make the main() function run with out first calling the requests.onload function. I seem to be stuck in...I'm thinking that using globals would be a solution but I am
// told not to use them. I just can't figure a way around it. 
function getJsonFile(textYear){
    var requestURL = "https://raw.githubusercontent.com/thecodinghyrax/Bible_page_update_2019/master/final" + textYear + ".json"
    var request = new XMLHttpRequest();
    request.open('GET', requestURL)
    request.responseType = 'json';
    request.send();
    return request
}

// This will take a verse, check for and handle an alternative translation and return a biblegateway link to use as an attribute. 
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

// Creates an HTML line for date text
function dateLine(line){
    var line1 = document.createElement("h2");
    var text1 = document.createTextNode("Daily Text - " + line);
    line1.appendChild(text1);
    document.querySelector("body").appendChild(line1);
}

// Creates an HTML line for each verse in a verse line
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

// Creates an HTML line for a text line that contains text + verse. 
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

// Creates an HTML line for text only
function textOnly(line){
    var para = document.createElement("p");
    var text = document.createTextNode(line);
    para.appendChild(text);
    document.querySelector("body").appendChild(para);
}

// Creates an h3 section heading with text passed as "heading"
function sectionHeading(heading){
    var heading2 = document.createElement("h3");
    var text = document.createTextNode(heading);
    heading2.appendChild(text);
    document.querySelector("body").appendChild(heading2);
}

// Creates an h1 section heading with text passed as "line"
function textOnlyH1(line){
    var para = document.createElement("h1");
    var text = document.createTextNode(line);
    para.appendChild(text);
    document.querySelector("body").appendChild(para);
}

// Creates an h2 section heading with text passed as "line"
function textOnlyH2(line){
    var para = document.createElement("h2");
    var text = document.createTextNode(line);
    para.appendChild(text);
    document.querySelector("body").appendChild(para);
}

// The will handle all HTML for a JSON entry with five lines
function fiveLineDay(currentDayEntry){
    //This is a reset of the HTML body
    var body = document.querySelector("body");
    body.innerHTML = '';
    // Handeling line 1
    dateLine(currentDayEntry["line1"][0]);    
    // Handeling line 2
    sectionHeading("Daily Scripture Lessions");
    verseLine(currentDayEntry["line2"]);
    // Handeling line 3
    sectionHeading("Watchword For the Day");
    textOnly(currentDayEntry["line3"][0]);
    // Handeling line 4
    sectionHeading("Doctrinal Text");
    textOnly(currentDayEntry["line4"][0]);
    // Handeling line 5
    sectionHeading("Prayer");
    textOnly(currentDayEntry["line5"][0]);
}

// The will handle all HTML for a JSON entry with six lines
function sixLineDay(currentDayEntry){
    //This is a reset of the body
    var body = document.querySelector("body");
    body.innerHTML = '';
    // Handeling line 1
    textOnlyH1(currentDayEntry["line1"][0]);
    // Handeling line 2
    dateLine(currentDayEntry["line2"][0]);
    // Handeling line 3
    sectionHeading("Daily Scripture Lessions");
    verseLine(currentDayEntry["line3"]);
    // Handeling line 4
    sectionHeading("Watchword For the Day");
    textOnly(currentDayEntry["line4"]);
    // Handeling line 5
    sectionHeading("Doctrinal Text");
    textOnly(currentDayEntry["line5"]);
    // Handeling line 6
    sectionHeading("Prayer");
    textOnly(currentDayEntry["line6"]);
}

// The will handle all HTML for a JSON entry with seven lines
function sevenLineDay(currentDayEntry){
    //This is a reset of the body
    var body = document.querySelector("body");
    body.innerHTML = '';
    // Handeling line 1
    textOnlyH1(currentDayEntry["line1"][0]);
    // Handeling line 2
    dateLine(currentDayEntry["line3"][0]);//order is switched intentionally
    // Handeling line 3
    sectionHeading("Watchword for the Week");
    textOnly(currentDayEntry["line2"][0]);
    // Handeling line 4
    sectionHeading("Daily Scripture Lessions");
    verseLine(currentDayEntry["line4"]);
    // Handeling line 5
    sectionHeading("Watchword For the Day");
    textOnly(currentDayEntry["line5"][0]);
    // Handeling line 6
    sectionHeading("Doctrinal Text");
    textOnly(currentDayEntry["line6"]);
    // Handeling line 7
    sectionHeading("Prayer");
    textOnly(currentDayEntry["line7"]);
}

// The will handle all HTML for a JSON entry with eigth lines - Please note....this is still broken
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

// The will handle all HTML for a JSON entry with nine lines - Please note....this is still broken
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

var request = getJsonFile(year);

//This is where all the functions are called after the JSON is requested and loaded
request.onload = function() { //Add a function to check for line_count and call the approiate day function. Todo
    
    // Main function handles all of the other function calls. This will be recalled after the "next" and/or "previous" buttons are clicked
    function main(){
    var data = request.response;
    console.log(data);
    if (data.dayText[day]["line_count"] == 5){
        fiveLineDay(data.dayText[day]);
    } else if (data.dayText[day]["line_count"] == 6){
        sixLineDay(data.dayText[day]);
    } else if (data.dayText[day]["line_count"] == 7){
        sevenLineDay(data.dayText[day]);
    } else if (data.dayText[day]["line_count"] == 8){
        eightLineDay(data.dayText[day]);
    } else if (data.dayText[day]["line_count"] == 9){
        nineLineDay(data.dayText[day]);
    } else {
        console.log("I have failed to match a line_count for today!")
        }
    
    // This is creating the buttons and adding them to the HTML
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
    if (day <= 1 && year <= 2016){
        document.getElementById("previous").style.visibility = "hidden";
    } else {
        document.getElementById("previous").style.visibility = "visible";
    };
    
    //Hides the next button if current day is the last day in the last JSON file
    if (day >= 365 && year == 2018){ //This will need to be changed everytime a new year file is added. This will need to be changed after go live. Todo
        document.getElementById("next").style.visibility = "hidden";
    } else {
        document.getElementById("next").style.visibility = "visible";
    };
    
    // Defines button function. When pressed - decrement the day and reloads the main function or
    // decraments the year and resets the day if it is the first day of the year
    document.getElementById("previous").onclick = function () {
        if (day == 1){
            year -= 1;
            day = 365;
            console.log("The day of the year is now = " + day);
            console.log("The year is now = " + year);
        } else {
            day -= 1;
        } 
        main(); 
        };

    // Defines button function. When pressed - advances the day and reloads the main function or
    // advances the year and resets the day if it is the last day of the year
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
    
    // Initial call of the main() function
    main();    

}