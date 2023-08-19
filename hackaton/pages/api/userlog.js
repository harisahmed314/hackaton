import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";  // Used for password hashing

export default async function loginHandler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const { email, password } = req.body;

    const uri = "mongodb+srv://ahmedharis212:haris@cluster0.9n1jy9l.mongodb.net/";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db('hackaton-blogger');
        const users = database.collection('login'); // Assuming 'login' collection contains user data
    
        const existingUser = await users.findOne({ email });
        
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found!' });
        }

        // Compare the passwords
        const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
        
        if (isPasswordCorrect) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Incorrect password' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred during login' });
    } finally {
        await client.close();
    }
}