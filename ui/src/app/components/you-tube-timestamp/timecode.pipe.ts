import { Pipe, PipeTransform } from '@angular/core';

export interface timecode {
  h : number,
  m : number,
  s : number
}

function generateTimecode(t : number) : timecode{
  return {
    h : Math.floor(t / 3600),
    m : Math.floor(t % 3600 / 60),
    s : Math.floor(t % 60)
  }
}


@Pipe({
  name: 'timecode',
  standalone: true
})
export class TimecodePipe implements PipeTransform {

  transform(value: number): string {
    const tc = generateTimecode(value)
    if(tc.h > 0){
      return `${tc.h.toString()}:${tc.m.toString().padStart(2,'0')}:${tc.s.toString().padStart(2,'0')}`
    }else{
      return `${tc.m.toString()}:${tc.s.toString().padStart(2,'0')}`
    }
  }

}
