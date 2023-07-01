import { marked } from "marked";
import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ post }) {
  const body = marked.parse(post || "");

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: body }}
      ></div>
    </div>
  );
}
