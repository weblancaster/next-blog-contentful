import Link from "next/link";
import DateComponent from "../components/date";
import CoverImage from "../components/cover-image";

export default function HeroPost({ slug, title, thumbnail, date }) {
  console.log("slug", slug);

  return (
    <section>
      {thumbnail && (
        <div className="mb-8 md:mb-16">
          <CoverImage title={title} slug={slug} thumbnail={thumbnail} />
        </div>
      )}
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateComponent dateString={date} />
          </div>
        </div>
      </div>
    </section>
  );
}
