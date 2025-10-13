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
});

// Menu hambúrguer
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const accessibilityFAB = document.querySelector('.accessibility-fab');
    const accessibilityMenu = document.querySelector('.accessibility-menu');
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const highContrastButton = document.getElementById('high-contrast');
    const body = document.body;
    const allTextElements = document.querySelectorAll('p, h1, h2, h3, a, li, span, button'); // Seleciona todos os elementos de texto

    let currentFontSize = 1; // 1 representa 100% do tamanho da fonte original

    // Alterna a visibilidade do menu de acessibilidade
    accessibilityFAB.addEventListener('click', () => {
        accessibilityMenu.classList.toggle('active');
    });

    // Aumentar o tamanho da fonte
    increaseFontButton.addEventListener('click', () => {
        if (currentFontSize < 1.5) { // Limite para o aumento
            currentFontSize += 0.1;
            updateFontSizes();
        }
    });

    // Diminuir o tamanho da fonte
    decreaseFontButton.addEventListener('click', () => {
        if (currentFontSize > 0.7) { // Limite para a diminuição
            currentFontSize -= 0.1;
            updateFontSizes();
        }
    });

    // Alternar o modo de alto contraste
    highContrastButton.addEventListener('click', () => {
        body.classList.toggle('high-contrast');
    });

    function updateFontSizes() {
        allTextElements.forEach(element => {
            // Obtém o tamanho da fonte original computado se não tivermos um
            if (!element.dataset.originalFontSize) {
                element.dataset.originalFontSize = window.getComputedStyle(element).fontSize;
            }
            
            const originalSize = parseFloat(element.dataset.originalFontSize);
            element.style.fontSize = `${originalSize * currentFontSize}px`;
        });
    }
});
