/**
 * @author Prem Khanal
 */

/*
 * Important Prpject Stpes that need to be crarefully followed
 1. Setup dociment ready
 2. Load the google charting package
 3. Load data
 4. Construct the chart

 */

	console.log("My Fresh Data");
	
	/* This the function to define the newData
	 * 
	 */
	
	function newData(unemployment) {
		

	console.log(unemployment);
	
	var myDataBank = [];
	
	/* This is my container
	 * 
	 */
	var headerArray =["Date", "Value"];
	myDataBank.push(headerArray);
	
	/* Here I am telling my computer to look into just the observation section of the the json file 
	 * 
	 */
	
	var myDataStore = unemployment.observations;
	
	/*Here comes an important task of coverting my json data to an array of arrays because the structure that I have in the 
		 * json need to in the format that is accpetable to the google visulaization format. For that I will be using a fir 
		 * loop
		 * 
		 */
		
		
	for (var i = 300; i < myDataStore.length; i++) {
		
		var newData = myDataStore[i];
		var newArray = [newData.date, Number(newData.value)];
		myDataBank.push(newArray);
		
		
		
		var myDataTable = google.visualization.arrayToDataTable(myDataBank);
		
		var options = {title: "Umemployment worse in 20 years"};
		
	};

	var myNewChart = new google.visualization.LineChart(document.getElementById("dataBankDiv"));
	myNewChart.draw(myDataTable);
	
	
	console.log("Load the page");
	console.log(myDataBank);
}


/** Here is the command to define the new callback fountion named "chartData" and the console.log function will chekc whether it 
 * is workng properly. To CHeck, we have to go to the html page opened with Firefox and see in the console where I should be 
 * able to see the "show my databak" */

function chartData() {
	console.log("show my databank");
	
	/* Now I am loading the get function, a function that will take the data that we load in the json file. I am also introducting 
	 * a new callback called newData and "json" is my another parameter
	 */

	$.get("unemployment.json", newData, "json");


}


function dataSource() {
	console.log("Here is my page");

	/* Now I am going to work on gooogle chart loading function.
	 * and in addition to the property it has I am gioing to add a new property called callback and chartData is going to be 
	 * the name of callback funtion. */

	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "chartData"
	});

}

/* Docment ready function and dataSource is the name of my callback. */
$(document).ready(dataSource);

