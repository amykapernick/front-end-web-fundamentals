---
title: UI Testing
layout: ../../layouts/DefaultLayout.astro
---

UI testing can often be used as an alternative to visual regression testing, where things don't have to be pixel perfect, but we need to ensure that elements are still on the page, and can still be interacted with.

## Cypress Tests

```js
// Name of test
describe(`Homepage`, () => {
  // Runs at start of test
  before(() => {
    // Visit our website in Cypress browser
    cy.visit(`http://localhost:3000`);
  });
  // Assertion - title should contain specific text
  it(`Contains "Site Title" in the title`, () => {
    cy.title().should(`contain`, `Site Titlte`);
  });
});

```