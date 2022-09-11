import mysql from 'serverless-mysql';
const envPort = parseInt(process.env.MYSQL_PORT || '');
const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: Number.isInteger(envPort) ? envPort : 3306,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
});

export default async function query( query: String ) {
  try {
    const results = await db.query(query);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}