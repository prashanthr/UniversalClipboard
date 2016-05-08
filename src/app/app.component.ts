import {Component} from 'angular2/core';
import {ClipboardContentComponent} from './clipboard-content.component';

@Component({
    selector: 'uc-app',
    template: `
    <h1>{{title}}</h1>
    <div>
    <textarea style={{style}}>
    {{clipContent}}
    </textarea> <br /> 
    <button (click)="onClickMe()">Change Clipboard Text</button>
    </div>
    `
})
export class AppComponent { 
	title = 'Universal Clipboard';
	placeHolder = 'I have not changed yet'
	clipContent = this.placeHolder;
	style = 'width: 500px;height: 200px';
	onClickMe() {
		this.clipContent = 'Changed!';
	}
}