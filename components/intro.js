import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Michael Lancaster.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 flex flex-col gap-y-3">
        <p>Lead Software Engineer, Frontend at Mission Lane</p>
        <p>
          I have been working as a software engineer for the past 12 years,
          given talks in Brazil, US and Europe, contribute to known open source
          projects, featured in a book, a few articles, and even had thousands
          of daily users in one of my side projects.
        </p>
        <p>
          Learn more about me{" "}
          <a
            href="/about-me"
            className="underline hover:text-success duration-200 transition-colors"
          >
            here
          </a>
        </p>
      </h4>
    </section>
  );
}
