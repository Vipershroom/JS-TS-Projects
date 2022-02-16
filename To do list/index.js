var btn = document.querySelector('#btn');
var inputEl = document.querySelector("#input-el");
var lisp = document.querySelector('#list');
btn.addEventListener('click', function () {
    var _a;
    var input = inputEl.value;
    inputEl.value = "";
    console.log(input);
    lisp.innerHTML += "<li>".concat(input, " <button id=\"btn2\">Done</button></li>");
    (_a = document.querySelector('#btn2')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        console.log("Hello");
    });
});
