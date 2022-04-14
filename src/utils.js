import axios from "axios"

export const productNewPrice = (product) => {
    const newPrice = Math.ceil(product.price - (product.price / 100 * product.sale))
    return newPrice
}

export const addAndDeleteProductInCart = (product, newPrice, color) => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    let newProduct = {
        product: product,
        newPrice: newPrice,
        currentColor: color,
        count: 1,
        pricePerCount: 0,
        oldPricePerCount: 0
    }
    newProduct.pricePerCount = sumPricePerCount(newProduct)
    newProduct.oldPricePerCount = sumOldPricePerCount(newProduct)
    let newCart = cart.products.filter(item => item.product.id === product.id)
    if (newCart.length) {
        cart.products = cart.products.filter(item => item.product.id !== product.id)
    } else {
        cart.products.push(newProduct)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const sumPricePerCount = (productInCart) => {
    if (productInCart.newPrice) {
        return productInCart.count * productInCart.newPrice
    } else {
        return productInCart.count * productInCart.product.price
    }
}

export const sumOldPricePerCount = (productInCart) => {
    return productInCart.count * productInCart.product.price
}

export const sumTotalPrice = (products) => {
    let totalPrice = 0
    products.forEach(item => totalPrice += item.pricePerCount)
    return totalPrice
}

export const sumTotalCount = (products) => {
    let totalCount = 0
    products.forEach(item => totalCount += item.count)
    return totalCount
}

export const sumOldPrice = (products) => {
    let oldPrice = 0
    products.forEach(item => oldPrice += item.oldPricePerCount)
    return oldPrice
}

export const changeCountProduct = (count, id) => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (!cart) {
        return
    }
    cart.products = cart.products.map(item => {
        if (item.product.id === id) {
            item.count = count
            item.pricePerCount = sumPricePerCount(item)
            item.oldPricePerCount = sumOldPricePerCount(item)
        }
        return item
    })
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const addAndDeleteProductInFavorites = (product) => {
    let favorites = JSON.parse(localStorage.getItem('favorites'))
    let favoriteProduct = {
        product: product,
    }
    let newFavorites = favorites.products.filter(item => item.product.id === product.id)
    if (newFavorites.length) {
        favorites.products = favorites.products.filter(item => item.product.id !== product.id)
    } else {
        favorites.products.push(favoriteProduct)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
}

export const addFeedback = async (user) => {
    await axios.post("http://localhost:8000/feedback", user)
}

export const addOrder = async (order) => {
    await axios.post("http://localhost:8000/orders", order)
}