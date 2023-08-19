import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  // Replace the uri string with your connection string.
  const uri = "mongodb+srv://ahmedharis212:haris@cluster0.9n1jy9l.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('hackaton-blogger');
    const movies = database.collection('login');
  
    // Query for a movie that has the title 'Back to the Future'
    const query = {  };
    const data = await movies.find(query).toArray();

    console.log(data); // Log the movie data

    // Send movie data as response
    res.status(200).json({ data});

  } catch (error) {
    console.error(error); // Log any error occurred
    res.status(500).json({ error: 'An error occurred while fetching data' }); // Send error as response
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}