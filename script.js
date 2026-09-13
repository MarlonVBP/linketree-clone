/**
 * ARQUIVO DE CONFIGURAÇÃO
 * Edite os valores abaixo para customizar o seu perfil.
 */
const CONFIG = {
    profile: {
        name: "@FullStack-Force",
        bio: "Equipe dedicada e criativa, criando\nsoluções inovadoras que fazem a diferença.",
        avatarUrl: "assets/images/logo.png", 
        portfolioUrl: "https://seusite.com/portfolio", // Coloque o link do seu portfólio aqui
    },
    links: [
        {
            title: "Maria Anjos",
            url: "https://www.linkedin.com/in/maria-anjos-9820a12a4/", 
            iconUrl: "assets/images/maria-anjos.png",
        },
        {
            title: "Marlon Passos",
            url: "https://www.linkedin.com/in/marlon-passos-410b34229/", 
            iconUrl: "assets/images/marlon-passos.png",
        }
    ],
    projects: [
        {
            title: "Fintocar",
            description: "Sistema inovador de Financiamento e consórcio de Veículos.",
            url: "https://fintocar.com/"
        },
        {
            title: "Fintocar - Cotação",
            description: "Ferramenta rápida e inteligente para cotações de carros.",
            url: "https://fintocar.com/cotacar"
        },
        {
            title: "Linka Negócios",
            description: "Plataforma completa para alavancar os seus negócios.",
            url: "https://linkanegocios.com.br/"
        }
    ],
    // Nome que aparece no banner inferior
    promoName: "marlon_passos"
};

/**
 * LÓGICA DE RENDERIZAÇÃO
 * Não é necessário alterar a menos que queira mudar a estrutura.
 */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Popula os dados do perfil
    document.getElementById("profile-title").textContent = CONFIG.profile.name;
    // O bio usa replace para converter quebras de linha (\n) em <br> no HTML
    document.getElementById("profile-bio").innerHTML = CONFIG.profile.bio.replace(/\n/g, '<br>');
    document.getElementById("profile-avatar").src = CONFIG.profile.avatarUrl;

    // 2. Popula os links
    const linksContainer = document.getElementById("links-container");
    
    CONFIG.links.forEach(link => {
        const linkEl = document.createElement("a");
        linkEl.href = link.url;
        linkEl.className = "link-card";
        // Adiciona target="_blank" para abrir em nova aba
        linkEl.target = "_blank";
        linkEl.rel = "noopener noreferrer";
        
        linkEl.innerHTML = `
            <img src="${link.iconUrl}" alt="Avatar de ${link.title}" class="link-icon">
            <span class="link-title">${link.title}</span>
        `;
        
        linksContainer.appendChild(linkEl);
    });

    // 2.5 Popula os Projetos
    const projectsContainer = document.getElementById("projects-container");
    if (projectsContainer && CONFIG.projects) {
        CONFIG.projects.forEach(project => {
            const projectEl = document.createElement("a");
            projectEl.href = project.url;
            projectEl.className = "project-card";
            projectEl.target = "_blank";
            projectEl.rel = "noopener noreferrer";
            
            projectEl.innerHTML = `
                <div class="project-info">
                    <span class="project-title">${project.title}</span>
                    <span class="project-desc">${project.description}</span>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.5; flex-shrink: 0; margin-left: 12px;">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            `;
            projectsContainer.appendChild(projectEl);
        });
    }

    // 2.7 Animação de Reveal do Portfólio
    const portfolioBtn = document.querySelector('.portfolio-btn');
    const projectsWrapper = document.getElementById('projetos-ancora');

    if (portfolioBtn && projectsWrapper) {
        portfolioBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o salto instantâneo do link
            
            // Alterna a classe que mostra os projetos
            projectsWrapper.classList.toggle('show-projects');
            
            // Pequeno delay para a animação do CSS iniciar antes do scroll acompanhar
            setTimeout(() => {
                projectsWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 150);
        });
    }

    // 3. Popula o banner inferior
    const promoNameEl = document.getElementById("promo-name");
    if (promoNameEl) {
        promoNameEl.textContent = CONFIG.promoName;
    }

    // 4. Adiciona efeitos interativos (Opcional)
    const shareBtn = document.querySelector('button[aria-label="Share"]');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: CONFIG.profile.name,
                    text: CONFIG.profile.bio,
                    url: window.location.href,
                }).catch(console.error);
            } else {
                alert("Copie o link: " + window.location.href);
            }
        });
    }

    // 5. Partículas / Faíscas
    const createSparks = () => {
        const sparkCount = 35; // Quantidade de bolinhas na tela
        for (let i = 0; i < sparkCount; i++) {
            const spark = document.createElement("div");
            spark.classList.add("spark");
            
            // Randomiza tamanho, posição e velocidade
            const size = Math.random() * 4 + 2; // de 2px a 6px
            spark.style.width = `${size}px`;
            spark.style.height = `${size}px`;
            spark.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
            spark.style.animationDuration = `${Math.random() * 8 + 4}s`; // de 4s a 12s para subir
            spark.style.animationDelay = `${Math.random() * 5}s`; // Atraso para não subirem todas juntas
            
            document.body.appendChild(spark);
        }
    };
    createSparks();
});
