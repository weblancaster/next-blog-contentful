import GithubSlugger from "github-slugger";

const slugger = new GithubSlugger();

export default function slugfy(text) {
  return slugger.slug(text);
}
