import PostPreview from "../components/post-preview";
import slugfy from "../utils/slugfy";

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={slugfy(post.title)}
            title={post.title}
            thumbnail={post.thumbnail || ""}
            date={post.date}
            slug={slugfy(post.title)}
            description={post.description}
          />
        ))}
      </div>
    </section>
  );
}
