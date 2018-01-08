import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
/*
* THIS PIPE IS FOR HIGHLIGHTING THE LETTERS AS USER TYPES
 */
export class HighlightPipe implements PipeTransform {

  transform(value: any, search): any {
    const pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    return search ? value.replace(new RegExp(pattern, 'gi'), (match) => `<span class="highlight">${match}</span>`) : value;
  }

}
