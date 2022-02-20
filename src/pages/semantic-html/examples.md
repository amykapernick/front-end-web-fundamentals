---
title: Semantic HTML Examples
layout: ../../layouts/DefaultLayout.astro
---

## Picture

The [picture element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) allows us to serve different image files depending on the size of the screen and capabilities of the browser.

The element also allows us to provide a fallback in case the source queries aren't met, to display a regular image.

### Different Image sizes

We can define different media queries and the image file to use, depending on the size of the screen the site will load a different image size.

```html
<picture>
	<source
		srcset="/img/rottnest-300_x_224.jpg"
		media="(min-width: 500px)"
	/>
	<source
		srcset="/img/rottnest-500_x_375.jpg"
		media="(min-width: 700px)"
	/>
	<source
		srcset="/img/rottnest-400_x_300.jpg"
		media="(min-width: 600px)"
	/>
	<source
		srcset="/img/rottnest-300_x_224.jpg"
		media="(min-width: 500px)"
	/>
	<source
		srcset="/img/rottnest-200_x_150.jpg"
		media="(min-width: 400px)"
	/>
	<source
		srcset="/img/rottnest-100_x_75.jpg"
		media="(min-width: 300px)"
	/>
	<img src="/img/rottnest.jpg" />
</picture>
```

### Different Image Formats

The same as checking for the size of the screen, we can check the capabilities of the browser and whether it can handle a newer image format.

```html
<picture>
	<source
		srcset="/img/rottnest.webp"
		type="image/webp"
	/>
	<img src="/img/rottnest.jpg" />
</picture>
```

## Definition List

The [definition list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl) is often used for key value pairs, like dictionaries or glossaries, where there is a **term** and a **description/definition**

```html
<dl>
	<dt>Size</dt>
	<dd>40 to 54 cm</dd>
	<dt>Weight</dt>
	<dd>2.5 to 5kg</dd>
	<dt>Lifespan</dt>
	<dd>About 10 years in the wild and up to 15 years in captivity.</dd>
</dl>
```

## Form Fields and Labels

## Video

Using the [video element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video), we can load a video file on the page, using browser native features and getting access to video controls.

The element has various attributed to set whether there are controls, if the video loops, if the video is automatically muted and more. You can also provide HTML for a fallback (similar to the picture element), so that if the browser doesn't support it the users are aware.

```html
<video
	controls
	muted
	loop
>
	<source
		src="/img/video.mp4"
		type="video/mp4"
	/>
	<p>Sorry, your browser doesn't support this video.</p>
</video>
```

## Figures

Using the [figure element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure), we can give images and other media items a caption, and give additional information to the user.

```html
<figure>
	<img src="/img/rottnest.jpg" />
	<figcaption>Rottnest Island, WA</figcaption>
</figure>
```

You can use this element in combination with picture elements.

```html
<figure>
	<picture>
		<source
			srcset="/img/rottnest.webp"
			type="image/webp"
		/>
		<img src="/img/rottnest.jpg" />
	</picture>
	<figcaption>Rottnest Island, WA</figcaption>
</figure>
```

Or even other kinds of media items, like audio or video.