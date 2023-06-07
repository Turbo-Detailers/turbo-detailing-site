// contentlayer.config.ts
import { defineDocumentType, makeSource } from "@contentlayer/source-files";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  // contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    author: { type: "string", required: true },
    subtitle: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
  // mdx: {
  //   remarkPlugins: [remarkGfm],
  //   rehypePlugins: [
  //     rehypeSlug,
  //     [
  //       rehypeAutolinkHeadings,
  //       {
  //         behavior: "wrap",
  //         properties: {
  //           className: ["anchor"],
  //         },
  //       },
  //     ],
  //   ],
  // },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  // mdx: {
  //   rehypePlugins: [rehypeSlug],
  // },
});
