const users = require("../models/user");
const products = require("../models/products");
const carts = require("../models/cart");
const cart = require("../models/cart");

// function calculate_cart_total(userId) {
//     const user = users.find((u) => u.id === userId);
//     const total = 0
//     user.cart.forEach((item) => {

//     })

// }

const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  //check if userId is valid
  const user = users.find((u) => u.id === userId);
  if (user) {
    //check if product id is valid
    const product = products.find((p) => p.id === productId);
    const cartSize = user.cart.length;
    if (product) {
      //create a new product
      const newProduct = {
        id: cartSize + 1,
        product_id: productId,
        quantity: quantity,
      };
      // add product to cart
      user.cart.push(newProduct);

      //   calculate_cart_total(userId);
      // update the cart total
      user.cart_total.sub_total += product.price;
      user.cart_total.total += user.cart_total.sub_total;

      res.status(200).json({ message: "Product added to cart" });
    } else {
      return res.status(400).json({ message: "Product does not exsist " });
    }
  } else {
    return res.status(400).json({ message: "User does not exsist " });
  }
};

const viewCart = async (req, res) => {

    let output_cart = {}

  //get user id from parameter
  const userId = parseInt(req.params.id, 10);

  //check if user id is valid
  const user = users.find((u) => u.id == userId);
  if (user) {

    //fetch user cart
    let cart = carts.find((c) => c.user_id == userId)

    output_cart = cart;

    //integrate product deitals to cart
    output_cart.items.forEach((item) => {
      item.product = products.find((p) => p.id == item.product_id); 
    });
    console.log(output_cart);
    return res.status(200).json({ cart: cart});
  } else {
    return res.status(400).json({ message: "User does not exsist" });
  }
};

const editQuantity = async (req, res) => {
  const { userId, cart_product_id, quantity } = req.body;

  //check if userId is valid
  const user = users.find((u) => u.id === userId);
  if (user) {
    //check if product id is valid
    const product = products.find((p) => p.id === productId);
    const cartSize = user.cart.length;
    if (product) {
      //create a new product
      const newProduct = {
        id: cartSize + 1,
        product_id: productId,
        quantity: quantity,
      };
      // add product to cart
      user.cart.push(newProduct);

      //   calculate_cart_total(userId);
      // update the cart total
      user.cart_total.sub_total += (product.price);
      user.cart_total.total += user.cart_total.sub_total;

      res.status(200).json({ message: "Product added to cart" });
    } else {
      return res.status(400).json({ message: "Product does not exsist " });
    }
  } else {
    return res.status(400).json({ message: "User does not exsist " });
  }
};

module.exports = { addToCart, viewCart };
