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
	grid-column-gap: 20px;
	grid-row-gap: 25px; */
	grid-gap: 20px 25px;grid-gapgrid-gapgrid-gap
	grid-gap: 20px;grid-gapgrid-gap
}
```

These properties have recently been updated to remove the `grid-` prefix, so you can just use `column-gap`, `row-gap` and `gap`, without having to prefix it.

![https://caniuse.com/?search=gap](/img/gap-can-i-use.jpg)

## Placing Items in the Grid

Once the grid columns and rows are set up, we can place the grid children on the grid, in certain spots or spanning multiple rows.

## Grid Areas

We can define various areas of our grid and 