window.onload = function(){
    //window.alert('hola')
    
    var result = document.getElementById("result")
    var sum = document.getElementById("button+")
    var sub = document.getElementById("button-")
    var mult = document.getElementById("buttonx")
    var div = document.getElementById("button/")
    var eq = document.getElementById("button=")
    var c = document.getElementById("buttonC")
    var num1 = document.getElementById("button1")
    var num2 = document.getElementById("button2")
    var num3 = document.getElementById("button3")
    var num4 = document.getElementById("button4")
    var num5 = document.getElementById("button5")
    var num6 = document.getElementById("button6")
    var num7 = document.getElementById("button7")
    var num8 = document.getElementById("button8")
    var num9 = document.getElementById("button9")
    var num0 = document.getElementById("button0")

    num1.onclick = function(i){
        result.textContent = result.textContent + '1'

    }
    num2.onclick = function(i){
        result.textContent = result.textContent + '2'

    }
    num3.onclick = function(i){
        result.textContent = result.textContent + '3'

    }
    num4.onclick = function(i){
        result.textContent = result.textContent + '4'

    }
    num5.onclick = function(i){
        result.textContent = result.textContent + '5'

    }
    num6.onclick = function(i){
        result.textContent = result.textContent + '6'

    }
    num7.onclick = function(i){
        result.textContent = result.textContent + '7'

    }
    num8.onclick = function(i){
        result.textContent = result.textContent + '8'

    }
    num9.onclick = function(i){
        result.textContent = result.textContent + '9'

    }
    num0.onclick = function(i){
        result.textContent = result.textContent + '0'

    }

    c.onclick = function(i){
        resetdisplay()
    }


    var valueA
    var valueB
    var operationtype

    sum.onclick = function(){
        valueA = result.textContent
        operationtype = "+"
        cleardisplay()
    }

    sub.onclick = function(){
        valueA = result.textContent
        operationtype = "-"
        cleardisplay()
    }
    
    mult.onclick = function(){
        valueA = result.textContent
        operationtype = "*"
        cleardisplay()
    }

    div.onclick = function(){
        valueA = result.textContent
        operationtype = "/"
        cleardisplay()
    }

    eq.onclick = function(){
        valueB = result.textContent
        total() 
    }


    function resetdisplay(){
        result.textContent = ""
        valueA = 0
        valueB = 0
        operationtype = ""
    }

    function cleardisplay(){
        result.textContent = ""
    }

    function total(){
        var tot = 0
        if (operationtype == "+"){
            tot = parseFloat(valueA) + parseFloat(valueB)
        }else
        if (operationtype == "-"){
            tot = parseFloat(valueA) - parseFloat(valueB)
        }else
        if (operationtype == "*"){
            tot = parseFloat(valueA) * parseFloat(valueB)
        }else
        if (operationtype == "/"){
            tot = parseFloat(valueA) / parseFloat(valueB)
        }
        resetdisplay()
        result.textContent = tot
    }
}