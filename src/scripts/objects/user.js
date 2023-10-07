const user = {
  avatarUrl: "",
  name: "",
  bio: "",
  unerName: "",
  followers: "",
  following: "",
  repositories: [],
  events: [],
  setInfo(gitHubUser) {
    this.avatarUrl = gitHubUser.avatar_url
    this.name = gitHubUser.name
    this.bio = gitHubUser.bio
    this.userName = gitHubUser.login
    this.followers = gitHubUser.followers
    this.following = gitHubUser.following
  },
  setRepositories(repositories) {
    this.repositories = repositories
  },
  setEvents(gitEvents) {  
    this.events = gitEvents     
  },
}
export { user }
