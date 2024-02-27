document.getElementById("form").addEventListener("sin", function(event){
    event.preventDefault();
    var parm = document.getElementById("sin1").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/sin?angle=" + encodeURIComponent(parm), true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText);
        }
    }
    xhr.send();

})