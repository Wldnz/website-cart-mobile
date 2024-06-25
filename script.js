

document.addEventListener('DOMContentLoaded', () => {


    document.body.addEventListener('click', (e) => {
       if(e.target.parentElement.classList == "item"){
            window.location.href = "./produk.html"
       }
    })

})