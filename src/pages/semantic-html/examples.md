---
title: Semantic HTML Examples
layout: ../../layouts/DefaultLayout.astro
---

## Section Elements

- [`header`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) - for the header section of a page or article, encompassing items such as the title, search bar or navigation
- [`footer`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) - for the footer section of a page or article, encompassing items such as the author information, copyright data or related pages and files
- [`main`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) - the main cotnent of the page and dominant content of the `body`
- [`article`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) - a self contained piece of content which makes complete sense on it's own without any of the other page content
- [`section`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) - a generic standalone section that doesn't meet another element, with at least one heading inside
- [`nav`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) - contains the navigational links to other pages or within the current page
- [`aside`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside) - a section of the page that is indirectly related to the main content, likely presented as a sidebar or callout box

## Picture

The [`picture` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) allows us to serve different image files depending on the size of the screen and capabilities of the browser.

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
When adding fields to a form, we need to add labels to let users and assistive technologies (like screen readers) know what the field is for. We can do this using the [`label` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label), which not only provides a nice description for the input, we can specify that the input and label are linked and relate to one another using the `id` and `for` attributes.

```html
<label for="name">What is the Quokka's name</label>
<input type="text" name="quokka_name" id="name" />

<fieldset>
	<legend>Do you like Quokkas?</legend>
	<input type="radio" name="like_quokkas" value="Yes" id="yes" />
	<label for="yes">Yes, I like Quokkas</label>
	<input type="radio" name="like_quokkas" value="No" id="no" />
	<label for="no">No, I do not like Quokkas</label>
</fieldset>
```

## Video

Using the [`video` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video), we can load a video file on the page, using browser native features and getting access to video controls.

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

### Subtitles
We can link a subtitle file to a video or audio file using the [`track` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track). This allows us to define the subtitle file (or specify multiple subtitle files in different languages) to allow users to enable subtitles on the media.

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
	<track 
		default 
		kind="captions" 
		srclang="en-AU" 
		src="/img/subtitles.vtt" 
	/>
	<p>Sorry, your browser doesn't support this video.</p>
</video>
```

## Figures

Using the [`figure` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure), we can give images and other media items a caption, and give additional information to the user.

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

```html
<figure>
	<video>
		<source
			src="/img/video.mp4"
			type="video/mp4"
		/>
	</video>
	<figcaption>This is not a Quokka</figcaption>
</figure>
```
## Collapsible Sections

The [`details`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) and [`summary`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary) elements are used to provide collapsible sections, similar to FAQs, and have a summary which is always visible and main content section that is only visible when expanded.

```html
<details>
	<summary>Are Quokkas real?</summary>
	<p>Is Australia real? Are we even real? What is real? Are we all just a figment of someone's imagination? Or part of the matrix?</p>
	<p>Yes, Quokkas are real. They seem too good to be true, and a bit too weird (like most animals in Australia, I'm still convinced that platypus' are a myth), but they do genuinely exist.</p>
</details>
<details>
	<summary>Can I have one?</summary>
	<p>Quokkas are only native to one island in Australia, and don't do well outside of their natural habitat. They're not great as pets, it would be similar to keeping a squirrel as a pet.</p>
</details>
```

## Text Alternatives

We can use the [`alt`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt) attribute to define a text alternative in case someone is unable to see the image. This could either be as a result of the user using a screen reader or assistive technology, or could be due to the image failing to load.

```html
<img src="/img/rottnest.jpg" alt="Rottnest Island in Western Australia, with white sandy beach and the clear blue water dotted with small rocky reef sections along the edge" />
```

## Addresses

You can use the [`address` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address) to provide a more semantic wrapper around address details. This isn't limited to physical location addresses, but can also be used for email addresses and phone numbers as well.

```html
<address>
	1 Henderson Ave<br/> 
	Rottnest Island, WA<br/>
	Australia 6161
</address>

<address>
	<a href="tel:+61893729730">(08) 9372 9730</a>
</address>
```

## Datalists

There's a special type of form input called a [`datalist`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist), which allows users to type in a text field and have the options be autofilled from a list of predefined options.

```html
<label>Which Australian animal do you think is the best?</label>
<input type="text" list="animals" id="aussie-animals" name="best-animal" />

<datalist id="animals">
	<option value="Quokka" >
	<option value="Koala" >
	<option value="Platypus" >
	<option value="Echidna" >
	<option value="Kangaroo" >
	<option value="Camel" >
		
</datalist>
```