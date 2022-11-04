import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AccountPipePipe } from "./pipes/account-pipes/account.pipe.pipe";
import { CardPipePipe } from "./pipes/card-pipes/card.pipe.pipe";
import { UserStatusPipe } from "./pipes/users-pipes/user.status.pipe";



@NgModule({
    declarations: [
        NavbarComponent,
        UserStatusPipe,
        AccountPipePipe,
        CardPipePipe
    ],
    exports: [
        NavbarComponent,
        UserStatusPipe,
        AccountPipePipe,
        CardPipePipe
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})

export class CoreModule {}