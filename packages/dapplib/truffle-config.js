require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strategy crawl rifle coconut install civil army genius'; 
let testAccounts = [
"0x31567e6065cc58b005f59ab92f68344487b280ee4e4789093055e9e8ed600e54",
"0x3493102f796d96ef6b0d3dab5576b9e18407c0220c36380f3fa215a5a92aba4e",
"0x05cc083eceaffb61eb7ed8a7079f364112706bfa80b9191fad0550db873258b8",
"0x2e66813c240cae89f97e0a49b75f4fd5cb3837b926ad0673cb041e17d29c0bf5",
"0xb148ded22f9f7582d8ec7f1bd35ddb38c371fcdba5aee9716791311dfce1bef4",
"0x77322e371a8e296c8a2ae546a709464396fbc47cc4b847ad082b241498fec3e9",
"0xa5c6b1525baaadefaf37a2ede3c30d223eb616242b21384b3de4be06ee0cbf05",
"0x34ac629f95a442181c42cc3f16d1827a43154c4bdb4d7bc33119b156c30f1993",
"0xfb7f4a323459f742a4b9f5f41391b9b4c5184c542ec38051d1a90a4d84fb85b3",
"0xe43ea502b341ffb56fdd804ab50be9113825a820ef4c443c20186a2d57d88334"
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

