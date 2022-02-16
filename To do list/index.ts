const btn = document.querySelector('#btn')
let inputEl = (document.querySelector("#input-el") as HTMLInputElement)
let lisp = document.querySelector('#list')

btn!.addEventListener('click', () =>{
    const input = inputEl.value
    inputEl.value = ""
    console.log(input)

    lisp!.innerHTML += `<li>${input} <button id="btn2">Done</button></li>`
    document.querySelector('#btn2')?.addEventListener('click', () => {
        console.log("Hello")
    })
})


