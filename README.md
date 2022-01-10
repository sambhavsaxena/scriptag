
# staticgen

Simple Static Page Generator in NodeJS.

## Installation

```bash
$ git clone https://github.com/sambhav2612/staticgen.git nodejs-static-webpage-generator
$ cd nodejs-static-webpage-generator
$ npm install
$ npm run start
```

## Creating pages

You can generate `html` pages by creating markdown files in `/pages` and providing page specifications from JSON files in `/pages_meta`. Only costraint is that **the file name has be same in both directories** for successful generation of html pages with the same name as provided earlier for both markdown and json files.

An example to markdown file in pages dir:

```markdown
# Home page

Hello world!

[Link to another page](./other.html)
```

and JSON spec in pages_meta dir: 

```json
{
    "lang": "en",
    "title": "Homepage",
    "stylesheets": ["./css/style.css"],
    "scripts": ["./js/main.js"],
    "charset": "utf-8",
    "description": "This is a page",
    "keywords": "page, sample",
    "author": "Sambhav Jain",
    "favicon": "./images/next.svg",
    "viewport": "width=device-width, initial-scale=1",
    "extra": []
}
```

You can edit the attributes according to html. The icon can be manually replaced as well. The styling (`style.css` in `/css`) can be manually changed according to need as can be changed the font (from `pages_template.js` in `/build_scripts`).

However, pages can be built without supplying JSON spec as the generator keeps a default copy of the spec in case user does not explicitly defines one to use.

The pages are generated in the `build` directory on root which you can use to deploy on your site as usual.

## Dependencies

- Git
- NodeJS and NPM (NPm comes with NodeJS)
- live-server
- nodemon
- concurrently
- markdown-it
- fs-extra

## License

[![GitHub license](https://img.shields.io/github/license/sambhav2612/staticgen.svg?style=for-the-badge)](https://github.com/sambhav2612/staticgen/blob/master/LICENSE)
