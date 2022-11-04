import { Pipe, PipeTransform } from '@angular/core';
import { accountType } from '../../enums/account.enum';
import { cardType } from '../../enums/creditCard.enum';

@Pipe({
  name: 'cardPipe'
})
export class CardPipePipe implements PipeTransform {

  transform(value: cardType) {
    return cardType[value]
  }

}
