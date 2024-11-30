---
title: What we do with the box-shadows
date: 2024-11-19
tags: css
---
Every now and then I get a "CSS phase". The latest one started when I discovered <a href="https://cssbattle.dev/" target="_blank">CSSBattle</a>. This website has daily challenges where you need to reproduce an image with CSS with the least amount of characters. I am horrible, extremely verbose, but I must say I got obsessed.

One of my favorite things is looking at other people's solutions, and this was how I discovered that my other fellow css-battlers uses <code>box-shadow</code> a lot there, and then I got super curiours about it. They basically use this property to replicate one retangle forever and ever. I'll show how.

## The box-shadow property
There are lots of arrangements for this property, according to the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow" target="_blank">documentation</a>. But the one we use here is <code>top left color</code>. So, for example:

<img width=50% src="https://firebasestorage.googleapis.com/v0/b/cssbattleapp.appspot.com/o/user%2Fe6YbeBahWNPT7VpE2rE2p85byxa2%2Ftargets%2Ftarget_m3BxAL2@2x.png?alt=media" /><br/>
(CSSBattle daily target for 16/11/2024)

In this image we see only one div; the other ones are shadows. So, the html will be:

```html
<html>
   <body>
       <div></div>
   </body>
</html>
```

The CSS will be:
```css
* {
   background: #6592CF;
   position: absolute;
 }

div {
   top: 52px;
   left: 52px;
   width: 70px;
   height: 30px;
   background: #EEB850;
   box-shadow:
       0 75px #243D83, 0 150px #EEB850,
       105px 0 #243D83, 210px 0 #EEB850,
       105px 75px #EEB850, 210px 75px #243D83,
       105px 150px #243D83, 210px 150px #EEB850;
}
```

Note that the top and left properties are in <code>px</code>, and the distances are relative to the first one.

Maybe I'm the only one, but I think that this is very interesting. I'll continue my studies in CSS and I'll let you if I find other cool things.