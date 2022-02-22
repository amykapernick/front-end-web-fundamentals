---
title: Visual Regression Testing
layout: ../../layouts/DefaultLayout.astro
---

Visual Regression testing is a visual git diff between two screenshots of an application or component.

![](/img/vr_diff.png)

There are a bunch of different visual regression tools, but we're using [Percy](https://percy.io/). Create an account, add a project and add your token to your computer.

```bash
export PERCY_TOKEN=xxxxxxxxx
```

Use the `tests/percy/snapshots.yml` file to provide a list of pages to test, then run the test.

```bash
npm run test:percy
```