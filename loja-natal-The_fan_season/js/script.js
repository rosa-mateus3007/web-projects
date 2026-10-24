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
    const dubaiText = document.getElementById('dubaitext');
    const burjkhalifa = document.getElementById('burjkhalifa');
    const building = document.getElementById('building');
    const stars = document.getElementById('stars');
    let ticking = false;

    function updateParallax() {
        const value = window.scrollY;
        
        dubaiText.style.transform = `translateX(${value * 2}px)`;
        burjkhalifa.style.transform = `translateY(${value * 0.8}px)`;
        building.style.transform = `translateY(${value * 0.5}px)`;
        stars.style.transform = `translateY(${value * 0.2}px)`;
        
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}
