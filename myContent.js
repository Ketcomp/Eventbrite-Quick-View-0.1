/*Careful separation of code ensures that all the places referred to by 
various "id's" is accessed only after they are created.*/

//Load data about the events in this week and the next weekend from the local storage.
var gotThisWeekLocal = localStorage.getItem('thisWeekLocal');
gotThisWeekLocal = JSON.parse(gotThisWeekLocal);
var gotNextWeekLocal = localStorage.getItem('nextWeekLocal');
gotNextWeekLocal = JSON.parse(gotNextWeekLocal);

//Current events
var e1 = document.getElementById("e1");
var e2 = document.getElementById("e2");
var e3 = document.getElementById("e3");
var e4 = document.getElementById("e4");
//Next weekend events
var ne1 = document.getElementById("ne1");
var ne2 = document.getElementById("ne2");
var ne3 = document.getElementById("ne3");
var ne4 = document.getElementById("ne4");

//The variable gotThisWeekLocal contains all the pertinent data for current events
e1.innerHTML = gotThisWeekLocal.events[0]["name"]["text"];
e1.href = gotThisWeekLocal.events[0]["url"];
e2.innerHTML = gotThisWeekLocal.events[1]["name"]["text"];
e2.href = gotThisWeekLocal.events[1]["url"];
e3.innerHTML = gotThisWeekLocal.events[2]["name"]["text"];
e3.href = gotThisWeekLocal.events[2]["url"];
e4.innerHTML = gotThisWeekLocal.events[3]["name"]["text"];
e4.href = gotThisWeekLocal.events[3]["url"];
//The variable gotNextWeekLocal contains all the pertinent data for the next week
ne1.innerHTML = gotNextWeekLocal.events[0]["name"]["text"];
ne1.href = gotNextWeekLocal.events[0]["url"];
ne2.innerHTML = gotNextWeekLocal.events[1]["name"]["text"];
ne2.href = gotNextWeekLocal.events[1]["url"];
ne3.innerHTML = gotNextWeekLocal.events[2]["name"]["text"];
ne3.href = gotNextWeekLocal.events[2]["url"];
ne4.innerHTML = gotNextWeekLocal.events[3]["name"]["text"];
ne4.href = gotNextWeekLocal.events[3]["url"];