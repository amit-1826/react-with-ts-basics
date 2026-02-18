import { useState, useEffect } from "react";
import get from "./http";
import BlogPosts, { type BlogPost } from "./components/BlogPosts";
import ErrorMessage from "./components/ErrorMessage";

type BlogPostHttp = {
  id: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      try {
        const posts = (await get()) as BlogPostHttp[];
        const mappedPosts = posts.map((post) => ({
          id: post.id,
          title: post.title,
          text: post.body,
        }));
        setFetchedPosts(mappedPosts);
      } catch (error: unknown) {
        setError(
          error instanceof Error
            ? "Error fetching posts"
            : "An unknown error occurred",
        );
      }
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  let content;

  if (isFetching) {
    content = <p className="loader"></p>;
  }

  if (error) {
    content = <ErrorMessage error={error} />;
  }

  if (!isFetching && !error && fetchedPosts.length > 0) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  return (
    <main>
      <img src="/react.png" alt="React Logo" />
      {content}
    </main>
  );
}

export default App;
