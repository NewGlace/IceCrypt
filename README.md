<div align="center">
  <h1>IceCrypt</h1>
  <p>
    <a href="https://www.npmjs.com/package/IceCrypt"><img src="https://img.shields.io/npm/v/IceCrypt?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/IceCrypt"><img src="https://img.shields.io/npm/dt/IceCrypt?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/IceCrypt"><img src="https://nodei.co/npm/IceCrypt.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
</div>

# Table of contents

- [Installation](#installation)
- [Example Usage](#examples)

# Installation
```shContact
npm i icecrypt
```

# Examples
```js
const crypt = require('icecrypt'); //Define the IceCrypt module
```
#### Create/Use Token
```js
const { Client } = require('icecrypt'); //Define the IceCrypt module

const token = await Client.token();
// Once the token is generated, it must be saved, all encryption will be partially linked to this token.

const client = new Client(token);

```
#### enCrypt
```js
const enCryptedText = client.enCrypt("Your Text");
//RDYFTUKGYHIUJOI
```
#### deCrypt
```js
const deCryptedText = client.deCrypt("RDYFTUKGYHIUJOI");
```

# Discord
Join the [Discord](https://discord.gg/kH4X6MHu7T)