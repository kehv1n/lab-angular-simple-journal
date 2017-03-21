import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JournalDetailPageComponent } from './journal-detail-page/journal-detail-page.component';
import { JournalListPageComponent } from './journal-list-page/journal-list-page.component';

const routes: Routes = [
 {
   path: '',
   component: JournalListPageComponent
 },
 {
   path: 'journal/:id',
   component: JournalDetailPageComponent
 },

 {
   path: '**',
   redirectTo: ''
 }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
