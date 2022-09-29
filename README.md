<img alt="Vangware's Parsers" src="./logo.svg" height="128" />

![Build Status][build-status-badge] ![Coverage][coverage-badge]
![License][license-badge] ![NPM Version][npm-version-badge]
![Open Issues][open-issues-badge]

👁️‍🗨️ Parsers without nonsense.

Instead of throwing or returning values like `NaN`, the parsers in this library
either return the expected parsed value or `undefined` (making use of the
[Maybe](https://github.com/vangware/types/blob/main/lib/Maybe.ts) type).

## Usage

### 📦 Node

First:

```bash
# If you use npm
npm install @vangware/parsers
# If you use pnpm
pnpm add @vangware/parsers
# If you use yarn
yarn add @vangware/parsers
```

And then:

```typescript
import { parseDecimal } from "@vangware/parsers";

parseDecimal("101"); // 101
parseDecimal("nope"); // undefined
```

### 🦕 Deno

```typescript
import { parseDecimal } from "https://cdn.skypack.dev/@vangware/parsers?dts";

parseDecimal("101"); // 101
parseDecimal("nope"); // undefined
```

## Documentation

Documentation is available [HERE][documentation]. It is auto-generated with
[typedoc][typedoc] based on the JSDocs and the types in the source. It shouldn't
be necessary to read this. Code editors like [VS Code][vscode] integrate the
documentation in the UI.

## Changelog

Changelog can be found [HERE][changelog].

## Test coverage

Test coverage can be found [HERE][coverage].

<!-- Reference -->

[build-status-badge]:
	https://img.shields.io/github/workflow/status/vangware/parsers/Test%20&%20Coverage.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/parsers/actions
[changelog]: https://github.com/vangware/parsers/blob/main/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/parsers.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://coveralls.io/github/vangware/parsers
[coverage]: https://coveralls.io/github/vangware/parsers
[documentation]: https://parsers.vangware.com
[license-badge]:
	https://img.shields.io/npm/l/@vangware/parsers.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/parsers/blob/main/LICENSE
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/parsers.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://npm.im/@vangware/parsers
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/parsers.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/parsers/issues
[typedoc]: https://typedoc.org/
[vscode]: https://code.visualstudio.com/
