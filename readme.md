<h1 align="center">
  getunit

[![npm](https://img.shields.io/npm/v/getunit.svg?style=flat-square)](https://www.npmjs.com/package/getunit)
![](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat-square)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

</h1>

> Parses a number and unit string, and returns the unit used

Unlike some similar packages (see below), this package only returns the unit for a particular string; it is intentionally simple.

## Install

```sh
$ yarn add getunit
$ npm install --save-dev getunit
```

## Import

```js
import getunit from "getunit";
```

## Use

```js
getunit("16px"); // 'px'
```

## Size

[98 Bytes](https://bundlephobia.com/result?p=getunit)

## Similar packages

- [parse-unit](https://github.com/mattdesl/parse-unit)
- [unit-parse](https://github.com/centagon/unit-parse)
- [parseunit](https://github.com/ThomWright/parseunit)
- [get-unit](https://github.com/arthurvr/get-unit)

## Licence

MIT &copy; [Zander Martineau](https://zander.wtf)
