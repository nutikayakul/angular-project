import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDeteilComponent } from './components/book-deteil/book-deteil.component';

const routes: Routes = [
  { path: 'book-list', component: BookListComponent },
  { path: 'add-book', component: AddBookComponent }, 
  { path: 'add-detail', component: BookDeteilComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
