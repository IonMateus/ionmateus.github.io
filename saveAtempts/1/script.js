async function loadProjects() {
    try {
        const response = await fetch('projects.json');  // Caminho para o seu arquivo JSON
        const data = await response.json();  // Converte a resposta para JSON

        // Depois de carregar os dados, renderiza os projetos
        renderProjects(data);
    } catch (error) {
        console.error("Erro ao carregar os projetos:", error);
    }
}

// Função para renderizar os cards de projetos
function renderProjects(projects, filterDifficulty = 'all') {
    const projectsContent = document.getElementById('projectsContent');
    projectsContent.innerHTML = ''; // Limpa o conteúdo antes de adicionar novos projetos

    // Filtra os projetos de acordo com a dificuldade
    const filteredProjects = projects.filter(project => 
        filterDifficulty === 'all' || project.difficulty === parseInt(filterDifficulty)
    );

    // Gera o HTML para cada projeto
    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.difficulty = project.difficulty;
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${project.image}" class="w-full h-auto rounded-lg shadow-md">
                </div>
                <div class="card-back p-4">
                    <h2 class="text-xl font-semibold mb-2">${project.name}</h2>
                    <p class="text-sm text-gray-600 mb-2">${project.description}</p>
                    <i><b>${project.tech}</b></i><br>
                    <button onclick="window.open('${project.site}')" class="hoverable bg-blue-500 text-white py-2 px-4 rounded mt-2">Site</button>
                    <button onclick="window.open('${project.code}')" class="hoverable bg-gray-700 text-white py-2 px-4 rounded mt-2">Código</button>
                </div>
            </div>
        `;
        projectsContent.appendChild(card);
    });
}

// Chama a função para carregar os projetos do arquivo JSON
loadProjects();

// Evento para filtrar os projetos quando a dificuldade for alterada
document.getElementById('difficultyFilter').addEventListener('change', (event) => {
    const filterDifficulty = event.target.value;
    loadProjects(filterDifficulty);  // Recarrega os projetos com o filtro de dificuldade
});