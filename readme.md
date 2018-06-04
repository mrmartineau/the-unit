<h1 align="center">
  the-unit

[![npm](https://img.shields.io/npm/v/the-unit.svg?style=flat-square)](https://www.npmjs.com/package/the-unit)
![](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat-square)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

</h1>

> Parses a number and unit string, and returns the unit used

Unlike some similar packages (see below), this package only returns the unit for a particular string; it is intentionally simple.

## Install

```sh
$ yarn add the-unit
$ npm install --save-dev the-unit
```

## Import

```js
import unit from "the-unit";
```

## Use

```js
unit("16px"); // 'px'
```

## Size

[98 Bytes](https://bundlephobia.com/result?p=the-unit)

## Similar packages

- [parse-unit](https://github.com/mattdesl/parse-unit)
- [unit-parse](https://github.com/centagon/unit-parse)
- [parseunit](https://github.com/ThomWright/parseunit)
- [get-unit](https://github.com/arthurvr/get-unit)

## Licence

MIT &copy; [Zander Martineau](https://zander.wtf)
