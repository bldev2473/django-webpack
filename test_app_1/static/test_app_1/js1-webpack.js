var g_var = 'js1 variable'
console.log(g_var)

function printVar() {
    console.log(g_var)
}

document.getElementById("test1").addEventListener("click", function() {
    printVar();
});