let projects = [
    { name: "Calculator", desc: "A functional calculator built with HTML, CSS, and JavaScript for basic arithmetic operations", link: "calculator.html" },
    { name: "Note App", desc: "A simple note-taking application built with HTML, CSS, and JavaScript", link: "note.html" },
    { name: "Password Generator", desc: "An interactive password generator that asks 3 questions and suggests a secure password based on user responses", link: "password.html" },
    { name: "To-Do List", desc: "A simple to-do list application for adding tasks and marking them as completed", link: "todo.html" },
    { name: "Rock Paper Scissors", desc: "A classic rock paper scissors game built with HTML, CSS, and JavaScript.", link: "rock-paper-scissors.html" }
];

function showProjects() {
    let list = document.getElementById("projectList");
    list.innerHTML = "";
    
    for (let i = 0; i < projects.length; i++) {
        let item = document.createElement("div");
        item.className = "project-item";
        item.onclick = function() { openModal(i); };
        
        let name = document.createElement("div");
        name.className = "project-name";
        name.textContent = projects[i].name;
        
        let desc = document.createElement("div");
        desc.className = "project-desc";
        desc.textContent = projects[i].desc;
        
        item.appendChild(name);
        item.appendChild(desc);
        list.appendChild(item);
    }
}

function openModal(index) {
    document.getElementById("modalTitle").textContent = projects[index].name;
    document.getElementById("modalDesc").textContent = projects[index].desc;
    document.getElementById("modalLink").href = projects[index].link;
    document.getElementById("projectModal").style.display = "block";
}

function closeModal(event) {
    if (!event || event.target.id === "projectModal" || event.target.className === "close-btn") {
        document.getElementById("projectModal").style.display = "none";
    }
}

function openSocial(platform) {
    let urls = {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
    };
    window.open(urls[platform], "_blank");
}

showProjects();
