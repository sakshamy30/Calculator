function turnOff()
{
    var x = document.getElementById("input")
    x.style.visibility = "hidden"
}

function turnOn()
{
    var x = document.getElementById("input")
    x.style.visibility = "visible"
}

function getValues(num)
{
    var x = document.getElementById("input")
    x.value = x.value + num
}

function clearOne()
{
    var x = document.getElementById("input")
    x.value = x.value.slice(0,-1)
}

function clearAll()
{
    var x = document.getElementById("input")
    x.value = ""
}

function calculate()
{
    try
    {
        var x = document.getElementById("input")
        x.value = eval(x.value)
    }
    catch 
    {
        x.value = x.value.innerHTML = "ERROR"
    }
}