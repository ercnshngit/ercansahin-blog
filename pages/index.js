import { Suspense } from 'react';
import useSWR from 'swr';

import Head from 'next/head'
import styles from 'styles/Home.module.css'

const fetcher = async (...args) => {
  const res = await fetch(...args, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return res.json();
};

function Profile() {
  const { data } = useSWR(process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/collection' :'/api/collection', fetcher, { suspense: true });
  const posts = JSON.parse(data);
  return (
    posts && posts.map((post) => (
    <div className={styles.card} key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
    ))
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anasayfa - Ercan Şahin</title>
      </Head>
      <h2 className={styles.title}>Hello World</h2>
      <p className={styles.description}>I am Ercan Şahin</p>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Profile />
      </Suspense>
    </div>
  )
}

