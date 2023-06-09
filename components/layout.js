import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
      <Analytics />
    </>
  );
}
