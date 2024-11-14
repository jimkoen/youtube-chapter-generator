export interface YouTubeTranscriptItem {
  text: string,
  start: number,
  duration: number
}

export type YouTubeTranscript = YouTubeTranscriptItem[]

//append only
export function combineTranscriptItem(item : YouTubeTranscriptItem, itemToAppend : YouTubeTranscriptItem) : YouTubeTranscriptItem{
  const endOfSecondItem = itemToAppend.start + itemToAppend.duration
  const newDuration = endOfSecondItem - item.start

  const newItem : YouTubeTranscriptItem = {
    text : `${item.text} ${itemToAppend.text}`,
    start: item.start,
    duration: newDuration
  }
  return newItem
}


export function reduceTranscript(t : YouTubeTranscript, combinationAmount : number) : YouTubeTranscript{
  const reducedTranscript : YouTubeTranscript = []
  t.reduce((accumulator, currentValue, currentIndex, array) : YouTubeTranscriptItem => {
    if(currentIndex % combinationAmount === 0 && currentIndex !== 0){
      reducedTranscript.push(accumulator)
      return currentValue
    } else if(currentIndex === array.length -1){
      reducedTranscript.push(combineTranscriptItem(accumulator, currentValue))
      return currentValue
    } else {
      return combineTranscriptItem(accumulator, currentValue)
    }
  })
  return reducedTranscript
}

