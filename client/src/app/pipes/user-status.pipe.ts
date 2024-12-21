import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatus',
})
export class UserStatusPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'T':
        return 'Terminated';
      case 'A':
        return 'Active';
      case 'I':
        return 'Inactive';
      default:
        return 'Unknown';
    }
  }
}