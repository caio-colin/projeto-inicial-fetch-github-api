import { eventsQuantity } from "../variables.js"

const screenEvent = {
  userProfile: document.querySelector(".profile-data"),
  renderEvents(user) {
    const eventsWithPushEvent = user.events.filter(object => object.type === "PushEvent")
    const eventsSelection = eventsWithPushEvent.slice(0, eventsQuantity)
    const existEvent = eventsSelection.length

    let eventsItens = ""

    eventsSelection.forEach((event) => {
      eventsItens += `<li><b>${event.repo.name}</b> - ${event.payload.commits[0].message}</li>`
    })

    if (!existEvent) eventsItens = `<li>
                                      <h3>
                                        <b>Este usuário não possui eventos</b>
                                      </h3>
                                    </li>`

    this.userProfile.innerHTML += `<div class="eventos section">
                                    <h2>Eventos</h2>
                                    <ul>${eventsItens}</ul>
                                  </div>`
  },
}

export { screenEvent }
