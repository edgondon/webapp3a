'use strict';

function getDogPic() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson =>
            consoleResponse(responseJson))

        .catch(error => alert('not working'));
    
}

function consoleResponse(responseJson) {
    console.log(responseJson);
    data.push(responseJson);
    $( ".picrs" ).append( `<img src="${responseJson.message}" alt="random dog pic">` );
}


let data = [];





function submitForm() {
    $('form').submit(event => {
        event.preventDefault();
        
        setSelect();
        
    });
}


function setSelect() {
    let namer = document.getElementById('myForm').value;
    console.log(namer);
    window.sllt = namer;
    for (let selection = 0; selection < namer; selection++) {
        getDogPic();


        
    }
    
    console.log(data);
    
    

    
 
   
}



$(function() {
    console.log('Go ahead User Submit');
    submitForm();
    
    
});