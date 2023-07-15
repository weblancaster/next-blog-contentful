import Link from "next/link";
import Navigation from "./navigation";

export default function Header() {
  return (
    <div className="container mx-auto px-5">
      <section className="mt-0 mb-16 md:mb-12">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
            <Link href="/">Michael Lancaster.</Link>
          </h1>
          <div className="flex items-center">
            <Navigation />
          </div>
        </div>
      </section>
    </div>
  );
}
