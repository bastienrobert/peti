# PetiJS

Very small library to render JSX.

> Inspired by React, of course.

## How it works

[babel-plugin-transform-react-jsx](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx) will turn JSX into ~~React~~ Peti function calls.

> TODO

## Features

- Turn JSX into function
  - `className` are converts into `class`
  - you can call vars inside JSX with `{varName}`

## Todo

- Event management
  - Turn some args into addEventListener functions
  - Functions in vars
- Refs
  - No string refs, only functions
- Props (?)
