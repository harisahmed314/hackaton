import { MongoClient } from "mongodb";

export default async function getUserBlogs(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const { email } = req.body;

    const uri = "mongodb+srv://ahmedharis212:haris@cluster0.9n1jy9l.mongodb.net/";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db('hackaton-blogger');
        const users = database.collection('login'); // Assuming 'login' collection contains user data
    
        const existingUser = await users.findOne({ email });
        
        if (!existingUser) {
            return res.status(404).json({ success: false, message: 'User not found!' });
        }

        // Return the blogs array associated with the user
        return res.status(200).json({ success: true, blogs: existingUser.blogs });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'An error occurred while fetching the blogs' });
    } finally {
        await client.close();
    }
}
