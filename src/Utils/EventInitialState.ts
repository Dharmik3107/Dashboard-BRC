export interface EventType {
    id:string,
    title: string,
    start: Date,
    end:Date,
    offer: number,
    date: Date
  }

export const initialEventState:EventType = {
    id : "",
    title : "",
    start : new Date(),
    end: new Date(),
    offer: 0,
    date: new Date()
  }