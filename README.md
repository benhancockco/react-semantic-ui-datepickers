# 📆 react-semantic-ui-datepickers

Datepickers built with [Semantic UI for React][semantic-ui-react] and [Dayzed][dayzed]

[![version][version-badge]][package]
[![MIT License][license-badge]][license]
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors)

## Overview

Semantic UI for React doesn't have a datepicker and the best solutions don't fit with its design. This library tries to solve this problem providing a component that can act as a basic or range datepicker.

It supports most props of Form.Input and Dayzed components. Check the [supported props section](#supported-props) for more information.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [Supported Props](#supported-props)
  - [Own Props](#own-props)
  - [Form.Input Props](#forminput-props)
  - [Dayzed Props](#dayzed-props)
- [Customization](#customization)
- [Roadmap](#roadmap)
- [Contributors](#contributors)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install --save react-semantic-ui-datepickers
```

```
yarn add react-semantic-ui-datepickers
```

> This package also depends on `react`, `prop-types`, and `semantic-ui-react`. Please make sure you have them installed as well.

## Usage

```jsx
import React from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import ptLocale from 'react-semantic-ui-datepickers/dist/locales/pt-BR';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

const AppWithBasic = ({ onDateChange }) => (
  <SemanticDatepicker onDateChange={onDateChange} />
);

const AppWithRangeAndInPortuguese = ({ onDateChange }) => (
  <SemanticDatepicker
    locale={ptLocale}
    onDateChange={onDateChange}
    type="range"
  />
);
```

More examples [here](https://react-semantic-ui-datepickers.now.sh).

## Supported Props

### Own Props

| property             | type                | required | default                                                                                                 | description                                                                                                     |
| -------------------- | ------------------- | -------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| clearable            | boolean             | no       | true                                                                                                    | Allows the user to clear the value                                                                              |
| format               | string              | no       | 'YYYY-MM-DD'                                                                                            | Specifies how the date will be formatted using the [date-fns' format](https://date-fns.org/v1.29.0/docs/format) |
| keepOpenOnClear      | boolean             | no       | false                                                                                                   | Keeps the datepicker open (or opens it if it's closed) when the clear icon is clicked                           |
| keepOpenOnSelect     | boolean             | no       | false                                                                                                   | Keeps the datepicker open when a date is selected                                                               |
| locale               | object              | no       | [en-US](https://github.com/arthurdenner/react-semantic-ui-datepickers/blob/master/src/locales/en-US.js) | Object with the labels to be used on the library PS: Feel free to submit PR's with more locales!                |
| onDateChange         | function            | yes      |                                                                                                         | Callback fired when the value changes                                                                           |
| type                 | string              | no       | basic                                                                                                   | Type of input to render. Available options: 'basic' and 'range'                                                 |
| filterDate           | function            | no       | () => true                                                                                              | Function that receives each date and returns a boolean to indicate whether it is enabled or not                 |
| selected             | Date, arrayOf(Date) | no       |                                                                                                         | Default date selected                                                                                           |
| pointing             | string              | no       | 'left'                                                                                                  | Location to render the component around input. Available options: 'left', 'right', 'top left', 'top right'      |
| clearOnSameDateClick | boolean             | no       | true                                                                                                    | Controls whether the datepicker's state resets if the same date is selected in succession.                      |

### Form.Input Props

- disabled
- error
- icon
- iconPosition
- id
- label
- loading
- name
- placeholder
- size
- transparent
- readOnly

### Dayzed Props

- date
- maxDate
- minDate
- firstDayOfWeek
- showOutsideDays
- selected

## Customization

In order to customize the elements, you can override the styles of the classes below:

- clndr-cell
- clndr-cell-today
- clndr-cell-inrange
- clndr-cell-disabled
- clndr-cell-selected
- clndr-cell-other-month

> If you think this way of customizing is not a good idea, feel free to open a issue suggesting something else. This was the simplest solution I thought.

## Roadmap

- Improve accessibility
  > @donysukardi did some work on accessibility in the BaseDatePicker, but I couldn't get it working correcly. Feel free to help on this!
- Add more tests (including e2e)
  > The current threshold is pretty useless 😕
- Add TypeScript definitions (or migrate to TypeScript)

> Feel free to open issues and/or create PRs to improve other aspects of the library!

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/arthurdenner"><img src="https://avatars0.githubusercontent.com/u/13774309?v=4" width="100px;" alt="Arthur Denner"/><br /><sub><b>Arthur Denner</b></sub></a><br /><a href="https://github.com/arthurdenner/react-semantic-ui-datepickers/commits?author=arthurdenner" title="Code">💻</a> <a href="#design-arthurdenner" title="Design">🎨</a> <a href="https://github.com/arthurdenner/react-semantic-ui-datepickers/commits?author=arthurdenner" title="Documentation">📖</a> <a href="#example-arthurdenner" title="Examples">💡</a> <a href="#ideas-arthurdenner" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://twitter.com/elaurent_"><img src="https://avatars2.githubusercontent.com/u/10627086?v=4" width="100px;" alt="Emerson Laurentino"/><br /><sub><b>Emerson Laurentino</b></sub></a><br /><a href="https://github.com/arthurdenner/react-semantic-ui-datepickers/commits?author=emersonlaurentino" title="Code">💻</a> <a href="#ideas-emersonlaurentino" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/arthurdenner/react-semantic-ui-datepickers/commits?author=emersonlaurentino" title="Documentation">📖</a> <a href="#example-emersonlaurentino" title="Examples">💡</a></td>
    <td align="center"><a href="https://github.com/lucasnsborges"><img src="https://avatars2.githubusercontent.com/u/12260334?v=4" width="100px;" alt="Lucas Borges"/><br /><sub><b>Lucas Borges</b></sub></a><br /><a href="https://github.com/arthurdenner/react-semantic-ui-datepickers/commits?author=lucasnsborges" title="Code">💻</a> <a href="https://github.com/arthurdenner/react-semantic-ui-datepickers/commits?author=lucasnsborges" title="Documentation">📖</a> <a href="#example-lucasnsborges" title="Examples">💡</a></td>
    <td align="center"><a href="https://github.com/rallysson"><img src="https://avatars3.githubusercontent.com/u/12260324?v=4" width="100px;" alt="Rallysson"/><br /><sub><b>Rallysson</b></sub></a><br /><a href="https://github.com/arthurdenner/react-semantic-ui-datepickers/commits?author=rallysson" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/saminnet"><img src="https://avatars1.githubusercontent.com/u/5575369?v=4" width="100px;" alt="Samin Yousefnia"/><br /><sub><b>Samin Yousefnia</b></sub></a><br /><a href="#translation-saminnet" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/jalavosus"><img src="https://avatars3.githubusercontent.com/u/5103026?v=4" width="100px;" alt="James J. Alavosus"/><br /><sub><b>James J. Alavosus</b></sub></a><br /><a href="https://github.com/arthurdenner/react-semantic-ui-datepickers/commits?author=jalavosus" title="Code">💻</a> <a href="#example-jalavosus" title="Examples">💡</a> <a href="#ideas-jalavosus" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://medium.com/@jaaaco"><img src="https://avatars3.githubusercontent.com/u/450726?v=4" width="100px;" alt="Jakub Wietrzyk"/><br /><sub><b>Jakub Wietrzyk</b></sub></a><br /><a href="https://github.com/arthurdenner/react-semantic-ui-datepickers/commits?author=jaaaco" title="Code">💻</a> <a href="#translation-jaaaco" title="Translation">🌍</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## LICENSE

MIT

[license-badge]: https://img.shields.io/npm/l/react-semantic-ui-datepickers.svg?style=flat-square
[license]: https://github.com/arthurdenner/react-semantic-ui-datepickers/blob/master/LICENSE
[version-badge]: https://img.shields.io/npm/v/react-semantic-ui-datepickers.svg?style=flat-square
[package]: https://www.npmjs.com/package/react-semantic-ui-datepickers
[dayzed]: https://github.com/deseretdigital/dayzed
[semantic-ui-react]: https://react.semantic-ui.com/
