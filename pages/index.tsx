// Next
import Image from 'next/image';
// COmponents
import ercanImage from '@/public/ercan.png';
import Socials from '@/components/socials';
import query from '@/lib/db';
// Types
import type { GetServerSideProps, NextPage } from 'next';

type Post = {
  title: string;
  content: string;
  image: string;
  status: number;
  created_at: string;
  updated_at: string;
};

export async function getStaticProps() {
  const res = await query('SELECT * FROM posts');
  const posts: Post[] = JSON.parse(JSON.stringify(res));
  return {
    props: {
      posts,
    },
  };
}

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-end p-4 min-w-[800px]">
        <div className="mr-4 ">
          <h1 className="mb-1 text-lg font-bold tracking-tight text-black transition-on click-effect dark:text-white">
            Ercan Şahin
          </h1>
          <p className="mb-2 text-sm text-black dark:text-white transition-on click-effect">
            Frontend Developer
          </p>
          <Socials />
        </div>
        <Image
          className="rounded-full transition-on click-effect grayscale hover:filter-none"
          src={ercanImage}
          alt="Picture of the author"
          width={80}
          height={80}
        />
      </div>
      <div>
        {posts &&
          posts.map((post: Post) => {
            return <div className="text-white">{post.title}</div>;
          })}
      </div>
    </div>
  );
};

export default Home;
