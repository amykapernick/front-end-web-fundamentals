---
title: Accessibility Testing
layout: ../../layouts/A11yLayout.astro
---

## What is Accessibility

Accessibility refers to ensuring that everyone has access to our website, service, location, no matter their impairment or abilities.

## Areas of Impairments

Impairments can be in a number of areas, typically broken in to:

- **Vision**: this includes anything affecting a person's vision, whether removing it entirely, limiting it or inhibiting it
- **Hearing**: this includes anything affecting a person's hearing, whether removing it, limiting it or inhibiting it
- **Mobility**: this includes any limitations on a person's ability to move or use limbs
- **Cognitive**: this covers a wide range of impairments, such as ADHD, dyslexia, epilepsy or low english comprehension

![](/img/impairment_categories.jpg)

## Types of Impairments

When thinking of disability or impairment we often think of things like missing limbs, or people who are fully blind and deaf. But there is a much wider range of impairments and not all of them are permanent.

- **Permanent**: the impairment is permanent, eg. a missing limb
- **Temporary**: the impairment can't be fixed, but only exists for a period of time, typically due to injury or illness, eg. a broken arm or an ear infection
- **Situational**: the impairment is due solely to the situation the person is in, eg. a loud room, or glare on a screen

![](/img/impairment.jpg)

Over 30% of the global population are affected by some kind  of **permanent** impairment, with over 17% of the population having a permanent vision impairment.

![](/img/Statistics.jpg)

## Web Content Accessibility Guidelines

The [Web Content Accessibility Guidelines (WCAG)](www.w3.org/WAI/standards-guidelines/wcag
) are a set of guidelines that are developed by the World Wide Web Consortium (W3C), which is an international community of people who develop the web standards with work with. 

These guidelines are updated as technology changes, but typically provide three levels of compliance which organisations can work towards meeting.

- **A**: the bare minimum, most sites should meet this level, the website can be used by anyone but it's not necessarily convenient for people with disabilities
- **AA**: the general standard, when making a website accessible this is typically what people work towards
- **AAA**: the highest standard, usually followed by companies whose websites are for people with disabilities

## How to make our websites more accessible

There are many simple things that we can do to make our websites more accessible.

### Colour Contrast

Colour contrast affects everyone who uses websites, whether they have a vision impairment or not. This means we make sure that there is sufficient contrast between text or content colour, and the background colour. 

At a minimum, there should be a 3:1 contrast ratio between the two colours (A standard), with 4.5:1 required for the AA standard and 7:1 required for AAA standard. There are a wide range of testing tools out there (check the resources) to check the contrast between two colours, or between all combinations of branding colours.

![](/img/contrast.png)

You can also go one step further and emulate various kinds of vision impairments, and make sure that your colour combinations are still met in these cases. Tools like [Who Can Use](https://whocanuse.com/?b=364c93&c=f7f0eb&f=20&s=) are really useful at checking this.

![](/img/whocanuse.png)

### Focus Indicators

Focus indicators are useful to allow people navigating using their keyboard to know where they are, and what they'll *click* on, if they hit enter. Most of the time focus indicators are hidden as they aren't considered "pretty" or "nice", but instead we should ensure we provide an on brand focus indicator.

```css
	*:focus {
		outline: 2px solid chartreuse;
		outline-offset: 0.2em;
	}
```

### Text Alternatives

We can use the [`alt`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt) attribute to define a text alternative in case someone is unable to see the image. This could either be as a result of the user using a screen reader or assistive technology, or could be due to the image failing to load.

```html
<img src="/img/rottnest.jpg" alt="Rottnest Island in Western Australia, with white sandy beach and the clear blue water dotted with small rocky reef sections along the edge" />
```

This extends to videos and audio files as well, ensuring that we provide subtitle tracks for people to enable.

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

### Using Colour

When triggering hover effects, or changes of state, and providing error messages, we shouldn't rely on colour alone to relay something to the user, as depending on their level of vision or kind of colour blindness, they may not be able to tell the difference.

![](/img/hover_effects.png)

Colour may tell us that something has been hovered over, but when we can't tell the difference between two colours, do you know that something has changed?

![](/img/hover_effects_grey.png)

This is especially important when using colour to relay messages about errors. Can you tell the which field has an error?

![](/img/error_messages.png)

### Semantic HTML

One of the best things we can do is provide good, logical HTML that screen readers and assistive technologies can read.

### Keyboard and Screen Reader Testing

To properly test with screen readers, we need to hire someone who uses one on a daily basis. However it never hurts to give this a go ourselves.

You can also use services like [Assistiv Labs](https://assistivlabs.com/) to run screen reader tests and tests using other assistive technologies through the browser.

#### MacOS

You can enable [VoiceOver](https://support.apple.com/en-au/guide/voiceover/vo2682/mac) in the accessibility settings.

![](/img/voiceover.jpg)

#### Windows

You can enable [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) in the accessibility settings.

![](/img/narrator.png)

#### Keyboards

The easiest way to test is also to get your keyboard out and try and navigate through without your mouse. Can you reach everywhere you need to? Can you fill in and submit forms, click buttons and trigger actions, can you navigate between pages?

### Linting and Testing

There are several linting tools for accessibility, which can help to validate the code written and fix accessibility issues before they happen.

- [deque aXe](https://www.deque.com/axe/): various browser extensions, a VS Code plugin and npm packages for most frameworks

We can also run manual tests in the browser

- deque aXe - have browser extensions
- [WAVE (Web Accessibility Evaluation Tool)](https://wave.webaim.org/): is a manual testing tool either in the browser or via a browser extension

We can also integrate command line tools that automate tests for us, and can be integrated as part of a testing pipeline.

- [pa11y](https://pa11y.org/): a command line tool that can be run manually or added to a CI/CD pipeline, and run with other testing suites.