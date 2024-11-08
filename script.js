// Dados das atividades (exemplo)
const activities = [
    {
        title: "Calculadora em JavaScript",
        description: "Uma calculadora simples desenvolvida em JavaScript com operações básicas.",
        link: "https://github.com/usuario/calculadora-js"
    },
    {
        title: "Página de Login",
        description: "Página de login responsiva usando HTML e CSS com validação em JavaScript.",
        link: "https://github.com/usuario/login-page"
    },
    {
        title: "Lista de Tarefas",
        description: "Aplicação de lista de tarefas com armazenamento local em JavaScript.",
        link: "https://github.com/usuario/todo-list"
    },
    // Adicione mais atividades conforme necessário
];

// Função para exibir a lista de atividades
function displayActivities() {
    const activityList = document.getElementById('activityList');
    activityList.innerHTML = '';
    
    activities.forEach((activity, index) => {
        const card = document.createElement('div');
        card.className = 'activity-card';
        card.innerText = activity.title;
        card.onclick = () => openModal(index);
        activityList.appendChild(card);
    });
}

// Função para abrir o modal com os detalhes da atividade
function openModal(index) {
    const activity = activities[index];
    document.getElementById('activityTitle').innerText = activity.title;
    document.getElementById('activityDescription').innerText = activity.description;
    document.getElementById('activityLink').href = activity.link;
    
    document.getElementById('activityModal').style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('activityModal').style.display = 'none';
}

// Função para pesquisar atividades
function searchActivities() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const filteredActivities = activities.filter(activity =>
        activity.title.toLowerCase().includes(query)
    );
    
    const activityList = document.getElementById('activityList');
    activityList.innerHTML = '';

    filteredActivities.forEach((activity, index) => {
        const card = document.createElement('div');
        card.className = 'activity-card';
        card.innerText = activity.title;
        card.onclick = () => openModal(index);
        activityList.appendChild(card);
    });
}

// Exibir atividades ao carregar a página
window.onload = displayActivities;
