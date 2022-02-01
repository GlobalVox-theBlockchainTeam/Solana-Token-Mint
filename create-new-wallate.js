const web3 = require('@solana/web3.js');
const anchor = require("@project-serum/anchor");



async function createNewWallet() {
    let wallet = web3.Keypair.generate();
    console.log('Public Key ==> ', wallet.publicKey.toString());
    console.log('Secret Key ==> ', wallet.secretKey.toString());
    const connection = await new web3.Connection(
        'https://api.testnet.solana.com',
        'confirmed',
    );
    let airdropSignature = await connection.requestAirdrop(
        wallet.publicKey,
        web3.LAMPORTS_PER_SOL,
    );
    //wait for airdrop confirmation
    let signature = await connection.confirmTransaction(airdropSignature);
    console.log('Signature ==> ', signature);
}

// trasferSOL();

async function useWallet() {
    let userWallet = anchor.web3.Keypair.fromSecretKey(
        Buffer.from(
            // <Secret Key of the wallet>
        )
    );
    console.log('Public Key ==> ', userWallet.publicKey.toString());
    console.log('Secret Key ==> ', userWallet.secretKey.toString());
    const connection = await new web3.Connection(
        'https://api.testnet.solana.com',
        'confirmed',
    );
    console.log(await connection.getBalance(userWallet.publicKey));
}

useWallet();
