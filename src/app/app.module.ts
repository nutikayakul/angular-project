import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser"; 

import { AppComponent } from "./app.component";
import { AddBookComponent } from "./components/add-book/add-book.component";
import { BookDeteilComponent } from "./components/book-deteil/book-deteil.component";
import { BookListComponent } from "./components/book-list/book-list.component";
import { BookLoginComponent } from "./components/book-login/book-login.component";

import { FormsModule, ReactiveFormsModule, FormControl, Validators   } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    declarations: [
        AppComponent,
        AddBookComponent,
        BookDeteilComponent,
        BookListComponent,
        BookLoginComponent,
        FormControl 
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }