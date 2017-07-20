export interface User {
  id: number,
  nm: string,
  pp: string,
  tm: string
}

export interface UserAction {
  type: string
  payload?: any
}
