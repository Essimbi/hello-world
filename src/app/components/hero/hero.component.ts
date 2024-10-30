import { CommonModule } from '@angular/common';
import { Component, model, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  searchQuery = model<string>('');
  categories: string[] = [
    '#JavaScript', '#Python', '#PHP', '#React', '#Angular',
    '#DevOps', '#Mobile',
    '#Machine Learning',
  ];

  isVisible = false;

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
    },  100);
  }

  onSearch() {
    console.log('Searching for:', this.searchQuery);
  }
}
