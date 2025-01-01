import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { DateTime } from 'luxon'

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

    eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
      // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
      return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
    });

    eleventyConfig.addFilter("postDate", (dateObj, format, zone) => {
      // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
      return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd/LL/yyyy");
    });
  
    eleventyConfig.addFilter("htmlDateString", (dateObj) => {
      // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
      return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat('yyyy-LL-dd');
    });
  };
  