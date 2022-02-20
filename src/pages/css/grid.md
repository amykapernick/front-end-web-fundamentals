---
title: CSS Grid Examples
layout: ../../layouts/CSSLayout.astro
---

## Page Layout

!['Wireframe for the page'](/img/Wireframe.jpg)

## Defining Columns

We can define the columns of the grid using the [`grid-template-columns`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) property, and can define it it in a number of ways. You can use any [CSS unit](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) you want when defining the columns, such as `px`, `%`, `em`, `rem`, `vw`, `vh`, `fr`, `ch`, `cm`, `pt` and a bunch more options!

```css
body {
	grid-template-columns: 100px 250px 50px;
	grid-template-columns: repeat(5, 200px);
	grid-template-columns: 1fr 100px 2fr 50px;
}
```

## Defining Rows

Similarly to the columns, we can define the rows using the [`grid-template-rows`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows) property.

```css
body {
	grid-template-rows: 1fr auto 100px;
}
```

## Repeating Rows and Columns

When defining the number of columns and rows, we can use the [`repeat`](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat()) function which allows us to define a pattern, and the number of times to repeat it.

```css
// repeat(number of times, size)
body {
	grid-template-columns: repeat(2, 10px 20vw);
	grid-template-rows: repeat(5, 200px);
}
```

## The `fr` unit

The [`fr` unit](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#the_fr_unit) is a new unit specifically for CSS grid, and allows us to more easily allocate leftover space in a layout, without having to do complex calculations or rely on percentages.

![](/img/fr_unit_1.png)

![](/img/fr_unit_2.png)

![](/img/fr_unit_3.png)

## Gaps

We can use the [`grid-gap` property](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) to define a gap to appear between each of the columns and/or rows. Using this property we can define the same gap between both rows and columns, or different sized gaps. We can also use the [`grid-row-gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap) and [`grid-column-gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap) properties to define them individually.

```css
body {
	/* Define both values is separate properties */
	grid-column-gap: 20px;
	grid-row-gap: 25px;

	/* Using the shorthand to define both properties with different values */
	grid-gap: 20px 25px;

	/* Using the shorthand to define both properties with the same value */
	grid-gap: 20px;
}
```

These properties have recently been updated to remove the `grid-` prefix, so you can just use `column-gap`, `row-gap` and `gap`, without having to prefix it.

![https://caniuse.com/?search=gap](/img/gap-can-i-use.jpg)

## Grid Lines

When putting items on the grid, we talk in terms of lines on the grid, these are used the split up the layout and we can use the numbers to define different areas or sizes of grid children.

![](/img/grid-lines-1.png)

Not only are the lines numbered forwards, but they're numbered backwards as well, so it's easier to define the position relative to the opposite side of the grid.

![](/img/grid-lines-2.png)

## Placing Items in the Grid

Once the grid columns and rows are set up, we can place the grid children on the grid, in certain spots or spanning multiple rows. To do this we can use the following properties:

- [`grid-column-start`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start)
- [`grid-column-end`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end)
- [`grid-row-start`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start)
- [`grid-row-end`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end)

When defining placement, you can define a point to start the element and a point to end the element or define one of these points and the number of rows/columns to span.

```css
header {
	grid-column-start: 2;
	grid-column-end: 4;
}

footer {
	grid-column-start: 1;
	grid-column-end: span 4;
}

main {
	grid-column-start: span 3;
	grid-column-end: 4;
}
```

### Shorthand Properties
You can also use the shorthand properties to define both the `-start` and `-end` values at the same time.

- [`grid-row`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)
- [`grid-column`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)

## Grid Areas

We can define various areas of our grid and where grid children go, rather than using line numbers to define their positions. We can do this by first defining [`grid-template-areas`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas) on the grid item.

```css
body {
	grid-template-columns: 200px repeat(4, 1fr);
	grid-template-rows: 100px 1fr 20px;
	grid-template-areas:
     'header    header   header   header   header'
     'sidebar   content  content  content  content'
     'footer    footer   footer   footer   footer';
}
```

These area names line up with the columns and rows on the grid.

![](/img/grid_areas_1.png)

When using the same name for multiple sections, it then combines the cells to create one large area on the grid.

![](/img/grid_areas_2.png)

We can then use those named areas to assign grid children to their positions on the grid.

```css
header {
	grid-area: header
}

footer {
	grid-area: footer;
}

main {
	grid-area: content;
}
```

If we want to keep a section clear, we can also use `.` to denote a blank grid cell.

```css
body {
	grid-template-areas:
     'header    header   header   header   .'
     'sidebar   content  content  content  .'
     'footer    footer   footer   footer   footer';
}
```