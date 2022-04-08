async function getProjects(){ 
    const data = await fetch('https://api.github.com/users/100Nexten/repos').then(data => data.json())
    let projects = []
    data.map((repo) =>{
        repo.has_pages && projects.push(repo)
    })
    return projects;
}

function displayProjects(projects){
    projects.forEach((project)=> {
        var card =
        `<li>
            <a href="http://christianlima.live/${project.name}"}>
                <h3>${project.name}</h3>
            </a>
        </li>
        ` 
        document.getElementById('project-list').innerHTML += `${card}`
    })    
}

getProjects().then(projects => displayProjects(projects))
