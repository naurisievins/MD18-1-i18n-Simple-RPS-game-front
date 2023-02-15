export type SingleScore = {
  id: number
  player_weapon: string
  computer_weapon: string
  winner: string
}

export type SessionScore = {
  id: number
  player_score: number
  computer_score: number
  games: number
}

export type Results = {
  player: number
  computer: number
  games: number
}

export   type MutationSessionScore = {
  results: Results
  update: boolean
}