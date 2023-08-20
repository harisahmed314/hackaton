import { MongoClient } from "mongodb";

export default async function updateBlog(req, res) {
    if (req.method !== 'PUT') {
        return res.status(405).end();
    }

    const { email, title, content } = req.body;

    const uri = "mongodb+srv://ahmedharis212:haris@cluster0.9n1jy9l.mongodb.net/";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db('hackaton-blogger');
        const users = database.collection('login');

        // Update the user's blog with the provided title
        const result = await users.updateOne(
            { email: email, "blogs.title": title }, // Using email and title to find the specific blog
            { $set: { "blogs.$.title": title, "blogs.$.content": content } }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ success: false, message: 'Blog not found!' });
        }

        return res.status(200).json({ success: true, message: 'Blog updated successfully' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'An error occurred while updating the blog' });
    } finally {
        await client.close();
    }
}
