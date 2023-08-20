
import { MongoClient } from "mongodb";

export default async function saveBlogHandler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const { email, title, content } = req.body;

    
    const currentDate = new Date();

    const uri = "mongodb+srv://ahmedharis212:haris@cluster0.9n1jy9l.mongodb.net/";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db('hackaton-blogger');
        const users = database.collection('login'); // Assuming 'users' collection contains user data
    
        const existingUser = await users.findOne({ email });
        
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found!' });
        }

        // Push the new blog to the blogs array of the user
        const updateResponse = await users.updateOne(
            { email: email },
            {
                $push: {
                    blogs: {
                        title,
                        content,
                        date: currentDate
                    }
                }
            }
        );
        console.log("Update response:", updateResponse);
        res.status(200).json({ message: 'Blog saved successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred while saving the blog', errorDetail: error.message });
    } finally {
        await client.close();
    }
}
