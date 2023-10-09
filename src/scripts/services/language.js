import { baseUrlRepo } from "../variables.js"

async function getLanguage(userName, user) {
  
  const endPoints = user.repositories.map(
    (repositorio) => `${baseUrlRepo}/${userName}/${repositorio.name}/languages`
  )
  const resolvers = await Promise.all(
    endPoints.map((url) => fetch(url).then((result) => result.json()))
  )

  return resolvers
}

export { getLanguage }
