# ![Dobercorgi](https://dobercorgi.fra1.digitaloceanspaces.com/dobercorgi/dobercorgi-128x128.png) Dobercorgi.info
> Resource directory for the Shulk Discord.

A quick exploration into a JAMstack project - collects data from the Resources API and shows it to the user as a progressive web app using Nuxt.
You can check it out over at [dobercorgi.info](https://dobercorgi.info/)

## Build Setup
Needs Node 24 (see `.nvmrc`), or run it in Docker with `docker compose up` and open http://localhost:3000.

``` bash
# install dependencies
$ npm ci

# serve with hot reload at localhost:3000
$ npm run dev

# generate the static site into .output/public
$ npm run generate

# preview the generated site
$ npx serve .output/public
```

The API address defaults to `https://backend.dobercorgi.info` and can be overridden with `NUXT_PUBLIC_API_BASE`.

## Deployment
Publishing a GitHub release (or running the workflow by hand from the Actions tab) builds the static site and deploys it to GitHub Pages. The build fails on any high or critical `npm audit` advisory that isn't explicitly allowlisted in `audit-ci.jsonc`.

For detailed explanation on how things work, check out the [Nuxt docs](https://nuxt.com/docs).
