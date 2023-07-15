import { marked } from "marked";
import markdownStyles from "../components/markdown-styles.module.css";
import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { getAboutMe } from "../lib/api";

export default function AboutMe({ content }) {
  const body = marked.parse(content || "");

  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <div className="flex flex-col items-center justify-center max-w-[800px] m-auto">
            <h1 className="text-2xl font-bold">About Me</h1>
            <div className="max-w-2xl mx-auto">
              <div
                className={markdownStyles["markdown"]}
                dangerouslySetInnerHTML={{ __html: body }}
              ></div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const aboutMeContent = (await getAboutMe(preview)) ?? "";

  return {
    props: { preview, content: aboutMeContent[0]?.content },
  };
}
