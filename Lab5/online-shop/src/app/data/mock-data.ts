import { Category, Product } from '../types/types';

export const CATEGORIES: Category[] = [
    { id: 1, name: 'Смартфоны', description: 'Мобильные телефоны и аксессуары' },
    { id: 2, name: 'Ноутбуки', description: 'Компьютеры и ноутбуки' },
    { id: 3, name: 'Планшеты', description: 'Планшеты и электронные книги' },
    { id: 4, name: 'Аксессуары', description: 'Аксессуары для техники' }
];

export const PRODUCTS: Product[] = [
    {
        id: 16,
        name: 'AirPods Pro 2',
        description: 'Apple AirPods Pro 2',
        rating: 4.9,
        price: 129990,
        kaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/',
        images: ['https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913081126463007/230918065429539378.png@webp'],
        likes: 0,
        categoryId: 4
    },
    {
        id: 6,
        name: 'MacBook Pro 16',
        description: 'Apple MacBook Pro 16 M2 Pro',
        rating: 4.9,
        price: 1299990,
        kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-mk193-seryi-102892101/',
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToKAC7v91vqZbSABVjcNRfBkZwy55GqZbAQ&s'],
        likes: 0,
        categoryId: 2
    },
    {
        id: 11,
        name: 'iPad Pro 12.9',
        description: 'Apple iPad Pro 12.9 (2022) 256Gb',
        rating: 4.9,
        price: 799990,
        kaspiLink: 'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-256gb-wi-fi-seryi-107284047/',
        images: ['https://gadgetstore.kz/wa-data/public/shop/products/91/05/591/images/2007/2007.970.jpeg'],
        likes: 0,
        categoryId: 3
    },
    {
        id: 1,
        name: 'iPhone 15 Pro',
        description: 'Apple iPhone 15 Pro 256Gb черный',
        rating: 4.9,
        price: 629990,
        kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-113138344/',
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXV1OPqmfMzs8G8HtIyJH1AYFQiJbkmGrPVw&s',
        ],
        likes: 0,
        categoryId: 1
    },
    {
        id: 2,
        name: 'Samsung Galaxy S23',
        description: 'Samsung Galaxy S23 Ultra 256Gb черный',
        rating: 4.8,
        price: 549990,
        kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-256gb-chernyi-109174566/',
        images: ['https://sanmi.kz/upload/iblock/08c/samsung-galaxy-s23-5g-8-gb-256-gb-chernyi-108714334-1.jpg'],
        likes: 0,
        categoryId: 1
    },
    {
        id: 3,
        name: 'Google Pixel 7',
        description: 'Google Pixel 7 Pro 128Gb черный',
        rating: 4.7,
        price: 449990,
        kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-7-pro-128gb-chernyi-106971937/',
        images: ['https://onepoint.kz/uploads/products/1085/google-pixel-7-pro-12256gb-hazel.png'],
        likes: 0,
        categoryId: 1
    },
    {
        id: 4,
        name: 'Xiaomi 13 Pro',
        description: 'Xiaomi 13 Pro 256Gb черный',
        rating: 4.6,
        price: 499990,
        kaspiLink: 'https://kaspi.kz/shop/p/xiaomi-13-pro-256gb-chernyi-108814040/',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h98/h1e/86597718900766.png?format=gallery-large'],
        likes: 0,
        categoryId: 1
    },
    {
        id: 5,
        name: 'OnePlus 11',
        description: 'OnePlus 11 256Gb черный',
        rating: 4.5,
        price: 399990,
        kaspiLink: 'https://kaspi.kz/shop/p/oneplus-11-256gb-chernyi-108970987/',
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvx3R-Hn4ozj6f0hRt9NDXJrTHWpZ_SU2kJA&s'],
        likes: 0,
        categoryId: 1
    },
    {
        id: 7,
        name: 'Dell XPS 15',
        description: 'Dell XPS 15 9520',
        rating: 4.7,
        price: 899990,
        kaspiLink: 'https://kaspi.kz/shop/p/dell-xps-15-9520-210-bcbq-serebristyi-106025932/',
        images: ['https://forcecom.kz/upload/iblock/656/hi6eqqjd10x7l29tw6op3deew2desx80.webp'],
        likes: 0,
        categoryId: 2
    },
    {
        id: 8,
        name: 'Lenovo ThinkPad X1',
        description: 'Lenovo ThinkPad X1 Carbon Gen 10',
        rating: 4.6,
        price: 799990,
        kaspiLink: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-gen-10-21cb0062rt-chernyi-107866944/',
        images: ['https://nout.kz/upload/resize_cache/webp/iblock/729/muda1ebrmm2rkfyxzj2vt429o3yg6ocm/fd2cbaa7b06ae946fb3ba4eb84612f8f_1000.webp'],
        likes: 0,
        categoryId: 2
    },
    {
        id: 9,
        name: 'HP Spectre x360',
        description: 'HP Spectre x360 14',
        rating: 4.5,
        price: 749990,
        kaspiLink: 'https://kaspi.kz/shop/p/hp-spectre-x360-14-ef0030ur-5y457ea-serebristyi-107650973/',
        images: ['https://www.hp.com/ca-en/shop/Html/Merch/Images/c08745208_1750x1285.jpg'],
        likes: 0,
        categoryId: 2
    },
    {
        id: 10,
        name: 'Asus ROG Zephyrus',
        description: 'Asus ROG Zephyrus G14',
        rating: 4.8,
        price: 849990,
        kaspiLink: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-ga402rj-l8032-seryi-106947505/',
        images: ['https://forcecom.kz/upload/iblock/83f/xwcwe8kxe2j88c92qryrui6jnioryafw.jpg'],
        likes: 0,
        categoryId: 2
    },
    {
        id: 12,
        name: 'Samsung Galaxy Tab S9',
        description: 'Samsung Galaxy Tab S9 Ultra',
        rating: 4.7,
        price: 699990,
        kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-ultra-512gb-seryi-112406527/',
        images: ['https://s3.oma.kz/catalog/products/9ed/R9FMGkDPWSBrdrST.jpeg'],
        likes: 0,
        categoryId: 3
    },
    {
        id: 13,
        name: 'Kindle Paperwhite',
        description: 'Amazon Kindle Paperwhite 11',
        rating: 4.6,
        price: 99990,
        kaspiLink: 'https://kaspi.kz/shop/p/amazon-kindle-paperwhite-11-8-gb-chernyi-103012219/',
        images: ['https://capital.lv/media/catalog/product/cache/78b7d5e9d325dc0c77c021f203703bf1/f/6/f69d8c13-3ba4-49da-a1bb-5161982304e6.jpg'],
        likes: 0,
        categoryId: 3
    },
    {
        id: 14,
        name: 'Lenovo Tab P12 Pro',
        description: 'Lenovo Tab P12 Pro 256Gb',
        rating: 4.5,
        price: 449990,
        kaspiLink: 'https://kaspi.kz/shop/p/lenovo-tab-p12-pro-256gb-seryi-106671354/',
        images: ['https://images-cdn.ubuy.ae/6527adb1003e0b01e526b6b9-lenovo-tab-p12-pro-with-pen-12-tablet.jpg'],
        likes: 0,
        categoryId: 3
    },
    {
        id: 15,
        name: 'Microsoft Surface Pro 9',
        description: 'Microsoft Surface Pro 9',
        rating: 4.8,
        price: 899990,
        kaspiLink: 'https://kaspi.kz/shop/p/microsoft-surface-pro-9-13-16-gb-256-gb-serebristyi-107700136/',
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4YiSuN2QXT2sKD4_D0RO8izf7Muzp3_6Eg&s'],
        likes: 0,
        categoryId: 3
    },
    {
        id: 17,
        name: 'Apple Watch Series 9',
        description: 'Apple Watch Series 9 45mm',
        rating: 4.8,
        price: 249990,
        kaspiLink: 'https://kaspi.kz/shop/p/apple-watch-series-9-45-mm-chernyi-113398437/',
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7YmbokElqo27ruezz5SPERz0-hWbDqedQA&s'],
        likes: 0,
        categoryId: 4
    },
    {
        id: 18,
        name: 'Samsung Galaxy Watch 6',
        description: 'Samsung Galaxy Watch 6 Classic',
        rating: 4.7,
        price: 199990,
        kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-6-classic-47-mm-chernyi-111018342/',
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC95elxIeVmIzSUvCzI2UnIGpamzt6wLJR1g&s'],
        likes: 0,
        categoryId: 4
    },
    {
        id: 19,
        name: 'Magic Keyboard',
        description: 'Apple Magic Keyboard',
        rating: 4.6,
        price: 89990,
        kaspiLink: 'https://kaspi.kz/shop/p/apple-magic-keyboard-dlja-ipad-pro-11-belyi-100667169/',
        images: ['https://185504.selcdn.ru/static/almajuice.reshop.kz/catalog/217/699200940669b97bb6c514_original.jpg'],
        likes: 0,
        categoryId: 4
    },
    {
        id: 20,
        name: 'Apple Pencil 2',
        description: 'Apple Pencil (2nd Generation)',
        rating: 4.8,
        price: 79990,
        kaspiLink: 'https://kaspi.kz/shop/p/apple-pencil-2nd-generation-belyi-9400824/',
        images: ['https://object.pscloud.io/darbiz/catalogs/b1f/1a89b054-b1f8-11e9-8043-0a580a0203c3.jpg'],
        likes: 0,
        categoryId: 4
    }
];