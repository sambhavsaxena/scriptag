
# Scriptag

A CLI `create-react-app` template generator for simple portfolios.
Visit the official website [here](https://scriptag.vercel.app/).

## Installation

```bash
$ npx create-react-app <project name> --template scriptag
$ cd <project name>
$ npm start
```

In case of `yarn` package manager: 
```bash
$ npx create-react-app <project name> --template scriptag
$ cd <project name>
$ yarn start
```

## Creating pages

You can generate `directories` by creating a screens/pages folder in the root directory. Components can also be created and the app can be simply extended in the same way we do in case of a CRA app. There are no constraint to possibilities.

--- 

You can edit the attributes according to html. The icon can be manually replaced as well. The styling (`style.css` in `/css`) can be manually changed according to need as can be changed the font (in `/build_scripts`).

The pages are generated in the `build` directory on root after you run `npm run build` which you can use to deploy your site.

## Dependencies

- react-dom
- bootstrap
- react-bootstrap
- sass

## License

[![GitHub license](https://img.shields.io/github/license/sambhav2612/staticgen.svg?style=for-the-badge)](https://github.com/sambhav2612/staticgen/blob/master/LICENSE)
