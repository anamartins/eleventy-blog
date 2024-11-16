import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./blog/style.css");
    eleventyConfig.addPlugin(syntaxHighlight, {
      preAttributes: {
        tabindex: 0}
    });
  };
  