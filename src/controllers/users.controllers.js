import User from "../models/user";
import bcrypt from "bcryptjs";
import generateJWT from "../helpers/generateJWT";

const login = async (req, res) => {
  //res.send("User logged in successfully");
  try {
    const { email, password } = req.body;
    //verificar si el email existe
    const user = await User.findOne({ email }); // si no lo encuentra devuelve null
    if (!user)
      return res
        .status(400)
        .json({ message: "User email or password incorrect - email" });
    //confirmar sie l passwaord enviado es valido

    const correctPassword = bcrypt.compareSync(password, user.password) // el método compara el password enviado con el guardado
    if(!correctPassword) return res.status(404).json({ message: "User email or password incorrect - password" })
    
    //generar el token
    const token = await generateJWT(user._id, user.name)
    // si el password y email son correctos
    res.status(200).json({ 
      message: "User email and password correct",
      userName: user.name,
      uid: user._id,
      token
    })

  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "User log in failed" });
  }
};

const register = async (req, res) => {
  //res.send('User registered in successfully')
  try {
    const { name, email, password } = req.body;

    //verificar si el email existe
    const userFound = await User.findOne({ email });
    //si existe
    if (userFound)
      return res
        .status(400)
        .json({ message: "A user with those email addresses already" });
    //encriptar el password
    let createdUser = new User(req.body);
    const SALT_ROUNDS = 10;
    createdUser.password = await bcrypt.hash(password, SALT_ROUNDS);

    //generar un token
     const token = await generateJWT(createdUser._id, createdUser.name)
    //guardar en BD
    await createdUser.save();
    res.status(201).json({
      message: "User created successfully",
      userName: createdUser.name,
      uid: createdUser._id,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "User registration failed" });
  }
};

export { login, register };
