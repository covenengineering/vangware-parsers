<img id="logo" alt="Parsers by Vangware" src="./logo.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]

👁️‍🗨️ Parsers without nonsense.

Instead of throwing or returning values like `NaN`, the parsers in this library
either return the expected parsed value or `undefined` (making use of the
[Maybe](https://types.vangware.com/types/Maybe.html) type).

## Usage

### 📦 Node

Install `@vangware/parsers` as a dependency:

```bash
pnpm add @vangware/parsers
# or
npm install @vangware/parsers
# or
yarn add @vangware/parsers
```

Import it and use it:

```typescript
import { parseDecimal } from "@vangware/parsers";

parseDecimal("101"); // 101
parseDecimal("nope"); // undefined
```

### 🦕 Deno

Import `@vangware/parsers` using the `npm:` prefix, and use it directly:

```typescript
import { parseDecimal } from "npm:@vangware/parsers";

parseDecimal("101"); // 101
parseDecimal("nope"); // undefined
```

### 🌎 Browser

Import `@vangware/parsers` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { parseDecimal } from "https://esm.sh/@vangware/parsers";

	parseDecimal("101"); // 101
	parseDecimal("nope"); // undefined
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]: https://github.com/vangware/parsers/blob/main/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/parsers.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://coveralls.io/github/vangware/parsers
[coverage]: https://coveralls.io/github/vangware/parsers
[documentation]: https://parsers.vangware.com
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@vangware/parsers.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/parsers/blob/main/LICENSE
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/parsers.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://npm.im/@vangware/parsers
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/parsers.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/parsers/issues
