var root = $("#root");

$(root).click( (e) => {
    console.log(e.target);
    //TODO: handle the click event to add rows dynamically
});

$(root).keydown( (e) => {
    //TODO: update the textarea with the json string
});

function fieldSwitch(e){
    let btn = e.delegateTarget;
    //TODO: update the td parent to contain another root and switch back
    console.log(btn);
}

function addrow(){
    let row = document.createElement("tr");
    let name = document.createElement("td");
    let inputName = document.createElement("input");
    let value = document.createElement("td");
    let inputValue = document.createElement("input");
    let btn = document.createElement("button");

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

    $(row).append(name)
        .append(value)
        //.append(btn);
    $(root).append(row);
}

function copy(){
    $("#result").select();
    document.execCommand('copy');
    $("#result").blur();
}

$("#result").click(() => copy());
$("#copy").click(() => copy());

$("#logo").click(() => { location.reload(); });

$(() =>{
    addrow();
});
