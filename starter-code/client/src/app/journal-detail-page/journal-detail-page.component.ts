import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetServiceService } from '../get-service.service';



@Component({
  selector: 'app-journal-detail-page',
  templateUrl: './journal-detail-page.component.html',
  styleUrls: ['./journal-detail-page.component.css']
})
export class JournalDetailPageComponent implements OnInit {
  journal: Object;

  constructor(
    private myJournalService: GetServiceService,
    private myRoute: ActivatedRoute,
    private myNavigator: Router) { }

  ngOnInit() {
    this.myRoute.params.subscribe((params) => {
      this.getJournalDetails(params['id']);
    });
  }

  getJournalDetails(id){
    this.myJournalService.get(id)
    .then((theDetails) => {
      this.journal = theDetails
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
