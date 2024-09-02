const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

class WhatsAppClient {
    constructor() {
        this.client = new Client({
            authStrategy: new LocalAuth(),
            puppeteer: {
                args: ['--no-sandbox'],
            }
        });

        this.initializeClient();
    }

    initializeClient() {
        this.client.on('qr', (qr) => {
            console.log('QR RECEIVED', qr);
            qrcode.generate(qr, { small: true });
        });

        this.client.on('ready', () => {
            console.log('Client is ready!');
        });

        this.client.on('authenticated', () => {
            console.log('Client is authenticated!');
        });

        this.client.on('auth_failure', (msg) => {
            console.error('Authentication failure:', msg);
        });

        this.client.on('disconnected', (reason) => {
            console.log('Client was disconnected:', reason);
        });
    }

    async initialize() {
        await this.client.initialize();
    }

    async sendMessage(to, message) {
        try {
            await this.client.sendMessage(to, message);
            console.log('Message sent successfully');
        } catch (error) {
            console.error('Failed to send message:', error);
        }
    }

    onMessage(callback) {
        this.client.on('message', callback);
    }
}

module.exports = WhatsAppClient;