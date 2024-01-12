import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PodiumService } from '../../services/podium/podium.service';

@Component({
  selector: 'app-podium',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.scss'
})
export class PodiumComponent {

  topThree: any[] = [];

  constructor(private podiumService: PodiumService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.podiumService.getPodium(this.route.snapshot.params['param']).subscribe((data: any) => {
      console.log(data);
      this.topThree = data;

    });
  }



}
