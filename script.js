// Aguarda o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona o botão pelo ID
    const whatsappButton = document.getElementById('whatsapp-button');
    
    // Adiciona um "ouvinte" de clique ao botão
    whatsappButton.addEventListener('click', function(event) {
        
        // Previne o comportamento padrão do link (que é seguir o '#')
        event.preventDefault();
        
        // --- Configuração do WhatsApp ---
        const phoneNumber = '5561985095064'; // Número com código do país (55 para Brasil)
        const message = 'Olá! Gostaria de solicitar a elaboração de um contrato.';
        
        // Codifica a mensagem para ser usada em uma URL
        const encodedMessage = encodeURIComponent(message);
        
        // Monta a URL final da API do WhatsApp
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        
        // Abre a URL em uma nova aba do navegador
        window.open(whatsappURL, '_blank');
    });
});