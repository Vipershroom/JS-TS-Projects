var btn = document.querySelector('#btn');
var inputEl = document.querySelector("#input-el");
var lisp = document.querySelector('#list');
btn.addEventListener('click', function () {
    var input = inputEl.value;
    inputEl.value = "";
    console.log(input);
    lisp.innerHTML += "<li>".concat(input, " <button id=\"btn2\">Done</button></li>");
});
var btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function () {
    console.log("Hello");
});
