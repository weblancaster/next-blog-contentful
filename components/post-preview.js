import Link from "next/link";
import DateComponent from "../components/date";
import CoverImage from "./cover-image";

export default function PostPreview({
  title,
  thumbnail,
  date,
  description,
  slug,
}) {
  return (
    <div>
      {thumbnail && (
        <div className="mb-5">
          <CoverImage title={title} slug={slug} url={thumbnail} />
        </div>
      )}
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{description}</p>
    </div>
  );
}
