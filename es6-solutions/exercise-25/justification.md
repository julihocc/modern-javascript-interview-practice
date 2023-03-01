**It depends on the truthy/falsy value of v**

Examples of truthy values in JavaScript (which will be coerced to true in boolean contexts, and thus execute the if block):[^1]

[^1]: https://developer.mozilla.org/en-US/docs/Glossary/Truthy

```javascript
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```



The following table provides a complete list of JavaScript falsy values:[^2]

[^2]: https://developer.mozilla.org/en-US/docs/Glossary/Falsy

| Value                                                        | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| `false`                                                      | The keyword [`false`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#future_reserved_keywords_in_older_standards). |
| `0`                                                          | The [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) zero (so, also `0.0`, etc., and `0x0`). |
| `-0`                                                         | The [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) negative zero (so, also `-0.0`, etc., and `-0x0`). |
| `0n`                                                         | The [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) zero (so, also `0x0n`). Note that there is no [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) negative zero — the negation of `0n` is `0n`. |
| `""`, `''`, ````                                             | Empty [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) value. |
| [null](https://developer.mozilla.org/en-US/docs/Glossary/Null) | [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null) — the absence of any value. |
| [undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined) | [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) — the primitive value. |
| [NaN](https://developer.mozilla.org/en-US/docs/Glossary/NaN) | [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) — not a number. |
| [`document.all`](https://developer.mozilla.org/en-US/docs/Web/API/Document/all) | Objects are falsy if and only if they have the [[[IsHTMLDDA\]]](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot) internal slot. That slot only exists in [`document.all`](https://developer.mozilla.org/en-US/docs/Web/API/Document/all) and cannot be set using JavaScript. |