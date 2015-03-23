	//Change icon of the extension when fetching data with the help of API queries to the Eventbrite API
	chrome.browserAction.setIcon({path: "waiting.png"});
    
	//Get user's current latitude and longitude when extension is loaded
	//"latitude" and "longitude" cannot be accessed outside this function. So all the functionality must be inside this function.
	function showPosition(position) 
	{
	var latitude = position.coords.latitude.toString();
	var longitude = position.coords.longitude.toString();
	var apiKey = "BYBZV7RKGHBCE4UZEKL4";
	//These variables store the data returned for the URL queries for this week and next weekend.
	var currentEvents;
	var laterEvents;
	var nextFriday;
	var nextSunday;
	var thisWeek;
	var nextWeek;
	
	//Using moment.js to find the start and end dates of the next weekend.
	nextFriday = moment().utc().add(1, 'weeks').startOf('isoWeek').add(4, 'days').format("YYYY-MM-DDThh:mm:ssZ").toString().replace("+00:00", "Z");
	nextSunday = moment().utc().add(1, 'weeks').endOf('isoWeek').format("YYYY-MM-DDThh:mm:ssZ").toString().replace("+00:00", "Z");

	//Generating the URLs for querying events
	currentEvents = "https://www.eventbriteapi.com/v3/events/search/?popular=on&location.within=200mi&location.latitude="+ latitude +"&location.longitude="+ longitude +"&token="+ apiKey;
	laterEvents = "https://www.eventbriteapi.com/v3/events/search/?start_date.range_start="+ nextFriday +"&start_date.range_end="+ nextSunday +"&popular=on&location.within=150mi&location.latitude="+ latitude +"&location.longitude="+ longitude +"&token=BYBZV7RKGHBCE4UZEKL4";
    
	//HTTP Request variables
	var xhr = new XMLHttpRequest();
	var xhr2 = new XMLHttpRequest();

	//Get Events in this week
	xhr.open("GET", currentEvents, false);
	xhr.send();
	var data = xhr.responseText;
	thisWeek = JSON.parse(data);
	localStorage.setItem('thisWeekLocal', JSON.stringify(thisWeek));

	//Get Events in the next week
	xhr2.open("GET", laterEvents, false);
	xhr2.send();
	var data2 = xhr2.responseText;
	nextWeek = JSON.parse(data2);
	localStorage.setItem('nextWeekLocal', JSON.stringify(nextWeek));
	
	//Reset the extension icon to default picture.
	chrome.browserAction.setIcon({path: "icon.png"});
	}
	
	function getLocation() {
     if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
	 }
     else {
            alert("Geo-location is not supported by this browser");
	 }
    }
	document.addEventListener('ononline', getLocation(), false);