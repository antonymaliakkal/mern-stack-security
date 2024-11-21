//in memory storage
const users = require("../models/user");
const carts = require("../models/cart")

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, email, password } = req.body;

  //check is user exists
  const exsistingUser = users.find((user) => user.email === email);
  if (exsistingUser)
    return res.status(400).json({ message: "User already exsist" });

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: Date.now().toString(),
    username,
    email,
    password: hashPassword
  };
  users.push(newUser);

  const cartLength = carts.length;

  const newCart = {
    id : cartLength+1,
    user_id : newUser.id,
    items : [],
    cart_total : {
        sub_total: 0.0,
      shipping: 0.0,
      total: 0.0,
    }
  }
  carts.push(newCart)
  console.log(carts)

  const token = jwt.sign(
    { userId: newUser.id, userName: newUser.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  console.log(users);

  res.status(200).json({ message: "User created", token: token });
};

const hello = async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Hello World" });
};

const login = async (req, res) => {
  // console.log('From Login page line 40 : ' , req.headers['authorization'])

  const { email, password } = req.body;

  //check is user exists
  // console.log('From Login page line 46 : ' , users)
  console.log(email, password);
  const exsistingUser = users.find((user) => user.email === email);
  if (!exsistingUser)
    return res.status(400).json({ message: "User not found" });
  //decrpyt the password and check
  const isMatch = await bcrypt.compare(password, exsistingUser.password);
  // console.log('From Login page line 53 : ' ,isMatch)
  if (!isMatch) return res.status(400).json({ message: "Invalid password" });

  //create token
  const token = jwt.sign(
    { userId: exsistingUser.id, userName: exsistingUser.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).json({ token: token });
};

const checkAuth = (req, res) => {
  const token = req.body;
  console.log("line 67 : auth : ", req.body, token);
};

module.exports = { register, login, hello };
