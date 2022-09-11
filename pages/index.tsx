// Next
import query from '@/lib/db';
// Types
import type { GetServerSideProps, NextPage } from 'next';
import AboutCard from '@/components/aboutCard';
import CardList from '@/components/cardList';

type Post = {
  id: number;
  title: string;
  content: string;
  image: string;
  status: number;
  created_at: string;
  updated_at: string;
};

export async function getServerSideProps<GetServerSideProps>() {
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
      <AboutCard />
      <h2 className="mb-4 text-3xl font-bold transition-on click-effect md:mb-2 md:text-xl dark:text-white">
        Blog Posts
      </h2>
      <CardList datas={posts} />
      <h2 className="my-4 text-3xl font-bold transition-on click-effect md:my-2 md:text-xl dark:text-white">
        Snippets
      </h2>
      <CardList datas={posts} />
    </div>
  );
};

export default Home;
