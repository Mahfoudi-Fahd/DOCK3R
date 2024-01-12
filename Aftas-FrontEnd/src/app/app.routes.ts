import { Routes } from '@angular/router';
import { CompetitionComponent } from './components/competition/competition.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MemberComponent } from './components/member/member.component';
import { CompetitionDetailsComponent } from './components/competition-details/competition-details.component';
import { PodiumComponent } from './components/podium/podium.component';

export const routes: Routes = [
    { path: 'competitions', component: CompetitionComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'members', component: MemberComponent },
    { path: 'competition-details/:code', component: CompetitionDetailsComponent },
    { path: 'podium/:param', component: PodiumComponent },
];
