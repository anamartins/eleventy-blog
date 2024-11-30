---
title: Creating a blog with Eleventy
date: 2024-11-16
tags: eleventy
---
Last week, I decided that I want to have a technical blog again. I had one some time ago, when I studied SEO, and it helped me to understand everything better. Now that I am a frontend developer, it's time again.

So I was looking for a simple way to publish my posts. I found some options, but <a href="https://www.11ty.dev/" target="_blank">Eleventy</a> drew my attention: it is simple, has a big community online, and <a href="https://www.11ty.dev/docs/" target="_blank">the documentation is good</a>. So I have found <a href="https://www.youtube.com/watch?v=kzf9A9tkkl4">this video</a> in Eleventy's Get Started and it seemed very simple so I decided to give it a try.

<iframe width="560" height="315" src="https://www.youtube.com/embed/kzf9A9tkkl4?si=6bJ5ISIslhMV6y-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

I am going to list here what I did to create this humble little blog, mixing the Get Started with the content from the video. The editor I used is the <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>.

## Step-by-step
1. Create a new folder where you want to keep the blog in your computer.
2. Open the folder you just created on terminal and start a new project by running the command <code>npm init -y</code> in terminal.
3. Install Eleventy typing <code>npm install @11ty/eleventy</code>.
4. Create an index.html file. At <a href="https://youtu.be/kzf9A9tkkl4?si=Rxxg-2f39VreNeXF&t=10" target="_blank">0:10 in the video</a>, we can see a very nice Visual Code trick: after creating the empty html file, type <code>;html:5</code> and press enter. The whole basic html structure will appear for you. Add some text in the html.
5. Run Eleventy typing <code>npx @11ty/eleventy --serve</code> in the terminal. Click in the link in the terminal (it will be something like <code>http://localhost:8080/</code>). You will see the text there (this is called a <a href="https://code.visualstudio.com/docs/editor/userdefinedsnippets" target="_blank">code snippet</a>).
6. Now it's time to create the posts. Create a folder called <code>posts</code> and a file called <code>post1.md</code>. You can change the file name after with the right name of the post. Type something in the file and save. Add <code>/posts/post1</code> in the URL to see you post there. Every file you create in this folder will be a different post on your blog.
7. Now it's time to create a layout file for the posts. Create a new folder called <code>_includes</code>. This is the default name of the folder and apparently you can rename it in the configuration file (as said in <a href="https://youtu.be/kzf9A9tkkl4?si=5CbzOh_0iRiRtO-u&t=89" target="_blank">1min30seg in the video</a>). Then you create a new file in _includes folder called layout.html. In the video you have to remove the content from index.html and paste it on layout.html, but I personally just copied the content from index in layout. The index file is the home page from the blog, so it has a different layout. Here, only the posts have the template.
8. You also need to add where the content will appear in the template. For this just add the word {% highlight html%}{{ content }}{% endhighlight %} inside the main tags: 
{% highlight html%}
<main>
  {{ content }}
</main>
{% endhighlight %}
     
9. Then you have connected this layout to the posts. So create a file called posts.json in the posts folder. Note that the .json file should have the same name of the folder. Add this to the file.
```json
{ 
    "layout": "layout.html"
}
``` 
In this way, all the files in this folder will have the same layout. 
10.  Now it is time to add a title and date to your posts. Add this at the top of post1.md:
        {% highlight markdown %}
            ---
            title: Post 1 title
            --- 
        {% endhighlight %}   

Go back in layout.html and add the title in title tag: 
        {% highlight html%}
        <title>{{ title }}</title>
        {% endhighlight %}
11.  We are now going to create a list of all posts on the home page. So go to posts.json and change it to this:

{% highlight json tab %}
{ 
    "layout": "layout.html",
    "tags": "post"
}
{% endhighlight %}
        Now go to index.html and add this:

{% highlight liquid %}
{% for post in collections.post %}
    <h3 class="latest-posts-item">
        <a href="{{post.url}}">{{post.data.title}}</a>
    </h3>
{% endfor %}
{% endhighlight %}

    This will make all the posts in the collection post appear in a list.

And that's it! After this you will have a very simple blog to start having some fun. Eleventy recommends that we go to <a href="https://www.11ty.dev/docs/tutorials/" target="_blank">tutorials page</a> to take a look in what we can do and install <a href="https://www.11ty.dev/docs/plugins/official/" target="_blank">some plugins</a> to add other features. I am excited to start improving this blog. Let's see what I can do. :) 



