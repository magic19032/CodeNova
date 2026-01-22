const ProjetBasculement = document.querySelector('.ProjetBasculement');
const Recto = document.querySelector('.ProjetRecto');
const Verso = document.querySelector('.ProjetVerso');

ProjetBasculement.onclick = function() {
    if (ProjetBasculement.textContent === '>') {
        ProjetBasculement.textContent = '<';
        Recto.style.display = 'inline';
        Verso.style.display = 'inline';
    }
    else if (ProjetBasculement.textContent === '<') {
        ProjetBasculement.textContent = '>';
        Recto.style.display = 'none';
        Verso.style.display = 'none';
    }
};
const Logo = document.querySelector('.Logo');
Logo.onclick = function() {
    window.location.href = 'index.html';

}
