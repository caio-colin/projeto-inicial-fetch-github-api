import { eventsQuantity } from "../variables.js"

const screenEvent = {
  userProfile: document.querySelector(".profile-data"),
  renderEvents(user) {
    const eventsSelection = this.filterEvent(user) 
    let eventsItens = ""

    eventsSelection.forEach((event) => {
      eventsItens += `<li><b>${event.repo.name}</b> - ${event.payload.commits ? event.payload.commits[0].message : `Repositório Criado em ${event.created_at}`}</li>`
    })

    if (!eventsSelection.length > 0) eventsItens = `<li>
                                                      <h3>
                                                        <b>Este usuário não possui eventos</b>
                                                      </h3>
                                                    </li>`

    this.userProfile.innerHTML += `<div class="eventos section">
                                    <h2>Eventos</h2>
                                    <ul>${eventsItens}</ul>
                                  </div>`
  },
  filterEvent(user){
    const eventsWithPushEvent = user.events.filter(
      (object) => object.type === "PushEvent" || object.type === "CreateEvent"
    )
    const slicedEvents = eventsWithPushEvent.slice(0, eventsQuantity)
    return slicedEvents
  }
}

export { screenEvent }
