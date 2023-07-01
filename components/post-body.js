import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import marked from "marked";
import { BLOCKS } from "@contentful/rich-text-types";
import markdownStyles from "./markdown-styles.module.css";
import RichTextAsset from "./rich-text-asset";

const customMarkdownOptions = (content) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
  },
});

export default function PostBody({ post }) {
  const body = marked(post || "");

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: body }}
      ></div>
    </div>
  );
}
