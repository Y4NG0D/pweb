// Dados das atividades (exemplo)
const activities = [
    {
        title: "Projeto 1 - Projeto Piloto",
        description: "Sistema Cad Web com Django e Vercel, utilizando Python",
        link: "https://piloto-iota.vercel.app"
    },
    {
        title: "Projeto 2 - A definir",
        description: "A definir descricao",
        link: "https://github.com/usuario/login-page"
    },
    {
        title: "Projeto 3 - A definir",
        description: "A definir descricao",
        link: "https://github.com/usuario/todo-list"
    },
    {
        title: "Projeto 4 - A definir",
        description: "A definir descricao",
        link: "https://github.com/usuario/todo-list"
    },
    {
        title: "Projeto 5 - A definir",
        description: "A definir descricao",
        link: "https://github.com/usuario/todo-list"
    },
    {
        title: "Projeto 6 - A definir",
        description: "A definir descricao",
        link: "https://github.com/usuario/todo-list"
    },
    // Adicione mais atividades conforme necessário
];

// Função para exibir a lista de atividades
function displayActivities() {
    const activityList = document.getElementById('activityList');
    activityList.innerHTML = '';
    
    activities.forEach(activity => {
        const card = document.createElement('div');
        card.className = 'activity-card';
        card.innerText = activity.title;
        card.onclick = () => openModal(activity);
        activityList.appendChild(card);
    });
}

// Função para abrir o modal com os detalhes da atividade
function openModal(activity) {
    document.getElementById('activityTitle').innerText = activity.title;
    document.getElementById('activityDescription').innerText = activity.description;
    document.getElementById('activityLink').href = activity.link;
    
    document.getElementById('activityModal').style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('activityModal').style.display = 'none';
}

// Função para alternar entre modo claro e modo noturno
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelectorAll('.activity-card').forEach(card => card.classList.toggle('dark-mode'));
    document.querySelector('.modal-content').classList.toggle('dark-mode');
}

// Função para pesquisar atividades
function searchActivities() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const filteredActivities = activities.filter(activity =>
        activity.title.toLowerCase().includes(query)
    );
    
    const activityList = document.getElementById('activityList');
    activityList.innerHTML = '';

    filteredActivities.forEach(activity => {
        const card = document.createElement('div');
        card.className = 'activity-card';
        card.innerText = activity.title;
        card.onclick = () => openModal(activity);
        activityList.appendChild(card);
    });
}

// Exibir atividades ao carregar a página
window.onload = displayActivities;
