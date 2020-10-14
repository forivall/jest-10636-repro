This is a reproduction of [facebook/jest#10636](https://github.com/facebook/jest/issues/10636).

```
» yr jest
yarn run v1.22.4
$ /Users/forivall/code/repos/jest-10636-repro/node_modules/.bin/jest
 FAIL  test/index.test.ts
  ● Test suite failed to run

    /Users/forivall/code/repos/jest-10636-repro/test/index.test.ts: babel-plugin-jest-hoist: The module factory of `jest.mock()` is not allowed to reference any out-of-scope variables.
    Invalid variable access: ReturnType
    Whitelisted objects: Array, ArrayBuffer, Boolean, DataView, Date, Error, EvalError, Float32Array, Float64Array, Function, Generator, GeneratorFunction, Infinity, Int16Array, Int32Array, Int8Array, InternalError, Intl, JSON, Map, Math, NaN, Number, Object, Promise, Proxy, RangeError, ReferenceError, Reflect, RegExp, Set, String, Symbol, SyntaxError, TypeError, URIError, Uint16Array, Uint32Array, Uint8Array, Uint8ClampedArray, WeakMap, WeakSet, arguments, expect, jest, require, undefined, global, clearInterval, clearTimeout, setInterval, setTimeout, queueMicrotask, clearImmediate, setImmediate.
    Note: This is a precaution to guard against uninitialized mock variables. If it is ensured that the mock is required lazily, variable names prefixed with `mock` are permitted.

      at invariant (node_modules/babel-plugin-jest-hoist/build/index.js:12:11)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |
----------|---------|----------|---------|---------|-------------------
Jest: Coverage data for ./src/**/actions/*.{ts,tsx} was not found.
Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        3.319 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
