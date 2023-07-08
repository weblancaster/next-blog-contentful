import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 py-8">
      <Container>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <a
            href="https://www.linkedin.com/in/michaellancaster1/en"
            className="mx-3 font-bold hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/weblancaster"
            className="mx-3 font-bold hover:underline"
          >
            GitHub
          </a>
        </div>
      </Container>
    </footer>
  );
}
