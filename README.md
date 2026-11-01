# Abeer Perfumes

The Abeer Perfumes storefront is built with React, Vite, and Three.js.

## Run locally

```sh
npm ci
npm run dev
```

## Publish to the `gh-pages` branch

1. Run `npm run build` to generate the site in `dist/`.
2. Run `npm run deploy` to publish the contents of `dist/` to the `gh-pages` branch.
3. In the repository, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `gh-pages` and `/(root)`, then save.

The site uses `/abeerperfumes/` as its base path for the project Pages URL.
