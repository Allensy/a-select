import { SelectContainerComponent } from './select-container/select-container.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MySelectComponent } from './select-container/my-select/my-select.component';
import { MyOptionComponent } from './select-container/my-option/my-option.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectContainerComponent,
    MySelectComponent,
    MyOptionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
