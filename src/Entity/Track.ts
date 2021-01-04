import { v4 } from 'uuid'

export class Track {
  public readonly id: string
  public artista: string
  public musica: string
  public add: string

  constructor(props: Omit<Track, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
