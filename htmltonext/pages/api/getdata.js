import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: 'localhost',
    database: 'next',
    port: 3306,
    user: 'root',
    password: 'root',
  });
  try {
    const query = 'SELECT * FROM things';
    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();

    res.status(200).json({ results: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
