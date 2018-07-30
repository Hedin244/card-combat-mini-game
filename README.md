# Card combat mini-game

<br/>

It's a simple app, a "just for fun" project", used mostly as a mean to learn and practice new things in JavaScript, React end modules around them. You can treat it as an "tech demo" in a very early stage.

#### Technologies used

Whole app is build opon [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate) that by itself uses 
[React](https://facebook.github.io/react/), 
[Redux](https://github.com/reactjs/redux), 
[React Router](https://github.com/reactjs/react-router), 
[Webpack](http://webpack.github.io/docs/), 
[React Transform HMR](https://github.com/gaearon/react-transform-hmr)

### Future development

* Overall visuals are pretty bad (there are there just to test app logic), so they need to be redo.
* There is a need for better responses that player receive, usually when thy try to do an illegal move (Alert component probably).
* Card movement animations (for draw and discard for example) will help player understand what is happening on board and will make whole app look much nicer.
* Models (card, and action) should be upgraded and  have fields and methods so they would be easier to modify.
* Monster phase algorithms should be separated to new files and expanded.
* More content will help flesh out more in-depth mechanics that current reducer-action structure can support.
* More mechanics should be added (custom validations, permanent cards, dodge, block and parry mechanics).

### Install

* **Note: requires a node version >= 7 and an npm version >= 4.**

First, download the repo directly or clone it via git.

```bash
git clone --depth=1 https://github.com/chentsulin/electron-react-boilerplate.git card-combat-mini-game
```

And then install dependencies.

```bash
$ cd card-combat-mini-game
$ npm install
```

### Run

Start the app in the `dev` environment.

```bash
$ npm run dev
```
