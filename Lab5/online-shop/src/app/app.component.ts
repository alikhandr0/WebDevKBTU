import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent],
  template: `
    
      
      <main>
        <app-products></app-products>
      </main>

      
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kaspi Shop';
}