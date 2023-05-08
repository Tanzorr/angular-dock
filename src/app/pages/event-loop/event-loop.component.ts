import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-loop',
  templateUrl: './event-loop.component.html',
  styleUrls: ['./event-loop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventLoopComponent {

  messages: string[] = [];

  onClick() {
    this.messages.push('start - Synchronous task that is executed immediately.');

    setTimeout(() => {
      this.messages.push('async operation 1 - Asynchronous task that is added to the task queue after a delay of 2000ms.');
      Promise.resolve().then(() => {
        this.messages.push('micro task 1 - Micro task that is added to the micro task queue immediately after async operation 1 is added to the task queue.');
      });
    }, 2000);

    setTimeout(() => {
      this.messages.push('async operation 2 - Asynchronous task that is added to the task queue after a delay of 1000ms.');
      Promise.resolve().then(() => {
        this.messages.push('micro task 2 - Micro task that is added to the micro task queue immediately after async operation 2 is added to the task queue.');
      });
    }, 1000);

    Promise.resolve().then(() => {
      this.messages.push('micro task 3 - Micro task that is added to the micro task queue immediately after it is created.');
    });

    this.messages.push('end - Synchronous task that is executed immediately.');
  }
}

