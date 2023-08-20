import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";  // Used for password hashing

export default async function registerHandler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const { email, password } = req.body;

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    const uri = "mongodb+srv://ahmedharis212:haris@cluster0.9n1jy9l.mongodb.net/";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db('hackaton-blogger');
        const users = database.collection('login'); // Assuming 'data' collection contains user data
    
        const existingUser = await users.findOne({ email });
        
        if (existingUser) {
            return res.status(409).json({ message: 'Email already registered!' });
        }

        const newUser = await users.insertOne({ email, password: hashedPassword });
        
        if (newUser) {
            res.status(201).json({ message: 'User registered successfully!' });
        } else {
            res.status(400).json({ message: 'Registration failed!' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred during registration' });
    } finally {
        await client.close();
    }
}