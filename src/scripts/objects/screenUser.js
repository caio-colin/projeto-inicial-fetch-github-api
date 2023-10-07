const screenUser = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
                                    <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                    <div class="data">
                                      <h1>${user.name ?? "Não possui nome cadastrado"}</h1>
                                      <p>${user.bio ?? "Não possui bio cadastrada"}</p>
                                      <div class="followers">
                                        <img src="./src/img/followers-icon.svg" alt="followers icon" />
                                        <div>
                                          <p>Seguidores: ${user.followers} · Seguindo: ${user.following}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>`
  },
  renderNotFound(){
    this.userProfile.innerHTML = `<h3>Usuário não existe</h3>`
  },
}
export { screenUser }