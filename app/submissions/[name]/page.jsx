function SubmissionDetail({ params: { name } }) {
  return (
    <div className="page-wrapper">
      <h1>hello world</h1>
      <h2>My Post: {name}</h2>
    </div>
  );ç
}

export async function generateStaticParams() {
  // Get the list of submissions from your data source
  const submissions = await fetch("http://localhost:3000/api/posts", {
    next: {
      revalidate: true,
    },
  }).then((res) => res.json());

  // Return an array of objects, where each object represents the populated dynamic segments of a single route
  return submissions.map((submission) => ({
    name: submission.name,
  }));
}
export default SubmissionDetail;
