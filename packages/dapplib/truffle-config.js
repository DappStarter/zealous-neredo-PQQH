require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney climb force ten fire note ridge purity grace casino slot gather'; 
let testAccounts = [
"0xfaf431ade1c7a738de886fcb441afe855c0a0601f0c751f82d39d89373687356",
"0xeb29399e0e0d63dd4bb803f79fe6277d97d9ad22302752c5ae2da44fc7262460",
"0x0477bf7d0913a4190eabfd157bbcaa787e61495570ca1af054225478f21f4cc1",
"0xf14d44adccb8c30d9bcb34dbe002773482e00479729785629ccca33cff60e1de",
"0x6e1d3968c8e4c619afc6ec4c40d66fed84d52b888a1a684e411ebfa692c2f94b",
"0x21529bc46297dbdcd5805debc855811f0c08e7feff73371d959b3c9f6e48a604",
"0x16c877b5b1ce6ce942d44973f9f4b6e8c6c480322d58b24cc85b17069ab8746d",
"0x25f53dc1d37cc19e7f11aa1835bc3c981937e96bf622020432d42e6b97785519",
"0x16c70c01cfe24b937244cfdef60422e9966dcdb526514c3d57311369cb372009",
"0x37c3f4b733d44cc9344cbef2fd73a33e8815d412a8cb34f0cb97b8a69d19777e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

