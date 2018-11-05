# PetiJS

Very small library to render JSX.

> Inspired by React, of course.

## How it works

[babel-plugin-transform-react-jsx](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx) will turn JSX into ~~React~~ Peti function calls.

The only things you'll have to do are:

- Import Peti
- Add a babel plugin to convert JSX into functions
- Configure this plugin with the following **Pragma**: `Peti.createElement`

## Features

- Turn JSX into function
  - `className` are converts into `class`
  - you can call vars inside JSX with `{varName}`
  - component inside another component (just like vars: `{componentName}`)

## Todo

- Refs
  - No string refs, only functions

## Events

You're a big boy, you can create your events yourself.
