const btn = document.querySelector('#btn')

btn!.addEventListener('click', () => {
    const inputEl = (document.querySelector("#input-el") as HTMLInputElement).value
    console.log(inputEl)
})