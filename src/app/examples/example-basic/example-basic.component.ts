import { Component, computed, effect, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-example-basic',
    standalone: true,
    imports: [FormsModule, MatButtonModule],
    templateUrl: './example-basic.component.html',
})
export class ExampleBasicComponent {
    count = signal<number>(1);

    doubleCount = computed(() => this.count() + 2);

    countEffect = effect(() => console.log('Count effect: ', this.count()));

    increaseCount() {
        this.count.update((count) => count + 1);
    }

    decreaseCount() {
        this.count.update((count) => count - 1);
    }

    setCount(value: number) {
        this.count.set(value);
    }
}