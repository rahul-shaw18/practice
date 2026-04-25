import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../api';

@Pipe({
  name: 'filterByRole',
})
export class FilterByRolePipe implements PipeTransform {
  transform(users: User[], role: string): User[] {
    console.log(role);
    return users.filter((user) => user.role.toLowerCase().includes(role.toLowerCase()));
  }
}
