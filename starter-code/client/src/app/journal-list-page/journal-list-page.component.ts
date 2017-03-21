import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetServiceService } from '../get-service.service';

@Component({
  selector: 'app-journal-list-page',
  templateUrl: './journal-list-page.component.html',
  styleUrls: ['./journal-list-page.component.css']
})
export class JournalListPageComponent implements OnInit {

  journals: Array<Object> = [];
  errorMessage: String = '';

  constructor(private myJournalService: GetServiceService) { }



  ngOnInit() {
    this.myJournalService.getList()
    .then((journalList) => {
      this.journals = journalList;
    })
    .catch((err) => {
      this.errorMessage = 'There was an error. Try Again'
    });
  }

}
