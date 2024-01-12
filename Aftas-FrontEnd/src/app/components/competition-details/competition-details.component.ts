import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CCompetition, Competition } from '../../models/competition';
import { CMember, Member } from '../../models/member';
import { CompetitionService } from '../../services/competition/competition.service';
import { MemberService } from '../../services/member/member.service';
import { FormsModule } from '@angular/forms';
import { CRanking, Ranking } from '../../models/ranking';
import { FishService } from '../../services/fish/fish.service';
import { Fish } from '../../models/fish';
import { CHunting, Hunting } from '../../models/hunting';
import { NotificationsComponent } from '../notifications/notifications.component';
import { NotificationsService } from '../../services/notification/notifications.service';
import { initFlowbite, initModals } from 'flowbite';
import { Flowbite } from '../../config/flowbite';

@Component({
  selector: 'app-competition-details',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, NotificationsComponent],
  templateUrl: './competition-details.component.html',
  styleUrl: './competition-details.component.scss',
})
@Flowbite()
export class CompetitionDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private competitionService: CompetitionService,
    private memberService: MemberService,
    private fishService: FishService,
    private notificationService: NotificationsService
  ) {}
  selectedMember: string = '';
  competition: Competition = new CCompetition();
  members: Member[] = [];
  code: string = '';
  allMembers: Member[] = [];
  fishes: Fish[] = [];
  ranking: Ranking = new CRanking();
  toSave: Hunting = new CHunting();

  ngOnInit(): void {
    this.code = this.route.snapshot.params['code'];
    this.competitionService
      .getCompetition(this.code)
      .subscribe((data: Competition) => {
        this.competition = data;
      });

    this.competitionService
      .getParticipants(this.code)
      .subscribe((data: Member[]) => {
        this.members = data;
      });

    this.competitionService
      .getMembersNotInCompetition(this.code)
      .subscribe((data: Member[]) => {
        this.allMembers = data;
      });

    this.getFishes();
  }

  registerMember() {
    console.log(this.selectedMember);
    this.ranking.competitionCode = this.code;
    this.ranking.memberNumber = this.selectedMember;
    this.competitionService.addParticipant(this.ranking).subscribe(
      (data) => {
        this.ngOnInit();
        this.notificationService.show(['Member added successfully'], 'success');
      },
      (HttpErrorResponse) => {
        if (HttpErrorResponse.error.message)
          this.notificationService.show(
            [HttpErrorResponse.error.message],
            'error'
          );
        else
          this.notificationService.show(
            HttpErrorResponse.error.errors,
            'error'
          );
      }
    );
  }

  getFishes() {
    this.fishService.getFishes().subscribe((data: any) => {
      this.fishes = data;
    });
  }

  onSubmit() {
    this.toSave.competitionId = this.competition.id;
    this.toSave.memberId = this.selectedMember;
    this.toSave.fishId = this.toSave.fishId;
    this.toSave.weightOfFish = this.toSave.weightOfFish;
    this.competitionService.addHunting(this.toSave).subscribe(
      (data) => {
        console.log(data);
        this.notificationService.show(
          ['Competition added successfully'],
          'success'
        );
      },
      (HttpErrorResponse) => {
        if (HttpErrorResponse.error.message)
          this.notificationService.show(
            [HttpErrorResponse.error.message],
            'error'
          );
        else
          this.notificationService.show(
            HttpErrorResponse.error.errors,
            'error'
          );}
    );
  }

  selectMember(member: Member) {
    if (member.id) this.selectedMember = member.id;
  }
}
