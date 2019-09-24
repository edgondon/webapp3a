'use strict';

function getDogPic() {
    fetch(`https://dog.ceo/api/breed/${namer}/images/random`)
        .then(response => response.json())
        .then(responseJson =>
            consoleResponse(responseJson))

        .catch(error => alert('not working'));
    
}



function consoleResponse(responseJson) {
    let data = [];
    data.push(responseJson);
    console.log(responseJson);
    
    console.log(data);
    if (data[0].code === 404) {
        $( ".errod" ).append( "The Dog Breed you Submitted returns No Images - Please Try Again" );
    }

    else {
            $( ".picrs" ).append( `<img src="${responseJson.message}" alt="chosen dog breed picture">` );
    };
}


let namer = [];





function submitForm() {
    $('form').submit(event => {
        event.preventDefault();
        $( ".errod" ).html("");
        $( ".picrs" ).html("");
        namer.shift();
        namer.push(document.getElementById('myForm').value);
        getDogPic();
        
    });
}






$(function() {
    console.log('Go ahead User Submit');
    submitForm();
    
    
});