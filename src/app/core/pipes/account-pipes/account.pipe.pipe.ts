import { Pipe, PipeTransform } from '@angular/core';
import { accountType } from '../../enums/account.enum';

@Pipe({
  name: 'accountPipe'
})
export class AccountPipePipe implements PipeTransform {

  transform(value: accountType) {
    return accountType[value]
  }

}
