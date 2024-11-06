import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-top-toolbar',
    standalone: true,
    imports: [RouterModule, MatToolbarModule, MatButtonModule, MatIconModule],
    templateUrl: './top-toolbar.component.html',
})
export class TopToolbarComponent { }