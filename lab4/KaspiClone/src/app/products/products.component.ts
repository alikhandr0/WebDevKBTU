import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Samsung Galaxy S24 Smartphone',
      description: 'Flagship phone with a powerful camera and Exynos 2400 processor',
      rating: 4.8,
      images: ['assets/images/Samsung Galaxy S24 Smartphone.jpg'],
      price: 440000
    },
    {
      name: 'MacBook Pro 16 Laptop',
      description: 'High-performance laptop with M3 Pro chip',
      rating: 4.9,
      images: ['assets/images/MacBook Pro 16 Laptop.jpg'],
      price: 1100000
    },
    {
      name: 'Sony WH-1000XM5 Headphones',
      description: 'Excellent noise cancellation and sound quality',
      rating: 4.7,
      images: ['assets/images/Sony WH-1000XM5 Headphones (2).jpg'],
      price: 180000
    },
    {
      name: 'Apple Watch Series 9',
      description: 'Advanced health and fitness tracking',
      rating: 4.6,
      images: ['assets/images/Apple Watch Series 9.jpg'],
      price: 220000
    },
    {
      name: 'PlayStation 5 Gaming Console',
      description: 'Next-generation gaming experience',
      rating: 4.9,
      images: ['assets/images/PlayStation 5 Gaming Console.jpg'],
      price: 310000
    },
    {
      name: 'Samsung QLED 65" TV',
      description: 'Vibrant colors and high image clarity',
      rating: 4.8,
      images: ['assets/images/Samsung QLED 65 TV.jpg'],
      price: 700000
    },
    {
      name: 'DeLonghi Magnifica Coffee Machine',
      description: 'Automatic coffee machine with cappuccino maker',
      rating: 4.7,
      images: ['assets/images/DeLonghi Magnifica Coffee Machine.jpg'],
      price: 260000
    },
    {
      name: 'Sony Alpha A7 IV Camera',
      description: 'Full-frame mirrorless camera for professionals',
      rating: 4.9,
      images: ['assets/images/Sony Alpha A7 IV Camera.jpg'],
      price: 950000
    },
    {
      name: 'Xiaomi Roborock S7 Robot Vacuum',
      description: 'Powerful cleaning with smart navigation',
      rating: 4.6,
      images: ['assets/images/Xiaomi Roborock S7 Robot Vacuum.jpg'],
      price: 220000
    },
    {
      name: 'HyperX Cloud II Gaming Headset',
      description: 'Excellent sound quality and microphone for gaming',
      rating: 4.8,
      images: ['assets/images/HyperX Cloud II Gaming Headset.jpg'],
      price: 55000
    }
  ];

  buyProduct(productName: string) {
    alert(`You purchased: ${productName}! 🎉`);
  }
}
