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
})