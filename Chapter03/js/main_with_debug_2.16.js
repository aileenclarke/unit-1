//initialize function called when the script loads
function initialize(){
	cities();
	debugAjax();
};


// create a single array of objects for cities and population
function cities(){
		var cityPop = [
			{ 
				city: 'Madison',
				population: 233209
			},
			{
				city: 'Milwaukee',
				population: 594833
			},
			{
				city: 'Green Bay',
				population: 104057
			},
			{
				city: 'Superior',
				population: 27244
			}
		];
		
		//create a table element
		var table = document.createElement("table");

		//create a header row element and append it to the table
		var headerRow = document.createElement("tr");
		table.appendChild(headerRow);

		//create the "City" and "Population" column headers
		headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")
	
		//loop to add a new row for each city
		cityPop.forEach(function(cityObject){
			//assign longer html strings to a variable
			var rowHtml = "<tr><td>" + cityObject.city + "</td><td>" + cityObject.population + "</td></tr>";
			//add the row's html string to the table
			table.insertAdjacentHTML('beforeend',rowHtml);
		});
		
		//append the table element to the div
		document.querySelector("#mydiv").appendChild(table);

	addColumns(cityPop); //call the addColumns function with the argument cityPop
	addEvents(); //call the function addEvents
	
};

// create a function named addColumns
function addColumns(cityPop){
    
	// returns all objects that meet the selection criteria "tr". For each object, run the local function with arguments row and i
    document.querySelectorAll("tr").forEach(function(row, i){

		// if else statement adds column header City Size for i = 0
		if (i == 0){
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
			
		} else {

			// create variable named citySize and assign it a value based on its population size
			var citySize;
			
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
				
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
				

    		} else {
    			citySize = 'Large';
				
    		};
			
			// insert the value of citySize into the html at the position 'beforeend'
			row.insertAdjacentHTML('beforeend',citySize);      

    	};
    });
};

// create function named addEvents
function addEvents(){
	
	// returns all objects that meet the selection criteria "table" and add a mouseover listener with anonymous handler function
	document.querySelector("table").addEventListener("mouseover", function(){
		
		// create variable color that holds string 
		var color = "rgb(";

		// for loop that will loop 3 times
		for (var i=0; i<3; i++){

			// create variable random and assign numeric value
			var random = Math.round(Math.random() * 255);
			
			// update value of color by concatenating value of random
			color += random;
			
			// update value of color by concatenation
			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			};
		};
		
		// returns all objects that meet the selection criteria "table" and apply the color style with the value of "color" determined above
		document.querySelector("table").style.color = color;     
		
	});

	// create function clickme that will return alert
	function clickme(){

		alert('Hey, you clicked me!');
	};
	
	// returns all objects that meet the selection criteria "table" and add a click listener with the function click me
	document.querySelector("table").addEventListener("click", clickme)
};

// execute the script as soon as the DOM is prepared
document.addEventListener('DOMContentLoaded',initialize)


// callback function returns all objects that meet the selection criteria "mydiv" and inserts MegaCities data into html before end of html
function debugCallback(response){
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(response))
};

// functio debugAjax
function debugAjax(){
	fetch('data/MegaCities.geojson')  // fetch the data at extension data/MegaCities.geojson
        .then(function(response){	  // take the response of the fetch and return as a json format
            return response.json();
        }) 
        .then(debugCallback); 		  // send the value returned in the previous then call to the debugCallback fucntion

};




