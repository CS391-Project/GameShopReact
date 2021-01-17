import data from "./Data/data.json";

const productData = data.productList;
const userData = data.userList;

export const calculateBasketTotalPrice = () => {
    const allProducts = getAllProducts();
    let totalPrice = 0.0;

    for (let product of allProducts) {
        console.log(product)
        totalPrice += product.count * product.price
    }
    return totalPrice;
}

export const checkOutBasket = () => {
    localStorage.removeItem("product");
    localStorage.removeItem("id");
}

export const getActiveFilters = () => {
    const filterList = document.getElementsByClassName("filter")
    let activeFilters = []

    for (let i = 0; i < filterList.length; ++i)
        if (!filterList[i].checked) activeFilters.push(filterList[i].value)

    if (activeFilters.length === filterList.length) activeFilters = []

    return activeFilters;
}

export const removeFromBasket = (productId) => {
    const productKey = localStorage.getItem("product")
    let productIDs;

    if (productKey) {
        productIDs = productKey.split(',')

        if (productIDs.includes(productId.toString())) {
            productIDs.splice(productIDs.indexOf(productId.toString()), 1);
        }
        const mergedProducts = productIDs.join(',');
        localStorage.setItem("product", mergedProducts);

        return getAllProducts();
    }
}

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

export const checkLogin = (mail, pass) => {
    for (let user of userData) {
        if (mail === user.mail && pass === user.pass) {
            return true;
        }
    }
	return false;
}
