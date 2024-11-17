import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";


export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./blog/style.css");
    eleventyConfig.addPlugin(syntaxHighlight, {
      preAttributes: {
        tabindex: 0}
    });
    eleventyConfig.addPlugin(feedPlugin, {
      type: "rss", // or "rss", "json"
      outputPath: "/blog/feed.xml",
      collection: {
        name: "post", // iterate over `collections.posts`
        limit: 10,     // 0 means no limit
      },
      metadata: {
        language: "en",
        title: "Ana Martins - Blog",
        subtitle: "Blog about my learning path with Javascript and its friends.",
        base: "https://anamartins.github.io/blog/",
        author: {
          name: "Ana Martins"
        }
      }
    });
  };
  