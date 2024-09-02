const { jsTopics } = require('./jawaban');

function showMainMenu() {
    return `
Menu Utama:
1. Info JavaScript
2. Bantuan
3. Tentang Bot
0. Keluar

Ketik nomor menu yang Anda pilih atau ketik 'menu' untuk kembali ke menu utama kapan saja.
    `;
}

function showJSTopicsMenu() {
    let menuText = "Pilih topik JavaScript:\n\n";
    for (let key in jsTopics) {
        menuText += `${key}. ${jsTopics[key].topic}\n`;
    }
    menuText += "\n0. Kembali ke Menu Utama";
    return menuText;
}

function handleCommand(message, input, userState) {
    switch (userState.state) {
        case 'MAIN':
            handleMainMenu(message, input, userState);
            break;
        case 'JS_TOPICS':
            handleJSTopics(message, input, userState);
            break;
        default:
            message.reply("Maaf, terjadi kesalahan. Kembali ke menu utama.\n\n" + showMainMenu());
            userState.state = 'MAIN';
    }
}

function handleMainMenu(message, input, userState) {
    switch (input) {
        case '1':
            userState.state = 'JS_TOPICS';
            message.reply(showJSTopicsMenu());
            break;
        case '2':
            message.reply("Untuk menggunakan bot ini, cukup ketik nomor menu yang Anda inginkan. Ketik 'menu' kapan saja untuk kembali ke menu utama.");
            break;
        case '3':
            message.reply("Bot ini adalah chatbot WhatsApp sederhana yang memberikan informasi tentang JavaScript.");
            break;
        case '0':
            message.reply("Terima kasih telah menggunakan WhatsApp Bot. Sampai jumpa!");
            delete userStates[message.from];
            break;
        default:
            message.reply("Pilihan tidak valid. Silakan pilih nomor yang tersedia.\n\n" + showMainMenu());
    }
}

function handleJSTopics(message, input, userState) {
    if (input === '0') {
        userState.state = 'MAIN';
        message.reply(showMainMenu());
        return;
    }

    if (jsTopics[input]) {
        const topic = jsTopics[input];
        message.reply(`${topic.topic}\n\n${topic.explanation}\n\n${showJSTopicsMenu()}`);
    } else {
        message.reply("Pilihan tidak valid. Silakan pilih nomor yang tersedia.\n\n" + showJSTopicsMenu());
    }
}

module.exports = { handleCommand, showMainMenu };