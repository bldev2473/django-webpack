import js1 from "./js1-no-webpack.js"

var g_var = 'js2 variable'
console.log(g_var)

function printVar() {
    console.log(g_var)
}

document.getElementById("test2").addEventListener("click", function() {
    printVar();
});