import Link from "next/link";
import Navigation from "./navigation";

export default function Header() {
  return (
    <div className="container mx-auto px-5">
      <section className="mt-0 mb-16 md:mb-12">
        <div className="flex flex-row md:flex-row md:items-center md:justify-between w-full">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
            <Link href="/">Michael Lancaster.</Link>
          </h1>
          <Navigation />
        </div>
      </section>
    </div>
  );
}
