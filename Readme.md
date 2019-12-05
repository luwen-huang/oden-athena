# Oden-Athena


Oden Athena is the frontend styles repository for the Oden website. Check out [examples and documentation here](https://oden-athena.herokuapp.com/). This repo contains only styles -- SCSS and CSS. If you find yourself repeatedly writing the same CSS over and over again, you should probably add it as a component.

Oden Athena is framework-agnostic -- it does not use Foundation or any other library.

## Using Oden-Athena

The easiest way to load the library is just to add the entire bundled file to your HTML. This will load every single component:
```
<link rel='stylesheet' href='lib/oden-athena/css/index.css'>
```

Instead of getting the whole bundle, you can also choose to load only the bits you need, for example:
```
<link rel='stylesheet' href='lib/oden-athena/css/layout/index.css'>
```

If you're working in SCSS, you can also import in specific components in your SCSS file, e.g.:
```
@import 'oden-athena/scss/components/_contentBox.scss'
```



## Contributing to Oden-Athena

Oden-Athena is designed to be a long-lived and evergreen library. That means developers can and should contribute to it as we keep developing new pages. Developers will need to be running [NodeJS > 7 and have NPM](https://blog.teamtreehouse.com/install-node-js-npm-mac) installed. The reason why is that the build process uses a GulpJS task to offline compile SCSS into CSS and package them into neat directories. Also because the [documentation site](https://oden-athena.herokuapp.com/) is an Express app.

First, git clone this whole repo:

```
git clone https://git.ices.utexas.edu/cody/oden-athena.git
```

Then, run `npm install` to download and install dependencies in the root directory:
```
cd oden-athena
npm install
```

The directory should look like this:
```
.
+-- bin
+-- dist
+-- public
+-- routes
+-- src
|   +-- components
|   +-- layout
|   +-- ...
+-- views
```

### Editing

All styles live in the `src/` directory. Existing components live in individually-named, camel-cased files. To create a new component, create a new file in a suitable folder, and include it in the `index.scss` file:

```
@import "./_myNewComponent.scss";
```

### Building

After you finish changes in the `src/` directory, you'll need to **build** them. This is necessary because we want these styles to 1) have a CSS version and 2) be namespaced.

To build your changes, run:

```
npm run build
```

This will clear the current `dist/` directory, and fill it with a fresh build.


### Updating the docs

You should update the docs with every change you make, so that it'll stay evergreen. The docs run in an Express app. To run the app locally, do:

```
npm run dev
```

Then visit `localhost:8000` on your browser.

The docs live in files in `views/`.

### Deploying

We need to figure out a permanent home to host this Express app. 
