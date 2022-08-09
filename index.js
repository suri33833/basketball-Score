const display = {
   homeScore:0,
   guestScore:0
}
const btn = document.querySelectorAll('button')
btn.forEach(vlaue => addEventListener('click',onClicked))
const operations = {
   one : value => value + 1,
   two : value => value + 2,
   three : value => value + 3,
}

function onClicked(e){
   const [op,parent] = e.target.getAttribute('data-key').split(" ");
   const fn = operations[op]
   console.log(fn)
   const board=document.querySelector(`#${parent}`)
   display[parent] = fn(display[parent])
   console.log(display[parent])
   board.textContent = display[parent]
}

