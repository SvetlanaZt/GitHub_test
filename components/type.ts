
export interface IItem {
      login: string,
      id: number,
      node_id: string,
      avatar_url: string,
      gravatar_id: string,
      url: string,
      html_url: string,
      followers_url: string,
      following_url: string,
      gists_url: string,
      starred_url: string,
      subscriptions_url: string,
      organizations_url: string,
      repos_url: string,
      events_url: string,
      received_events_url: string,
      type: string,
      site_admin: boolean,
      score: number
}
export interface IUser {
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean,
  name: string,
  company: null,
  blog: string,
  location: string,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number,
  created_at: string,
  updated_at: string,
}

export interface IData { 
  total_count: number,
  incomplete_results: boolean,
  items: IItem[],
}
export interface IUsers {
  data: IItem[] | undefined,
  usersName: string,
  favourites: string[],

}