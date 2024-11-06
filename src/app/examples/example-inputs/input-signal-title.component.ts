import {
  Component,
  input,
  Input,
  signal
} from '@angular/core';

@Component({
  selector: 'input-signal-title',
  standalone: true,
  template: ` <p>
    Username is : <b>{{ title() }}</b>
    <br />
    subtitle is : <b>{{ subtitle() }}</b>
  </p>`,
})
export class InputSignalComponent {
  // Old way:
  @Input() title = signal('');

  // New way:
  subtitle = input.required<string>();
}
