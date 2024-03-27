import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddBookComponent } from "./components/add-book/add-book.component";
import { BookDeteilComponent } from "./components/book-deteil/book-deteil.component";
import { BookListComponent } from "./components/book-list/book-list.component";
import { BookLoginComponent } from "./components/book-login/book-login.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'add-book' },
    { path: 'book-list',component: BookListComponent },
    { path: 'add-book',component: AddBookComponent },
    { path: 'edit-book/:id',component: BookDeteilComponent },
    { path: 'book-login',component: BookLoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}