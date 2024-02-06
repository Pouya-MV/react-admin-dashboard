let chartInfo = [
    { "name": "Jan", "sale": 8_410 },
    { "name": "Feb", "sale": 8_370 },
    { "name": "Mar", "sale": 9_940 },
    { "name": "Apr", "sale": 7_520 },
    { "name": "May", "sale": 8_760 },
    { "name": "Jun", "sale": 7_840 },
    { "name": "Jul", "sale": 9_690 },
    { "name": "Aug", "sale": 7_840 },
    { "name": "Sep", "sale": 16_540 },
    { "name": "Oct", "sale": 14_730 },
    { "name": "Nov", "sale": 12_120 },
    { "name": "Dec", "sale": 11_890 },
]

let rows = [
    { id: 1, image: 'image/admin.jpg', firstName: 'hossein', lastName: 'yousefimanesh', age: 22 },
    { id: 2, image: 'image/admin.jpg', firstName: 'ali', lastName: 'zare', age: 42 },
    { id: 3, image: 'image/admin.jpg', firstName: 'reza', lastName: 'mohammadi', age: 45 },
    { id: 4, image: 'image/admin.jpg', firstName: 'amir', lastName: 'abbasi', age: 16 },
    { id: 5, image: 'image/admin.jpg', firstName: 'mohammad', lastName: 'azizi', age: 22 },
    { id: 6, image: 'image/admin.jpg', firstName: 'nima', lastName: 'karimi', age: 19 },
    { id: 7, image: 'image/admin.jpg', firstName: 'yasin', lastName: 'gholami', age: 44 },
    { id: 8, image: 'image/admin.jpg', firstName: 'sina', lastName: 'hamidi', age: 36 },
    { id: 9, image: 'image/admin.jpg', firstName: 'amin', lastName: 'pasha', age: 65 },
];

let productRows = [
    { id: 1, image: 'image/iphone13.png', productName: 'iphone13 Pro max', price: '$1,600', inventory: 22, status: "in stock", statusClass: "product-detail-status", sale: "$123,456", active: "no" },

    { id: 2, image: 'image/air.png', productName: 'AirPods Pro 2021', price: '$215', inventory: 78, status: "in stock", statusClass: "product-detail-status", sale: "$123,456", active: "yes" },

    { id: 3, image: 'image/mac.png', productName: 'MacBook Pro', price: '$2,220', inventory: 0, status: "in stock", statusClass: "product-detail-status red", sale: "$123,456", active: "no" },

    { id: 4, image: 'image/ps5.png', productName: 'Playstation 5', price: '$634', inventory: 32, status: "in stock", statusClass: "product-detail-status", sale: "$123,456", active: "yes" },

    { id: 5, image: 'image/s23.png', productName: 'Galaxy S23 Ultra', price: '$1,198', inventory: 46, status: "in stock", statusClass: "product-detail-status", sale: "$123,456", active: "yes" },

    { id: 6, image: 'image/hp.png', productName: 'hp EliteBook', price: '$1,300', inventory: 0, status: "in stock", statusClass: "product-detail-status red", sale: "$123,456", active: "yes" },

    { id: 7, image: 'image/iphone13.png', productName: 'iphone13 Pro max', price: '$1,600', inventory: 22, status: "in stock", statusClass: "product-detail-status", sale: "$123,456", active: "no" },

    { id: 8, image: 'image/air.png', productName: 'AirPods Pro 2021', price: '$215', inventory: 78, status: "in stock", statusClass: "product-detail-status", sale: "$123,456", active: "yes" },

    { id: 9, image: 'image/mac.png', productName: 'MacBook Pro', price: '$2,220', inventory: 0, status: "out of stock", statusClass: "product-detail-status red", sale: "$123,456", active: "no" },

    { id: 10, image: 'image/ps5.png', productName: 'Playstation 5', price: '$634', inventory: 32, status: "in stock", statusClass: "product-detail-status", sale: "$123,456", active: "yes" },

    { id: 11, image: 'image/s23.png', productName: 'Galaxy S23 Ultra', price: '$1,198', inventory: 46, status: "in stock", statusClass: "product-detail-status", sale: "$123,456", active: "yes" },

    { id: 12, image: 'image/hp.png', productName: 'hp EliteBook', price: '$1,300', inventory: 0, status: "out of stock", statusClass: "product-detail-status red", sale: "$123,456", active: "yes" },

    { id: 13, image: 'image/iphone13.png', productName: 'iphone13 Pro max', price: '$1,600', inventory: 22, status: "in stock", statusClass: "product-detail-status", sale: "$123,456", active: "no" },

    { id: 14, image: 'image/air.png', productName: 'AirPods Pro 2021', price: '$215', inventory: 78, status: "in stock", statusClass: "product-detail-status", sale: "$123,456", active: "yes" },

    { id: 15, image: 'image/mac.png', productName: 'MacBook Pro', price: '$2,220', inventory: 0, status: "out of stock", statusClass: "product-detail-status red", sale: "$123,456", active: "no" },

    { id: 16, image: 'image/ps5.png', productName: 'Playstation 5', price: '$634', inventory: 32, status: "in stock", statusClass: "product-detail-status", sale: "$123,456", active: "yes" },

    { id: 17, image: 'image/s23.png', productName: 'Galaxy S23 Ultra', price: '$1,198', inventory: 46, status: "in stock", statusClass: "product-detail-status", sale: "$123,456", active: "yes" },

    { id: 18, image: 'image/hp.png', productName: 'hp EliteBook', price: '$1,300', inventory: 0, status: "out of stock", statusClass: "product-detail-status red", sale: "$123,456", active: "yes" },

];

const productSale = [
    { "name": "Jan", "sale": 8_410 },
    { "name": "Feb", "sale": 6_370 },
    { "name": "Mar", "sale": 3_940 },
    { "name": "Apr", "sale": 9_520 },
    { "name": "May", "sale": 6_760 },
]


export { chartInfo, rows, productRows, productSale }

