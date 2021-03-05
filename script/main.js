//where everything begins
var root = $("#root");

//we need to handle every click on the data
$(root).click( (e) => {
    console.log(e.target);
    //TODO: handle the click event to add rows dynamically
});

//and of course every button pressed to insert data
$(root).keydown( (e) => {
    //TODO: update the textarea with the json string
});

//this will do some magic to switch between a simple data, an array and an object
function fieldSwitch(e){
    let btn = e.delegateTarget;
    //TODO: update the td parent to contain another root and switch back
    console.log(btn);
}

//real magit to add rows
function addrow(){
    //that's pretty straightforward, a table row with 3 table data
    //the last td has a button to switch between data tipe
    //the others have an input type text
    let row = document.createElement("tr");
    let name = document.createElement("td");
    let inputName = document.createElement("input");
    let value = document.createElement("td");
    let inputValue = document.createElement("input");
    let btn = document.createElement("button");

    //now initialize everithing with the right attributes and data
    $(inputName).attr("type", "text")
                .attr("placeholder", "Field");

    $(inputValue).attr("type", "text")
                .attr("placeholder", "Value");

    $(name).attr("name", "name")
            .append(inputName);

    $(value).attr("name", "value")
            .append(inputValue);

    //$(btn).attr("name", "switch")
    //        .attr("value", "item")
    //        .html("Turn in array")
    //        .click((e) => fieldSwitch(e));

    //populate the row
    $(row).append(name)
        .append(value)
        //.append(btn);
    
    //everithing belongs to the root
    $(root).append(row);
}

//magic to copy everything in the textarea in the user's clipboard
function copy(){
    $("#result").select();
    document.execCommand('copy');
    $("#result").blur();
}

//we need to copy when the user clicks the textarea or the button
$("#result").click(() => copy());
$("#copy").click(() => copy());

//quick refresh when clicking on the "logo"
$("#logo").click(() => { location.reload(); });

//let's start the magic adding a row to the table
$(() =>{
    addrow();
});
