import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt',
})
export class ExcerptPipe implements PipeTransform {
  transform(content: string) {
    const postSummary = content.replace(/(<([^>]+)>)/gi, '');
    if (postSummary.length > 300) {
      return postSummary.substring(0, 300) + ' [...]';
    } else {
      return postSummary;
    }
  }
}
