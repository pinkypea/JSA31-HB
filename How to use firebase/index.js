function loadProducts() {
    const productsContainer = document.querySelector("#products-container");
    productsContainer.innerHTML = ' ';

    db.collection("products").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const product = doc.data();
                const productElement = document.createElement("div")
                productElement.innerHTML = `
            <img src=${product.image}>
            <p>Tên sản phẩm: ${product.name}</p>
            <p>Gía tiền: ${product.price}</p>`

                productsContainer.appendChild(productElement);
            });


        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

window.onload = loadProducts;


function addProduct(name, price) {
    // Add a new document with a generated id.
    db.collection("products").add({
        name: name,
        price: price
    })
        .then(() => {
            console.log("Add new product successfully");
            loadProducts();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}