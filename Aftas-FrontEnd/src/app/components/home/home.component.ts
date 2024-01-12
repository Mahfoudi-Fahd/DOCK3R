import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CompetitionService } from '../../services/competition/competition.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Competition } from '../../models/competition';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
httpClient = inject(HttpClient);

competitions: Competition[] = [];

isFutureDate(date: Date): boolean {
  const currentDate = new Date();
  const competitionDate = new Date(date);
  return competitionDate > currentDate;
}

constructor(private competitionService: CompetitionService) { }

ngOnInit(): void {
  this.competitionService.getCompetitions().subscribe((data: Competition[]) => {
    this.competitions = data;
  }
  );
}






}
