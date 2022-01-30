import { NgModule } from '@angular/core';
import "@angular/compiler"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginServiceService } from './Auth/login-service.service';
import { DashlayoutComponent } from './Dashboard/dashlayout/dashlayout.component';
import { HomedashComponent } from './Dashboard/homedash/homedash.component';
import { AdduserComponent } from './Dashboard/adduser/adduser.component';
import { UserlistComponent } from './Dashboard/userlist/userlist.component';
import { TransactionsComponent } from './Dashboard/transactions/transactions.component';
import { GenerateComponent } from './Dashboard/generate/generate.component';
import { TransferComponent } from './Dashboard/transfer/transfer.component';
import { MainComponent } from './Home/main/main.component';
import { CricketComponent } from './Home/cricket/cricket.component';
import { DataserviceService } from './Dashboard/dataservice.service';
import { GenHistoryComponent } from './Dashboard/gen-history/gen-history.component';
import { InplayComponent } from './Home/inplay/inplay.component';
import { MultimediaComponent } from './Home/multimedia/multimedia.component';
import { SoccerComponent } from './Home/soccer/soccer.component';
import { TennisComponent } from './Home/tennis/tennis.component';
import { CasinoComponent } from './Home/casino/casino.component';
import { HorseracingComponent } from './Home/horseracing/horseracing.component';
import { LotteryComponent } from './Home/lottery/lottery.component';
import { SidebarComponent } from './Home/sidebar/sidebar.component';
import { FullmarketComponent } from './fullmarket/fullmarket.component';
import { UserItemComponent } from './Dashboard/user-item/user-item.component';
import { CricketDetailComponent } from './Detailed/cricket-detail/cricket-detail.component';
import { RightbarComponent } from './Home/rightbar/rightbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashlayoutComponent,
    HomedashComponent,
    AdduserComponent,
    UserlistComponent,
    TransactionsComponent,
    GenerateComponent,
    TransferComponent,
    MainComponent,
    CricketComponent,
    GenHistoryComponent,
    InplayComponent,
    MultimediaComponent,
    SoccerComponent,
    TennisComponent,
    CasinoComponent,
    HorseracingComponent,
    LotteryComponent,
    SidebarComponent,
    FullmarketComponent,
    UserItemComponent,
    CricketDetailComponent,
    RightbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxBootstrapIconsModule.pick(allIcons)


  ],
  exports: [UserItemComponent, UserlistComponent],
  providers: [LoginServiceService, DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
