# Ontology Tree Viewer

You can see in action here: [LIVE DEMO](https://ontology-tree-viewer.herokuapp.com/input)

## Setup

It's simple:

Install dependencies using `yarn install`

then run `yarn start` to start development server and `yarn test` to run test suite.

## Tech Stack & Approach

I've used [razzle](https://github.com/jaredpalmer/razzle) for Server Side Rendering and [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree) for state management.
I know that using simple CRA for such small project would be enough, but I wanted to also share my most common tech stack with you.

Also, I've decided to use MobX not because I'm blind focused on that library, but because I'd love to know your opinion on that matter compared to similar code written in Redux.

As for testing I follow the rule where I test most complex and critical parts first, and then try to write at least a test that checks if component is correctly rendered.

## Disclaimer

To provide support for IE11, simply downgrade MobX to version 4.
As it was not specified in documentation
whether app should provide support for it or not, I'm leaving this disclaimer here.
