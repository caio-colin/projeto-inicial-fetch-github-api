import { baseUrlUser } from "../variables.js"

async function getEvents(userName) {
  const response = await fetch(`${baseUrlUser}/${userName}/events`)
  return await response.json()
}

export { getEvents }
