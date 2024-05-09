import DateComponent from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, thumbnail, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      {thumbnail && (
        <div className="mb-8 w-full md:mb-16 sm:mx-0">
          <div className="max-w-3xl m-auto"><CoverImage title={title} url={thumbnail} /></div>
        </div>
      )}
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateComponent dateString={date} />
        </div>
      </div>
    </>
  );
}
