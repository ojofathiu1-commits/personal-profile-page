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
    const modalLink = document.getElementById("modalLink");
    modalLink.href = projects[index].link;
    // open in the same tab and save current scroll position so the project page
    // can navigate back to where the user clicked
    modalLink.onclick = function(e) {
        e.preventDefault();
        try {
            sessionStorage.setItem('lastProjectScroll', String(window.scrollY || window.pageYOffset || 0));
            sessionStorage.setItem('lastProject', projects[index].link);
        } catch (err) {
            // ignore sessionStorage errors
        }
        window.location.href = projects[index].link;
    };
    modalLink.removeAttribute('target');
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
        github: "https://github.com/ojofathiu1-commits",
        linkedin: "https://www.linkedin.com/in/ojo-fathiu-6b034b3b7/"
    };
    window.open(urls[platform], "_blank");
}

showProjects();

// If we have a saved scroll position (from opening a project), restore it when
// index.html loads again. This is used when a project redirects back here.
try {
    const saved = sessionStorage.getItem('lastProjectScroll');
    if (saved !== null) {
        window.scrollTo(0, parseInt(saved, 10) || 0);
        sessionStorage.removeItem('lastProjectScroll');
        sessionStorage.removeItem('lastProject');
    }
} catch (err) {
    // ignore
}
