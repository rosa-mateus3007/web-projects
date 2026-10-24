// ==========================================
// PAINEL DE CONTROLE (Chamada das funções)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    EfeitoParalax();
});

// ==========================================
// 1. Efeito Paralax
// ==========================================
function EfeitoParalax() {
    const titulo = document.getElementById('titulo');
    const cidade = document.getElementById('cidade');
    const arvore = document.getElementById('arvore');
    const estrelas = document.getElementById('estrelas');
    let ticking = false;

    function updateParallax() {
        const value = window.scrollY;
        
        titulo.style.transform = `translateX(${value * 2}px)`;
        cidade.style.transform = `translateY(${value * 0.8}px)`;
        arvore.style.transform = `translateY(${value * 0.5}px)`;
        estrelas.style.transform = `translateY(${value * 0.2}px)`;
        
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}
