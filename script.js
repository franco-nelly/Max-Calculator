const input = document.getElementById('inputfield');

function franconelly(input){
    inputfield.value += input;
}
function iradu(){
    inputfield.value = "";
}
function nellyfranco(){
    try{
    inputfield.value = eval(inputfield.value);
    }
    catch(error){
        inputfield.value = "Error"
    }
}

function iraduku(){
    inputfield.value = inputfield.value.toString().slice(0,-1)
}