$(function(){
    let product = document.querySelector('.data');
    $.ajax({
        url:"https://dummyjson.com/products",
        success: function(res){
            console.log(res.products);
            for(let i =0 ; i<res.products.length;i++){
                product.innerHTML += `
                <div class = 'product'>
                <img src="${res.products[i].images[0]}" class='product-img'>
                <h2 class='product-brand'>${res.products[i].title}</h2>
                <p class='product-desc'>${res.products[i].description}</p>
                </div>
                `
            }
        }
    })
})


