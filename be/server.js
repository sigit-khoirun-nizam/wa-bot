const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { handleCommand, showMainMenu } = require('./komen');

// Buat client baru
const client = new Client({
    authStrategy: new LocalAuth()
});

// Objek untuk menyimpan state pengguna
const userStates = {};

// Event ketika QR code siap untuk di-scan
client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
    console.log('QR RECEIVED', qr);
});

// Event ketika client siap
client.on('ready', () => {
    console.log('Client is ready!');
});

// Event ketika pesan diterima
client.on('message', async (message) => {
    const senderNumber = message.from;
    const userInput = message.body.trim().toLowerCase();

    // Inisialisasi state pengguna jika belum ada
    if (!userStates[senderNumber]) {
        userStates[senderNumber] = { state: 'MAIN' };
        message.reply("Selamat datang di WhatsApp Bot!\n\n" + showMainMenu());
        return;
    }

    const userState = userStates[senderNumber];

    if (userInput === 'menu') {
        userState.state = 'MAIN';
        message.reply(showMainMenu());
        return;
    }

    handleCommand(message, userInput, userState);
});

// Inisialisasi client
client.initialize();