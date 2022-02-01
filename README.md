<div align="center">
<h1>Strapi eslint-config</h1>
	
<p style="margin-top: 0;">Shared eslint configuration for strapi.</p>
	
<p>
  <a href="https://discord.strapi.io">
    <img src="https://img.shields.io/discord/811989166782021633?color=blue&label=strapi-discord" alt="Strapi Discord">
  </a>
  <a href="https://www.npmjs.org/package/@strapi-community/eslint-config">
    <img src="https://img.shields.io/npm/v/@strapi-community/eslint-config/latest.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.org/package/@strapi-community/eslint-config">
    <img src="https://img.shields.io/npm/dm/@strapi-community/eslint-config" alt="Monthly download on NPM" />
  </a>
</p>
</div>

## Table of Contents <!-- omit in toc -->

- [🚦 Current Status](#-current-status)
- [🖐 Installation](#-installation)
- [🚚 Admin Installation](#-admin-installation)
- [✨ Usage](#-usage)
- [Contributing](#contributing)
- [License](#license)

## 🚦 Current Status

This package is currently under development and should be consider **ALPHA** in terms of state. I/We are currently accepting contributions and/or dedicated contributors to help develop and maintain this package.

For more information on contributing please see [the contrib message below](#contributing).



## ✨ Installation


**1. Add plugin dependency**

```bash
yarn add -D eslint @strapi-community/eslint-config
```

**2. Add `.eslintrc` in the root of your project**

```json
{
  "extends": "@strapi-community"
}
```

> Work in both strapi plugins and strapi app.


## 🖐 Admin Installation


**1. Add plugin dependency**

```bash
yarn add -D eslint @strapi-community/eslint-config-admin
```

**2. Add `.eslintrc` in the `admin/src` directory**

```json
{
  "extends": "@strapi-community/admin"
}
```

> Work in both strapi admin plugins and strapi admin app.


## ✨ Usage


**1. Add `eslint` script in the `package.json` file**

```json
{
  "scripts": {
    "eslint": "eslint ."
  }
}
```

**2. Run `yarn eslint`**


## Contributing

I/We are actively looking for contributors, maintainers, and others to help shape this package. As this plugins sole purpose within the Strapi community is to be used by other developers and plugin maintainers to get fast responses time.

If interested please feel free to email the lead maintainer Sacha at: sacha@digisquad.io or ping `stf#3254` on Discord.

## License

See the [LICENSE](./LICENSE.md) file for licensing information.
