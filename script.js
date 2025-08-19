document.addEventListener('DOMContentLoaded', () => {

    // ==================== CONTROLE DO HEADER ====================
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('visible');
            } else {
                header.classList.remove('visible');
            }
        });
    }

    // ==================== CARREGAMENTO CENTRAL DE DADOS ====================
    async function loadDynamicData() {
        try {
            const [projectsRes, trajectoryRes] = await Promise.all([
                fetch('data/projects.json'),
                fetch('data/trajectory.json')
            ]);

            if (!projectsRes.ok || !trajectoryRes.ok) throw new Error('Network response failed.');

            const projects = await projectsRes.json();
            const trajectory = await trajectoryRes.json();

            renderTrajectory(trajectory);
            renderProjects(projects);
            
            initializeModal(projects);
            initializeShowMore(projects);

        } catch (error) {
            console.error('Failed to load dynamic data:', error);
        }
    }

    // ==================== RENDERIZAÇÃO DA TRAJETÓRIA ====================
    function renderTrajectory(data) {
        const container = document.getElementById('trajectory-content');
        if (!container) return;

        const educationHTML = `
            <h3 class="animate-on-scroll">Formação Acadêmica</h3>
            <div class="timeline animate-on-scroll">
                ${data.education.map(item => `
                    <div class="timeline-item">
                        <p class="timeline-degree">${item.degree}</p>
                        <p class="timeline-institution">${item.institution}</p>
                        <p class="timeline-period">${item.period}</p>
                        <p class="timeline-description">${item.description}</p>
                    </div>
                `).join('')}
            </div>
        `;

        const researchHTML = `
            <h3 class="animate-on-scroll">Pesquisa & Competições</h3>
            <div class="research-grid">
                ${data.research_and_competitions.map(item => `
                    <div class="research-card animate-on-scroll">
                        <img src="${item.imageUrl}" alt="${item.title}">
                        <div class="research-card-content">
                            <p class="research-category">${item.category}</p>
                            <h4 class="research-title">${item.title}</h4>
                            <p class="research-description">${item.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        container.innerHTML = educationHTML + researchHTML;
    }

    // ==================== RENDERIZAÇÃO DOS PROJETOS ====================
    function renderProjects(projects) {
        const grid = document.getElementById('projects-grid');
        if (!grid) return;
        
        grid.innerHTML = projects.map(project => `
            <div class="project__card animate-on-scroll" data-project-id="${project.id}">
                <div class="project__image-wrapper"><img src="${project.imageUrl}" alt="${project.title}" class="project__img"></div>
                <div class="project__content">
                    <h3 class="project__title">${project.title}</h3>
                    <p class="project__description">${project.shortDescription}</p>
                    <button class="project__button">Ver Detalhes</button>
                </div>
            </div>
        `).join('');
    }

    // ==================== FUNCIONALIDADE "MOSTRAR MAIS" ====================
    function initializeShowMore(projects) {
        const showMoreButton = document.getElementById('show-more-projects');
        const projectsGrid = document.getElementById('projects-grid');
        if(!showMoreButton || !projectsGrid) return;
        
        const cards = projectsGrid.querySelectorAll('.project__card');
        if (cards.length <= 6) { // Grid 3x2, ajustável se o layout mudar
            showMoreButton.style.display = 'none';
            projectsGrid.style.setProperty('--grid-max-height', '2000px'); // Mostra todos
            return;
        }

        // Timeout para garantir que o CSS foi aplicado e o offsetHeight é correto
        setTimeout(() => {
            const cardHeight = cards[0].offsetHeight;
            const gridGap = parseInt(window.getComputedStyle(projectsGrid).gap);
            const twoRowsHeight = (cardHeight * 2) + gridGap;
            projectsGrid.style.setProperty('--grid-max-height', `${twoRowsHeight}px`);

            showMoreButton.addEventListener('click', () => {
                projectsGrid.classList.toggle('expanded');
                showMoreButton.textContent = projectsGrid.classList.contains('expanded') ? 'Mostrar Menos' : 'Mostrar Mais';
            });
        }, 100);
    }

    // ==================== LÓGICA DO MODAL (CORRIGIDA COM EVENT DELEGATION) ====================
    function initializeModal(projects) {
        const projectsGrid = document.getElementById('projects-grid');
        const modal = document.getElementById('project-modal');
        if (!projectsGrid || !modal) return;
        
        // Listener único no container pai (Event Delegation)
        projectsGrid.addEventListener('click', (event) => {
            const card = event.target.closest('.project__card');
            if (!card) return; // Sai se o clique não foi em um card ou em um elemento filho

            const projectId = card.dataset.projectId;
            const project = projects.find(p => p.id === projectId);
            if (project) {
                openModalWithProject(project, modal);
            }
        });

        // Lógica de fechar o modal
        const closeModalBtn = modal.querySelector('.modal-close');
        const closeModal = () => {
            modal.classList.remove('is-open');
            document.body.style.overflow = 'auto';
        };
        if(closeModalBtn) {
            closeModalBtn.addEventListener('click', closeModal);
        }
        modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal(); });
    }

    function openModalWithProject(project, modal) {
        modal.querySelector('#modal-img').src = project.imageUrl;
        modal.querySelector('#modal-title').textContent = project.title;
        modal.querySelector('#modal-description').textContent = project.longDescription;
        modal.querySelector('#modal-tech-list').innerHTML = project.technologies.map(tech => `<li>${tech}</li>`).join('');
        
        const repoLink = modal.querySelector('#modal-repo-link');
        const liveLink = modal.querySelector('#modal-live-link');
        repoLink.href = project.repoUrl || '#';
        liveLink.href = project.liveUrl || '#';
        repoLink.style.display = project.repoUrl ? 'inline-flex' : 'none';
        liveLink.style.display = project.liveUrl ? 'inline-flex' : 'none';

        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    // ==================== INICIALIZAÇÃO E OBSERVERS ====================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    function observeElements() {
        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    }

    loadDynamicData().then(() => {
        // Após carregar os dados, observa os novos elementos dinâmicos
        observeElements();
    });
    // Observa os elementos estáticos que já existem na página
    observeElements();

    // Inicia o particles.js
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {"particles":{"number":{"value":40,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle"},"opacity":{"value":0.3,"random":true},"size":{"value":2,"random":true},"line_linked":{"enable":false},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false},"onclick":{"enable":false},"resize":true}},"retina_detect":true});
    }
});