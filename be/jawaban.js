const jsTopics = {
  "1": {
      topic: "Apa itu JavaScript?",
      explanation: "JavaScript adalah bahasa pemrograman tingkat tinggi, dinamis, dan diinterpretasi. Ini adalah salah satu teknologi inti dari World Wide Web, di samping HTML dan CSS. JavaScript memungkinkan interaktivitas pada halaman web dan dapat digunakan untuk pengembangan front-end maupun back-end."
  },
  "2": {
      topic: "Apa itu async/await?",
      explanation: "async/await adalah fitur JavaScript yang memungkinkan penulisan kode asynchronous yang terlihat dan berperilaku seperti kode synchronous. 'async' digunakan untuk mendeklarasikan fungsi asynchronous, sedangkan 'await' digunakan untuk menunggu Promise diselesaikan. Ini membuat penanganan operasi asynchronous lebih mudah dibaca dan dipelihara."
  },
  "3": {
      topic: "Apa itu closure dalam JavaScript?",
      explanation: "Closure adalah kombinasi fungsi dan lingkungan leksikal di mana fungsi tersebut didefinisikan. Ini memungkinkan fungsi untuk mengakses variabel dari lingkup induknya bahkan setelah lingkup induk selesai dieksekusi. Closure sangat berguna untuk data privasi dan pembuatan fungsi pabrik."
  },
  "4": {
      topic: "Apa perbedaan antara let, const, dan var?",
      explanation: "var memiliki lingkup fungsi atau global dan dapat dideklarasikan ulang. let memiliki lingkup blok dan tidak dapat dideklarasikan ulang dalam lingkup yang sama. const juga memiliki lingkup blok, tidak dapat dideklarasikan ulang, dan nilainya tidak dapat diubah setelah inisialisasi (meskipun untuk objek, propertinya masih bisa dimodifikasi)."
  }
};

module.exports = { jsTopics };