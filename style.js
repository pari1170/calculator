

   
    var c = document.getElementById("result");
    //console.log(a);
     
    function sum() {
        var a = Number(document.getElementById("first").value);
        var b = Number(document.getElementById("second").value);
        c.innerHTML += a + b + "</br>";
    }
    function minus() {
        var a = Number(document.getElementById("first").value);
        var b = Number(document.getElementById("second").value);
        c.innerHTML += a - b +"</br>";
    }
    function multipl() {
        var a = Number(document.getElementById("first").value);
        var b = Number(document.getElementById("second").value);
        c.innerHTML += a * b + "</br>";
    }
    function div() {
        var a = Number(document.getElementById("first").value);
        var b = Number(document.getElementById("second").value);
        c.innerHTML += a / b + "</br>";
    }