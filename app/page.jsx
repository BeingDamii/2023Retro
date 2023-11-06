import next from "next";
import PostCard from "./components/postCard";
import TopSection from "./components/topSection";

async function fetchSubmissions() {
  const response = await fetch("http://localhost:3000/api/posts", {
    next: {
      revalidate: true,
    },
  });
  const posts = response.json();
  return posts;
}
export default async function Home() {
  const posts = await fetchSubmissions();

  return (
    <div className="page-wrapper">
      <TopSection />
      <div className="cards-container">
        {posts.map(({ id, name, submission, twitter }) => {
          return (
            <PostCard
              key={id}
              name={name}
              submissiion={submission}
              twitter={twitter}
            />
          );
        })}
      </div>
      <h1 className="self-center mt-5">loading more....</h1>
    </div>
  );
}
