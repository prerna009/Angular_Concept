import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.scss'
})
export class ToggleThemeComponent implements OnInit{
  isDarkTheme: boolean = false;

  ngOnInit(): void {
    if(localStorage.getItem('theme')){
      this.isDarkTheme = localStorage.getItem('theme') === 'dark';
      this.toggleTheme();
    }
  }

  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark' : 'light';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme',theme);
  }
}
