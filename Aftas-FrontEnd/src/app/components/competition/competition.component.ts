import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CompetitionService } from '../../services/competition/competition.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Competition , CCompetition } from '../../models/competition';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { NotificationsService } from '../../services/notification/notifications.service';
import { NotificationsComponent } from '../notifications/notifications.component';
import { Flowbite } from '../../config/flowbite';

@Component({
  selector: 'app-competition',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent,FormsModule,NotificationsComponent],
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.scss'
})

@Flowbite()
export class CompetitionComponent {
httpClient = inject(HttpClient);
currentDate:any = new Date();

competitions: Competition[] = [];

toSave: Competition = new CCompetition();

isFutureDate(date: Date | undefined): boolean {
  if (!date) return false;
  
  const currentDate = new Date();
  date = new Date(date);
  currentDate.setHours(1, 0, 0, 0);
  return date.getTime() > currentDate.getTime();
}

constructor(private competitionService: CompetitionService,private router:Router, private notificationService: NotificationsService,) { }

ngOnInit(): void {
  this.competitionService.getCompetitions().subscribe((data: Competition[]) => {
    this.competitions = data;
  }
  );

}

  onSubmit() {
    this.competitionService.addCompetition(this.toSave).subscribe(
      (data) => {
        console.log(data);
        this.notificationService.show(["Competition added successfully"], "success")
      },   
  (HttpErrorResponse) => {
    console.log( HttpErrorResponse.error)
    this.notificationService.show(HttpErrorResponse.error.errors, "error")

    })
  }


  showCompetitionDetails(competition: Competition) {
    this.router.navigate(['competition-details', competition.competitionCode]);
  }
} 
