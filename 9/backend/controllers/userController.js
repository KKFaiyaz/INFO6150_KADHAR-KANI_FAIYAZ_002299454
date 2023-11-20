const User = require('../models/user');

exports.createUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(201).json({ message: 'User already exists' });
      return;
    }

    const user = new User({ fullName, email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.editUser = async (req, res) => {
  const { fullName, password, email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    user.fullName = fullName;
    user.password = password; 
    await user.save();
    res.json({ message: 'User details updated successfully' });
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};

exports.deleteUser = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOneAndDelete({ email });
    if (!user) {
      throw new Error('User not found');
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }
    
    const isPasswordMatch = password === user.password;
    if (!isPasswordMatch) {
      throw new Error('Invalid password');
    }
    res.json({ message: 'Login successful'});
  } catch (error) {
    console.log(error)
    res.status(401).json({ message: 'Authentication failed' });
  }
};