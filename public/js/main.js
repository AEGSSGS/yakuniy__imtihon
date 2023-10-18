let btn =document.querySelectorAll('.btn')

btn.forEach(element => {
        element.addEventListener('click', function(e){
                e.preventDefault()
                element.classList.add('text-red-500')
        })
        element.addEventListener('dblclick', function(e){
                e.preventDefault()
                element.classList.remove('text-red-500')
        })
});

let card =document.querySelectorAll('#card')
let number =document.querySelectorAll('.num')

card.forEach((element , index)=>{
        element.addEventListener('click', function(e){
                e.preventDefault()
                number[index].forEach(( element , index)=>{
                        element[index].innerText=Number(element[index].innerText)+1
                })
        })
        element.addEventListener('dblclick', function(e){
                e.preventDefault()
                number.forEach((element)=>{
                        element.innerText=Number(element.innerText)-3
                })
        })
});

let img1 =document.querySelector('#img1')
let img2 =document.querySelector('#img2')
let img3 =document.querySelector('#img3')
let img4 =document.querySelector('#img4')


img4.style.width='649px'
img4.style.height='649px'
img4.style.objectFit='cover'

img1.addEventListener('click', function(e){
        e.preventDefault()
        img4.src=img1.src

        
})
img2.addEventListener('click', function(e){
        e.preventDefault()
        img4.src=img2.src
        img2.src=img4.src
})

img3.addEventListener('click', function(e){
        e.preventDefault()
        img4.src=img3.src
})

let All =document.querySelector('#All')
let New =document.querySelector('#New')
let Used =document.querySelector('#Used')
let Comment__box =document.querySelectorAll('.comment__box')
let box1 =document.querySelector("#first__box")
let box2 =document.querySelector("#second__box")
let box3 =document.querySelector("#third__box")
let box4 =document.querySelector("#forth__box")

All.addEventListener('click', function(e){
        e.preventDefault()
        box1.classList.remove('hidden')
        box2.classList.remove('hidden')
        box3.classList.remove('hidden')
})

New.addEventListener('click', function(e){
        e.preventDefault()
        box1.classList.add('hidden')
        box2.classList.add('block')
        box3.classList.add('block')
        box4.classList.remove('hidden')
})

Used.addEventListener('click', function(e){
        e.preventDefault()
        box1.classList.add('hidden')
        box2.classList.add('block')
        box3.classList.add('block')
        box4.classList.add('hidden')
})