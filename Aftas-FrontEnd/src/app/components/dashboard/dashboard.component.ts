import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MemberComponent } from '../member/member.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CompetitionComponent } from '../competition/competition.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink,MemberComponent,SidebarComponent,CompetitionComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
