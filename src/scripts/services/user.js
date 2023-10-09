import { baseUrlUser } from "../variables.js"

async function getUser(userName) {
  const response = await fetch(`${baseUrlUser}/${userName}`) 
  return await response.json()
}

export { getUser }