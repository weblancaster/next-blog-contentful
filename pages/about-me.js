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
        <Container>About Me</Container>
      </Layout>
    </>
  );
}
