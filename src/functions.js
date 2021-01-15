import data from "./Data/data.json";
const productData = data.productList;

export const addToBasket = (product) => {
    if (product) {
        localStorage.setItem("id", product.id)
    }

    const products = localStorage.getItem("product");
    let text;

    if (products) {
        text = products
        text += ','
        text += localStorage.getItem("id")
    } else {
        text = localStorage.getItem("id")
    }

    localStorage.setItem("product", text);

    alert('Added to basket !')

}

// return selected item
export const getItem = () => {
    const id = localStorage.getItem("id")

    for (let i = 0; i < 4; i++) {
        if (productData[i].id === id) {
            return productData[i]
        }
    }
}

export const getProductCount = () => {
    const products = localStorage.getItem("product");
    let text;

    if (products) {
        text = products
        text += ','
        text += localStorage.getItem("id")
    } else {
        text = localStorage.getItem("id")
    }
}

export const removeFromBasket = (productId) => {
    /*   const allProducts = getProducts();

       if (allProducts.includes(productId.toString())) {
           allProducts.splice(allProducts.indexOf(productId.toString()), 1);
       }
       const mergedProducts = allProducts.join(',');
       localStorage.setItem("product",mergedProducts);

       // showBasket();
       // displayTotal() */

    alert('Added to basket !')
}

export const getAllProducts = () => {
    const productIDs = localStorage.getItem("product")
    const products = []

    if (productIDs) {
        for (let productId of productIDs.split(',')) {
            const data = getProductDataAsObject(productId)
            if (products.includes(data)) {
                const indx = products.indexOf(data)
                const item = products[indx];

                if (item.count)
                    item.count += 1;
            } else {
                data.count = 1
                products.push(data)
            }
        }
        return products;
    }
    return [];
}

export const getProductFromAllProducts = (allProducts, productId) => {
    for (let product of allProducts) {
        if (product.id === productId) {
            return product;
        }
    }
}

export const getProductDataAsObject = (productId) => {
    const productData = data.productList;

    for (let product of productData) {
        if (productId === product.id) {
            return product;
        }
    }
}
