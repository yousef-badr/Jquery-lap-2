$('.btn').on('click',function(){
    let product = document.querySelector(".data");
    let inputNumber = document.querySelector(".input-text").value;
    $.ajax({
        url:"https://dummyjson.com/products",
        success: function(res){
            console.log(res.products);
            product.innerHTML += `<div class="product">
            <img src="${res.products[inputNumber].images[0]}">
            <h2 class="product-title">${res.products[inputNumber].title}</h2>
            <p class="product-description">${res.products[inputNumber].description}</p>
        </div>`
        }
    })
})

