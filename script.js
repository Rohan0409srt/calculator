let string = "";
let buttons = document.querySelectoraAll('.button');
Array.from(buttons).forEach((buttonn)=>{
    buttonn.addEventListener('click', (e)=>{
        console.log(e.target)
        string=string . e.target.innerHTML;
        document.querySelector('input')
    })
})

