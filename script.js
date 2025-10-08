document.addEventListener('DOMContentLoaded', () => {
    // Função para adicionar a classe 'active' quando o elemento entra na viewport
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Opcional: Para a observação depois que o elemento é revelado
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.2, // O card será revelado quando 20% dele estiver visível
        rootMargin: "0px 0px -50px 0px" // Inicia a observação um pouco antes da borda (50px antes do final)
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });

    // Se você tiver algum JavaScript para a navegação ou outros elementos, pode adicioná-lo aqui.
    // Exemplo de script que você tinha para o header (apenas como referência)
    // const navLinks = document.querySelectorAll('.nav-link');
    // navLinks.forEach(link => {
    //     link.addEventListener('click', function() {
    //         navLinks.forEach(nav => nav.classList.remove('active'));
    //         this.classList.add('active');
    //     });
    // });
});

// Menu hambúrguer
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});