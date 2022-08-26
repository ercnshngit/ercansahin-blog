import { db } from 'lib/firebase';

export default async function handler(req, res) {
  
  const posts = await db.collection('posts');
  const snapshot = await posts.get();
  let results = []
  snapshot.docs.forEach(doc => {
      results.push({ ...doc.data(), id: doc.id })
  })

  return res.status(200).json(JSON.stringify(results));
    
  
}