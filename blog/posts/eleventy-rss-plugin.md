---
title: Add the Eleventy RSS plugin
date: 2024-11-17
tags: eleventy
---

The first to-do I have completed in the list I have added in the [homepage](/blog/) is a simple one: add the <a href="https://www.11ty.dev/docs/plugins/rss/" target="_blank">RSS plugin</a>. I needed an easy win.

Besides the basic structure we got when we installed Eleventy, all extra things will be done using plugins. There are plugins for everything; <a href="https://www.11ty.dev/docs/plugins/official/" target="_blank">some of them are official</a> - made by Eleventy team - and some of them are <a href="https://www.11ty.dev/docs/plugins/community/" target="_blank">created by the strong community</a>.

RSS is one of the official plugins and it is a very simple one. Turns out this is a very good example to understand how plugins work in Eleventy.

## How to install the RSS template
1. Open the terminal and type 

    {% highlight node %}  
      npm install @11ty/eleventy-plugin-rss
    {% endhighlight %} 

    You will notice that something new was added in your <code>package.json</code>

2. I opted for using the <a href="https://www.11ty.dev/docs/plugins/rss/#virtual-template">virtual template</a>. So I got my <code>eleventy.config.js</code> and added this inside my export default function:

```js
  
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
```

    Don't forget to import the package doing 

```js
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
```

    If you <strong>do not have a config file yet</strong>, just create a new file in the root of your project called <code>eleventy.config.js</code> and add this:
```js

import { feedPlugin } from "@11ty/eleventy-plugin-rss";
export default function(eleventyConfig) {
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
```
3. Replace my data with your data.

And that's it! Go and check the url you added in <code>outputPath</code>. Mine is <a href="https://anamartins.github.io/blog/feed.xml" target="_blank">https://anamartins.github.io/blog/feed.xml</a>
