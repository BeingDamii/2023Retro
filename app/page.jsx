import PostCard from "./components/postCard";
import TopSection from "./components/topSection";

async function fetchSubmissions() {
  const response = await fetch("http://localhost:3000/api/posts");
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
    </div>
  );
}
