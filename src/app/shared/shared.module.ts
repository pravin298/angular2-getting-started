import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ConvertToSpacesPipe } from './../shared/convert-to-spaces.pipe';
import { StarComponent } from './../shared/star.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	StarComponent,
  	ConvertToSpacesPipe
  ],
  exports: [
  	StarComponent,
  	CommonModule,
  	FormsModule,
	ConvertToSpacesPipe
  ]

})
export class SharedModule { }
