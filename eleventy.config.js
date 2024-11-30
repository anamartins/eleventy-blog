import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";


export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./blog/css/style.css");
    eleventyConfig.addPassthroughCopy("./blog/css/prism-z-touch.css");
    eleventyConfig.addPlugin(syntaxHighlight);
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
    eleventyConfig.setTemplateFormats("md,html,css");
  };
  