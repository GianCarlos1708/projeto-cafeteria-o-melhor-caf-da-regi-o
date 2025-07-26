/* Lógica de programação
[x] saber quando o usuario clicou no botão
[x] mudar o posicionamento do modal
[x] Fazer a máscara ficar visível
[x] quando clicar na máscara, fechar o modal
[ ] Rolagem suave para os links de navegação
*/
function toggleMenu() {
    const nav = document.getElementById('menu-nav');
    nav.classList.toggle('show');
}

function mostrarModal() {
    const modal = document.querySelector('.modal');
    const mascaraModal = document.querySelector('.mascara-modal');
    modal.classList.add('show');
    mascaraModal.classList.add('show');
}

function esconderModal() {
    const modal = document.querySelector('.modal');
    const mascaraModal = document.querySelector('.mascara-modal');
    modal.classList.remove('show');
    mascaraModal.classList.remove('show');
}

// Nova função para rolagem suave
document.querySelectorAll('#menu-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Fecha o menu móvel se estiver aberto
            const nav = document.getElementById('menu-nav');
            if (nav.classList.contains('show')) {
                nav.classList.remove('show');
            }

            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.header').offsetHeight, // Ajusta para a altura do header fixo
                behavior: 'smooth'
            });
        }
    });
});

