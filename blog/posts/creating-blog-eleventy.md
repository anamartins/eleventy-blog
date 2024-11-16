---
title: Creating a blog with Eleventy
date: 2024-11-15
tags: eleventy
---
Last week, I decided that I want to have a technical blog again. I had one some time ago, when I studied SEO, and it helped me to understand everything better. Now that I am a frontend developer, it's time again.

So I was looking for a simple way to publish my posts. I found some options, but Eleventy drew my attention: it is simple, has a big community online, and <a href="https://www.11ty.dev/docs/" target="_blank">the documentation is good</a>. So I have found <a href="https://www.youtube.com/watch?v=kzf9A9tkkl4">this video</a> in Eleventy's Get Started and it seemed very simple so I decided to give it a try.

<iframe width="560" height="315" src="https://www.youtube.com/embed/kzf9A9tkkl4?si=6bJ5ISIslhMV6y-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

I am going to list here how I did for this blog, mixing the Get Started with the content from the video. I will be extremely detailed.

<h2>Step-by-step</h2>
<ol class="post-step-by-step">
    <li>
        Create a new folder where you want to keep the blog in your computer.
    </li>
    <li>
        Create a package.json file. For this, you need to go to the folder you just created and type <code>npm init -y</code> in terminal. If you don't know what is a terminal, see <a href="https://www.11ty.dev/docs/terminal-window/" target="_blank">this article from Eleventy</a>.
    </li>
    <li>
        Install Eleventy typing <code>npm install @11ty/eleventy</code>.
    </li>
    <li>
        Create an index.html file. At <a href="https://youtu.be/kzf9A9tkkl4?si=Rxxg-2f39VreNeXF&t=10" target="_blank">0:10 in the video</a>, we can see a very nice Visual Code trick: after creating the empty html file, type <code>;html:5</code> and press enter. The whole basic html structure will appear for you. Add some text in the html.
    </li>
    <li>
        Run Eleventy typing <code>npx @11ty/eleventy --serve</code> in the terminal. Click in the link in the terminal (it will be something like <code>http://localhost:8080/</code>). You will see the text there.
    </li>
    <li>
        Now it's time to create the posts. Create a folder called posts and a file called post1.md. You can change the file name after with the right name of the post. Type something in the file and save. Add <code>/posts/post1.md</code> in the URL to see you post there.
    </li>
    <li>
        Now it's time to create a layout file for the posts. Create a new folder called <code>_includes</code>. This is the default name of the folder and apparently you can rename it in the configuration file (as said in <a href="https://youtu.be/kzf9A9tkkl4?si=5CbzOh_0iRiRtO-u&t=89" target="_blank">1min30seg in the video</a>). Then you create a new file in _includes folder called layout.html. In the video you have to remove the html from index.html and paste it on layout.html, but I personally just copied the content from index in layout. The index file is the home page from the blog, so it has a different layout. Here, only the posts have the template.
    </li>
    <li>You also need to add where the content will appear in the template. For this just add the word <code>content</code> between double curly braces, in the same way it is done in the video at the minute <a href="https://youtu.be/kzf9A9tkkl4?si=xol3LEgGxeC_rhI0&t=124 target="_blank">2min4seg</a>.
     {% highlight %}{{ content }}{% endhighlight %}
    <li>
        Then you have connect this layout to the posts. So create a file called posts.json in the posts folder. Note that the .json file should have the same name of the folder. Add this to the file (sorry for the poor identation. It's something related to the <a href="https://github.com/11ty/eleventy-plugin-syntaxhighlight" target="_blank">plugin I'm using</a> and I need to improve the style).

        {% highlight json %}
        { 
            "layout": "layout.html"
        }
        {% endhighlight %}   

        In this way, all the files in this folder will have the same layout. Note that in the video, it is also shown how to add a layout in only one file (at <a href="https://youtu.be/kzf9A9tkkl4?si=yl2F3GBQSdMj5KKj&t=110" target="_blank">1min50seg in the video</a>), but for this blog I did not do this.
    </li>
    <li>
        Now it is time to get a title and date in your posts. Add this at the top of post1.md:
        
        {% highlight markdown %}    
        ---
        title: Post 1 title
        ---
        {% endhighlight %}   
        Now go back in layout.html and add the word <code>title</code> between double curly braces in title tag: 
        {% highlight %}{{title}}{% endhighlight %}

    </li>
    <li>
        We are now create a list of all posts in home page. So go to posts.json and change it to this:
        {% highlight json %}        
        { 
            "layout": "layout.html",
            "tags": "post"
        }
        {% endhighlight %}         
        Now go to index.html and add this:
        {% highlight html %}
            {% for post in collections.post %}
                <h3 class="latest-posts-item">
                    <a href="{{post.url}}">{{post.data.title}}</a>
                </h3>
            {% endfor %}
        {% endhighlight %}
        This will make all the posts in the collection post appear in a list.
    </li>
</ol>

And that's it. After this you will have a very simple blog to start having some fun. Eleventy recommends that we go to <a href="https://www.11ty.dev/docs/tutorials/" target="_blank">tutorials page</a> to take a look in what we can do and install <a href="https://www.11ty.dev/docs/plugins/official/" target="_blank">some plugins</a> to add other features. I am excited to start improving this blog. Let's see what I can do. :) 



