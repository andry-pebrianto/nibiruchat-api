const { htmlTemplateTop, htmlTemplateBottom } = require('./template');

const activateAccount = (link) => {
  const htmlContent = `
  <p>
    Anda menerima email ini karena Anda telah melakukan Registrasi Akun di Nibiru Chat.
    <br>
    Segera aktifkan akun Anda dengan click tombol di bawah ini.
  </p>
  
  <a href="${link}" style="color: white;" class="auth-button">Aktifkan Akun</a>
  
  <p>
    Jika Anda tidak merasa melakukan Registrasi Akun di Nibiru Chat, abaikan email ini.
    <br>
    Link alternatif: <a href="${link}">${link}</a>
  </p>
  

  <hr>
  
  <p>Copyright &copy; ${new Date().getFullYear()} Nibiru Chat - Developed with <span style="color: red !important;">❤️</span> by <a style="text-decoration: none;" href="https://github.com/andry-pebrianto" target="_blank">Andry Pebrianto</a> in Trenggalek</p>`;

  return htmlTemplateTop + htmlContent + htmlTemplateBottom;
};

module.exports = activateAccount;
