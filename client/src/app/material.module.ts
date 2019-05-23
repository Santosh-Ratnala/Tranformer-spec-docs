import { NgModule } from '@angular/core';

import {
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
      MatExpansionModule,
      MatFormFieldModule,
      MatSelectModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
      MatExpansionModule,
      MatFormFieldModule,
      MatSelectModule
    ]
})
export class MaterialModule { }
