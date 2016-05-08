import {Component} from 'angular2/core';
@Component({
	selector: 'clipboard-content',
	template: `
    <textarea>
    {{clipContent}}
    </textarea>
    <button (click)="onClickMe()">Click me!</button>
    `
})
export class ClipboardContentComponent {
	clipContent = '';
	placeHolder = 'Placeholder'

	onClickMe() {
		this.clipContent = 'You are my hero!';
	}
}