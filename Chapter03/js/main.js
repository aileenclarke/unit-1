//initialize function called when script loads
function initialize(){
    cities();
};

function cities(){
    //define an array of objects for cities and population
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

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>");

    //add the row to the table
    table.appendChild(headerRow);

    for (var i = 0; i < cityPop.length; i++){
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        table.insertAdjacentHTML('beforeend',rowHtml);
    }

    document.querySelector("#mydiv").appendChild(table);
//get the div id
    var theid = document.querySelector('#mydiv').id;
    
        //set the id to newdiv
    document.querySelector('#mydiv').id = "newdiv";
    
        //set the class 
    document.querySelector('#newdiv').className = "foo";
    

    document.querySelectorAll("script").forEach(function(selectedScript){
        var thesource = selectedScript.src;
        document.querySelector('#newdiv').insertAdjacentHTML('beforeend',thesource);
    })

    //change the text color
    document.querySelector('#newdiv').style.color = 'red';

    //change the text size and alignment
    document.querySelector('#newdiv').style.fontSize = '2em';
    document.querySelector('#newdiv').style.textAlign = 'left';

    //get the text color and add it as text to the div
    var thecolor = document.querySelector('#newdiv').style.color;
    document.querySelector('#newdiv').insertAdjacentHTML('beforeend',thecolor);

     //Added below Example 3.8...
    //click listener with anonymous handler function
    document.querySelector("table").addEventListener("click", function(){
        alert('Madison Rocks! Go Badgers!');
    });

    //named handler function for removable listener
    function clickme(){
        alert('Yeah Green Bay! Go Packers!');
    };

    //add the event listener
    document.querySelector("table").addEventListener('click', clickme);

    //remove the event listener
    document.querySelector("table").removeEventListener('click', clickme);

}; 


document.addEventListener('DOMContentLoaded',initialize);