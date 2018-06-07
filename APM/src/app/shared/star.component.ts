import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-stars',
    styleUrls: ['./star.component.css'],
    templateUrl: './star.component.html',
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() notify: EventEmitter<string>;

    constructor() {
        this.notify = new EventEmitter<string>();
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void {
        this.notify.emit('clicked!');
    }
}
