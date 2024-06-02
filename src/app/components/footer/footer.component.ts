import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  @Input() title:string = ''
  currentYear = new Date().getFullYear()
  constructor(){}
  ngOnInit(): void {}
}
