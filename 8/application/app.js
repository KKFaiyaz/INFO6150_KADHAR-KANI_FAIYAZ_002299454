const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();
const port = 4000;

mongoose.connect('mongodb+srv://admin:admin@atlascluster.nfubvfk.mongodb.net/user_management');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

app.use(express.json());

app.post('/user/create', async (req, res) => {
    const { fullName, email, password } = req.body;

    if (!/([\w\.]+)@northeastern\.edu$/.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    if (!fullName || fullName.length < 3) {
      return res.status(400).json({ message: 'Full name is too short' });
    }
  
    if (!password || password.length < 8) {
      return res.status(400).json({ message: 'Password is too weak' });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({ fullName, email, password: hashedPassword });
  
      await newUser.save();
  
      return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      return res.status(400).json({ message: 'User creation failed' });
    }
  });
  

app.put('/user/edit', async (req, res) => {
    const { fullName, password, email } = req.body;

    if (!fullName || fullName.length < 3) {
      return res.status(400).json({ message: 'Full name is too short' });
    }
  
    if (!password || password.length < 8) {
      return res.status(400).json({ message: 'Password is too weak' });
    }
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      user.password = await bcrypt.hash(password, 10);
      user.fullName = fullName;
  
      await user.save();
  
      return res.status(200).json({ message: 'User details updated successfully' });
    } catch (error) {
      return res.status(400).json({ message: 'User details update failed' });
    }
  });
  

app.delete('/user/delete', async (req, res) => {
    const { email } = req.body;
  
    try {
      const user = await User.findOneAndDelete({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      return res.status(400).json({ message: 'User deletion failed' });
    }
  });

app.get('/user/getAll', async (req, res) => {
    try {
      const users = await User.find({}, 'fullName email password');
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ message: 'Failed to fetch user data' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});