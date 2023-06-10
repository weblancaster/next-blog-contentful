export default function Navigation() {
  return (
    <nav className="flex flex-wrap p-7 text-lg uppercase">
      <a
        href="/"
        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400 mr-4"
      >
        Home
      </a>
      <a
        href="/about"
        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400 mr-4"
      >
        About
      </a>
      <a
        href="/contact"
        className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400"
      >
        Posts
      </a>
    </nav>
  );
}
