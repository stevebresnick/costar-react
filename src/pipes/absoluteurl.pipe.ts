import { Pipe, PipeTransform } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Pipe({name: 'absoluteurl'})
export class AbsoluteURLPipe implements PipeTransform {

  constructor(public cookies: CookieService) {}

  transform(value: string, args: string[]): any {
    if (!value || !this.cookies.get('url')) return value;

    return value.replace(/(href=\"|src=\")(\/[^"]*)/g, '$1' + this.cookies.get('url') + '$2');
  }

}
