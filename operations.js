function insert(num) {
    var txt = document.getElementById('text1');
    txt.value = txt.value + num;
}

function clear_text(){
    document.getElementById('text1').value = "";
}
function backspace(){
    var txt = document.getElementById('text1');
    txt.value = txt.value.substring(0,txt.value.length-1);
}

function compute(){
    document.getElementById('text1').value = eval(document.getElementById('text1').value)
}