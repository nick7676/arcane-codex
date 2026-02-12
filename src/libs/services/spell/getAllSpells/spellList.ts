export interface SpellsResults {
    count: number
    results: Result[]
  }
  
  export interface Result {
    index: string
    name: string
    level: number
    url: string
  }
  