import { v4 } from 'uuid'

export class Track {
  public readonly id: string
  public artista: string
  public musica: string
  public add: string
  public trackId: string

  constructor(props: Omit<Track, 'id' | 'trackId'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
