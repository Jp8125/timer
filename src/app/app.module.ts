import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownComponent } from './drop-down/drop-down.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { MatIconModule } from '@angular/material/icon';
import { InputCreateComponent } from './input-create/input-create.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer, userReducer } from './reducers/counter.reducer';
import { StoreComponent } from './store/store.component';
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    DropDownComponent,
 
    InputCreateComponent,
    FormCreateComponent,
    StoreComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatSidenavModule,
    MatListModule,
    MatIconModule,
    StoreModule.forRoot({ count: counterReducer ,user:userReducer})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
