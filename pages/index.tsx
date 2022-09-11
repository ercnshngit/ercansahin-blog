// Next
import query from '@/lib/db';
// Types
import type { GetServerSideProps, NextPage } from 'next';
import AboutCard from '@/components/aboutCard';

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
      <div>
        {posts &&
          posts.map((post: Post) => {
            return (
              <div key={post.id} className="text-white">
                {post.title}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
