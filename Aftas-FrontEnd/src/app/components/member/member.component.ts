import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MemberService } from '../../services/member/member.service';
import { CMember, Member } from '../../models/member';
import { NotificationsService } from '../../services/notification/notifications.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationsComponent } from '../notifications/notifications.component';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Flowbite } from '../../config/flowbite';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,NotificationsComponent,ReactiveFormsModule],
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss'
})

@Flowbite()
export class MemberComponent implements OnInit{
  httpClient = inject(HttpClient);
  toSave: Member = new CMember();

  searchControl = new FormControl();


  constructor(private memberService: MemberService,private router:Router, private notificationService: NotificationsService) { }
  members: Member[] = [];

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((data: Member[]) => {
      console.log(data);
      this.members = data;
    }
    );
  
    this.searchControl.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      if (searchTerm.length <= 0)
        this.memberService.getMembers().subscribe((data: Member[]) => {
            this.members = data;
          });
      else
        this.memberService.searchByCriteria(searchTerm).subscribe((data: Member[]) => {
            this.members = data;
          });
    });
  }


  onSubmit() {
    this.memberService.addMember(this.toSave).subscribe(
      (data) => {
        console.log(data);
        this.notificationService.show(["Competition added successfully"], "success")
      },   
  (HttpErrorResponse) => {
    console.log( HttpErrorResponse.error)
    this.notificationService.show(HttpErrorResponse.error.errors, "error")

    })
  }

  
}
