import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function AboutMe() {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <div className="flex flex-col items-center justify-center max-w-[800px] m-auto">
            <h1 className="text-2xl font-bold">About Me</h1>
            <p className="my-4 text-lg">
              Hey there! I'm a seasoned software engineer with focus on
              JavaScript. With over 12 years of experience, I've had a blast
              working in various industries and different projects, from web to
              mobile apps to desktop apps.
            </p>

            <p className="my-4 text-lg">
              I love sharing my knowledge and ideas with the tech community. You
              might have caught me giving{" "}
              <a
                href="https://speakerdeck.com/weblancaster"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                talks
              </a>{" "}
              in the USA, Brazil, and Germany. It's been a awesome connecting
              with great people and learning from them.
            </p>

            <p className="my-4 text-lg">
              I even made it into a cool book{" "}
              <a
                href="https://www.amazon.com/14-Habits-Highly-Productive-Developers-ebook/dp/B08BF74RRG"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                14 Habits of Highly Productive Developers,
              </a>{" "}
              that features top software engineers! It's a great feeling to be
              recognized and have participated in so many different projects,
              like when I built{" "}
              <a
                href="https://github.com/Soundnode/soundnode-app"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                an open source desktop music player
              </a>{" "}
              to support Soundcloud for desktop. You might have seen this app
              featured on some tech news websites or might have even used it.
            </p>

            <p className="my-4 text-lg">
              When I'm not coding, I'm always exploring new tech and staying
              ahead of the curve. I get a kick out of mentoring aspiring
              developers too. Gotta spread the knowledge, right?
            </p>

            <p className="my-4 text-lg">
              I'm all solving problems, and creating great applications.
              JavaScript is my jam, and I'm known for building robust and
              user-friendly apps that scale. I love working with React, Node.js,
              and TypeScript, and I'm always looking for new challenges.
            </p>
          </div>
        </Container>
      </Layout>
    </>
  );
}
