import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import { NotificationsService } from '../../services/notification/notifications.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgForOf
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {

  public messages : string[] = [];

  public type : 'success' | 'warning' | 'error' = 'success';

  constructor(private notificationService: NotificationsService) {}

  ngOnInit(){

    this.notificationService.notification$.subscribe(
      (notification) => {
        if(notification){
          this.messages = notification.messages;
          this.type = notification.type;
          setTimeout(() => this.closeNotification() , 6000 )
        }
      }
    )


  }

  closeNotification(){
    this.messages = [];
    this.type = 'success';
  }

}
