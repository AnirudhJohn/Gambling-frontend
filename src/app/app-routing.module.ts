import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { DashlayoutComponent } from './Dashboard/dashlayout/dashlayout.component';
import { HomedashComponent } from './Dashboard/homedash/homedash.component';
import { AdduserComponent } from './Dashboard/adduser/adduser.component';
import { UserlistComponent } from './Dashboard/userlist/userlist.component';
import { TransactionsComponent } from './Dashboard/transactions/transactions.component';
import { GenerateComponent } from './Dashboard/generate/generate.component';
import { TransferComponent } from './Dashboard/transfer/transfer.component';
import { MainComponent } from './Home/main/main.component';
import { CricketComponent } from './Home/cricket/cricket.component';
import { InplayComponent } from './Home/inplay/inplay.component';
import { MultimediaComponent } from './Home/multimedia/multimedia.component';
import { SoccerComponent } from './Home/soccer/soccer.component';
import { TennisComponent } from './Home/tennis/tennis.component';
import { CasinoComponent } from './Home/casino/casino.component';
import { HorseracingComponent } from './Home/horseracing/horseracing.component';
import { LotteryComponent } from './Home/lottery/lottery.component';
import { SidebarComponent } from './Home/sidebar/sidebar.component';
const routes: Routes = [
  // 1. Login
  {path: '', component:LoginComponent},
  
  // 2. Login
  {path: 'login', component:LoginComponent},
  // 3. Dashboard
  {path: 'dash', component: DashlayoutComponent,children: [
    {
      path: '', component: HomedashComponent
    },
    {
      path: 'adduser', component: AdduserComponent
    },
    
    {
      path: 'userlist', component: UserlistComponent
    },
    {
      path: 'transactions', component: TransactionsComponent
    },
    {
      path: 'generatetokens', component: GenerateComponent
    },
    {
      path: 'transfer', component: TransferComponent
    }
  ]},
  // 4. Home 
  {path: 'home', component:MainComponent,children: [
    {
      path: '', component: SidebarComponent

    },
   {
      path: 'cricket', component: CricketComponent

    },
    {
      path: 'inplay', component: InplayComponent

    },
    {
      path: 'multimarkets', component: MultimediaComponent

    },
    {
      path: 'soccer', component: SoccerComponent

    },
    {
      path: 'tennis', component: TennisComponent

    },
    {
      path: 'casino', component: CasinoComponent

    },
    {
      path: 'horseracing', component: HorseracingComponent

    },
    {
      path: 'lottery', component: LotteryComponent

    }
  ]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
