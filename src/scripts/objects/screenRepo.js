const screenRepo = {
  userProfile: document.querySelector(".profile-data"),
  renderRepo(user) {
    let respositoriesItens = ""
    const existRepositories = user.repositories.length > 0

    const languageItens = user.repositoriesLanguage.map((objeto) => Object.keys(objeto))
    const mainLanguage = languageItens.map((array) => array[0])
       
    user.repositories.forEach((repo, index) => {

      respositoriesItens += `<li>
                                <a href="${repo.html_url}" target="_blank">${repo.name}
                                  <div class="set-icons">
                                    <span class="i-pos">🍴${repo.forks_count}</span>
                                    <span class="i-pos">⭐${repo.stargazers_count}</span>
                                    <span class="i-pos">👀${repo.watchers_count}</span>
                                    <span class="i-pos">${mainLanguage[index] ? "👨‍💻 " + mainLanguage[index] : "Sem linguagem"}</span>
                                  </div>
                                </a>
                              </li>`
    })
    
    if (!existRepositories) respositoriesItens = `<li>
                                                    <h3>
                                                      <b>Este usuário não possui repositórios</b>
                                                    </h3>
                                                  </li>`

    this.userProfile.innerHTML += `<div class="repositories section">
                                      <h2>Repositórios</h2>
                                      <ul>${respositoriesItens}</ul>
                                    </div>`

  },
}

export { screenRepo }