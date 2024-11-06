import { Component, computed, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputSignalComponent } from './input-signal-title.component';

@Component({
    selector: 'app-example-inputs',
    standalone: true,
    imports: [
        InputSignalComponent,
        FormsModule, MatFormFieldModule, MatInputModule, MatDividerModule],
    templateUrl: './example-inputs.component.html',
})
export class ExampleInputsComponent {

    // Inputs
    username = model('Toni');
    surname = signal('Stark');
    fullname = computed(() => `${this.username()} ${this.surname()}`);


    // Component signal input
    searchInput = signal('');

    searchProduct(searchText: string): void {
        this.searchInput.set(searchText);
    }
}