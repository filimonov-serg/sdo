import { Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {
	ngOnInit() {
		
	}

	ngAfterViewInit() {
		//console.log($.isNumeric(89));
	}
}
