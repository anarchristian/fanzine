document.addEventListener('DOMContentLoaded', () => {
    const homeContainer = document.getElementById('homeContainer');
    const homeAnchor = document.getElementById('homeAnchor');
    
    homeAnchor.addEventListener('click', async (e) => {
        e.preventDefault();
        
        // Inicia a animação
        homeContainer.classList.add('expanded');
        homeAnchor.classList.add('hidden');
        
        // Espera a animação terminar
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Carrega o conteúdo
        try {
            const response = await fetch('./editions/last.html');
            const html = await response.text();
            homeContainer.innerHTML = html;
            homeContainer.classList.add('visible');
        } catch (error) {
            console.error('Erro ao carregar o conteúdo:', error);
        }
    });
});