function insert(num){
    document.form.display.value = document.form.display.value+num;
}

function equal(){
    document.form.display.value = eval(document.form.display.value);
}

function c(){
    document.form.display.value = "";
}