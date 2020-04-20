import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [MatButtonModule,MatCheckboxModule,MatToolbarModule,MatTabsModule,MatGridListModule,MatCardModule,MatTableModule],
    exports: [MatButtonModule,MatCheckboxModule,MatToolbarModule,MatTabsModule,MatGridListModule,MatCardModule,MatTableModule],
})
export class MaterialModule {}