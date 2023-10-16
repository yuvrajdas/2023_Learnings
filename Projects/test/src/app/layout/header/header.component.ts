import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  togglerIcon:boolean = false;
  isDarkTheme:boolean = true;
  @Output() dataEmitter = new EventEmitter<boolean>();
  ngOnInit(): void {
  }
  toggleButton(){
    this.togglerIcon = !this.togglerIcon;
  }
  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;

    this.dataEmitter.emit(this.isDarkTheme);
  }
}
