# IPFS Fetch

Simple no-fuss Node.js module for fetching data from IPFS.

This is actively maintained, but isn't being developed with bells and whistles
that we don't internally need from it at this time (e.g. TypeScript type
declaration). If you need to add something, feel free to send a pull request.

Usage:

```
const {ipfsFetch} = require('ipfs-fetch');

const hash = 'QmakJxydkB5XNhE8gA5kTq9MpxaN4fsWcTp1EzwdcYNVip';
const buf = await ipfsFetch(hash);
console.log(buf.toString());
```
