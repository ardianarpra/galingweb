import { writable } from 'svelte/store';


export const dummydata = writable(
    [
        {
            id : 0,
            nama : "Mie Lidi",
            gambar : "assets/img/produk/mielidi.png",
            harga:9000,
            promo:{
                value : true,
                type : "text",
                desc:"Beli 2 Gratis 1 (50gr)"
            }
    
        },
        {
            id : 1,
            nama : "Keripik Talas",
            gambar : "assets/img/produk/talas.png",
            harga:5000,
            promo:{
                value : false,
                type : "",
                desc:""
            }
    
        },
        {
            id : 2,
            nama : "Pisang Sale",
            gambar : "assets/img/produk/pisal.png",
            harga:12000,
            promo:{
                value : true,
                type : "price",
                desc:9000
            }
    
        },
        {
            id : 3,
            nama : "Kerupuk Belung",
            gambar : "assets/img/produk/belung.png",
            harga:8000,
            promo:{
                value : false,
                type : "",
                desc:""
            }
    
        },
        {
            id : 4,
            nama : "Robusta Lereng Ijen",
            gambar : "assets/img/produk/robustaa.png",
            harga:20000,
            promo:{
                value : false,
                type : "",
                desc:""
            }
    
        },
        {
            id : 5,
            nama : "Excelsa Lereng Ijen",
            gambar : "assets/img/produk/excelsa.png",
            harga:24000,
            promo:{
                value : false,
                type : "",
                desc:""
            }
    
        },
        {
            id : 6,
            nama : "Arabica Lereng Ijen",
            gambar : "assets/img/produk/arabica.png",
            harga:40000,
            promo:{
                value : false,
                type : "",
                desc:""
            }
    
        },
        {
            id : 7,
            nama : "Usus Ayam",
            gambar : "assets/img/produk/usus.png",
            harga:12000,
            promo:{
                value : false,
                type : "",
                desc:""
            }
    
        },
        {
            id : 8,
            nama : "Keripik Kedelai",
            gambar : "assets/img/produk/kedelai.png",
            harga:8000,
            promo:{
                value : false,
                type : "",
                desc:""
            }
    
        },
        {
            id : 9,
            nama : "Syrup Temulawak",
            gambar : "assets/img/produk/siruptemu.png",
            harga:20000,
            promo:{
                value : false,
                type : "",
                desc:""
            }
    
        },
    ]
);