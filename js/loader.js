function loadTemplate(id, url) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

window.addEventListener('DOMContentLoaded', () => {
  loadTemplate('header-placeholder', '../templates/header.html');
  loadTemplate('footer-placeholder', '../templates/footer.html');
});