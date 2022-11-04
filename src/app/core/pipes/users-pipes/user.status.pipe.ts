import { Pipe, PipeTransform } from '@angular/core';
import { userStatus } from '../../enums/users.enum';

@Pipe({
  name: 'userStatus'
})
export class UserStatusPipe implements PipeTransform {

  transform(value: userStatus): unknown {
    return userStatus[value];
  }

}
