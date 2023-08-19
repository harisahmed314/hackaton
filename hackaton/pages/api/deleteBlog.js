import { MongoClient } from "mongodb";

export default async function deleteBlog(req, res) {
    if (req.method !== 'DELETE') {
        return res.status(405).end();
    }

    const { email, title, content } = req.body;

    const uri = "mongodb+srv://ahmedharis212:haris@cluster0.9n1jy9l.mongodb.net/";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db('hackaton-blogger');
        const users = database.collection('login');

        const result = await users.updateOne(
            { email },
            { $pull: { blogs: { title, content } } }
        );

        if (result.modifiedCount === 0) {
            return res.status(404).json({ success: false, message: 'Blog not found or deletion failed!' });
        }

        return res.status(200).json({ success: true, message: 'Blog deleted successfully' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'An error occurred while deleting the blog' });
    } finally {
        await client.close();
    }
}
