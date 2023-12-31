import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js"
import { getEvents } from "./services/events.js"
import { getLanguage } from "./services/language.js"
import { user } from "./objects/user.js"
import { screenUser } from "./objects/screenUser.js"
import { screenEvent } from "./objects/screenEvent.js"
import { screenRepo } from "./objects/screenRepo.js"

document.getElementById("btn-search").addEventListener("click", () => {
  const userName = document.getElementById("input-search").value

  if (validateEmptyInput(userName)) return

  getUserData(userName)
})

document.getElementById("input-search").addEventListener("keyup", (e) => {
  const userName = e.target.value.trim()
  const key = e.which || e.keyCode
  const isEnterKeyPressed = key === 13

  if (isEnterKeyPressed) {
    if (validateEmptyInput(userName)) return
    getUserData(userName)
  }
})

async function getUserData(userName) {
  const userReponse = await getUser(userName)

  if (userReponse.message == "Not Found") {
    screenUser.renderNotFound()
    return
  }

  const repositoriesReponse = await getRepositories(userName)
  const eventsResponse = await getEvents(userName)

  user.setInfo(userReponse)
  user.setRepositories(repositoriesReponse)
  user.setEvents(eventsResponse)

  const languageReponse = await getLanguage(userName, user)
  user.setRepoLang(languageReponse)

  screenUser.renderUser(user)
  screenRepo.renderRepo(user)
  screenEvent.renderEvents(user)
}

function validateEmptyInput(userName) {
  if (userName.length === 0) {
    alert("Preencha o campo com o usuário do GitHub")
    return true
  }
}
