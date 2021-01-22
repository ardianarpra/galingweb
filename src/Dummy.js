// import { writable } from 'svelte/store';
const kategori = ['makanan','minuman'];

const banner = [
    {
        id : 0,
        
    }
];

const dummydata =
[

       {
           id : 0,
           nama : "Mie Lidi",
           gambar : "https://firebasestorage.googleapis.com/v0/b/galing-d32b2.appspot.com/o/mielidi.png?alt=media&token=38160b12-f215-49d3-990f-afd60ffc4a3d",
           harga:9000,
           kategori:"makanan",
           availability:true,
           description : "Mie lidi Nyonyor dengan cita rasa zaman dulu namnun sudah di ubah dengan camilan masa kini  mie lidi nyonyor sudah mempunyai izin SPIRT 2063510010270-24",
           varian:
               [
                   'pedas','ekstra pedas','pedas manis','jagung pedas','jagung manis','bbq','jagung bakar','gurih','bbq pedas','rumput laut'
               ],
           promo:{
               value : true,
               type : "text",
               desc:"Beli 2 Gratis 1 (50gr)"
           },
           urlapp : {
               shopee : "https://shopee.co.id/Mie-Lidi-Nyonyor-by-Galing-i.318840110.3261011058"
           },
           tester:{
               value:false,
               qty:null
           }
   
       },
       {
           id : 1,
           nama : "Keripik Talas / Taro",
           gambar : "https://firebasestorage.googleapis.com/v0/b/galing-d32b2.appspot.com/o/talas%20(1).png?alt=media&token=f1e46920-4e09-455c-87bf-c008b035d05a",
           harga:5000,
           kategori:"makanan",
           availability:true,
           description : "Camilan Dari Galing yang unik, keripik ini harus diolah dengan rahasia khusus untuk menjadikan kerpik talas menjadi kripik yang enak, perpaduan antara rasi manis dan gurih melekat pada keripik taro ini",
           varian:[],
           promo:{
               value : false,
               type : "",
               desc:""
           },
           urlapp : {
               shopee : "https://shopee.co.id/Keripik-Taro-Talas-Maantaap-i.318840110.4160855070"
           },
           tester:{
               value:false,
               qty:null
           }
   
       },
       {
           id : 2,
           nama : "Pisang Sale",
           gambar : "https://firebasestorage.googleapis.com/v0/b/galing-d32b2.appspot.com/o/sale.png?alt=media&token=9f7888b2-fd85-48e6-b1ac-007054082da6",
           harga:14000,
           kategori:"makanan",
           availability:true,
           description : "Sale Pisang Khas Banyuwangi yang identik dengan rasa manis yang khas serta empuk dibuat dengan proses manual dengan penjemuran hanya mengandalkan sinar matahati sehingga membuat cita rasa yang nikmat berat 200gr",
           varian:[],
           promo:{
               value : true,
               type : "price",
               desc:12000
           },
           urlapp : {
               shopee : "https://shopee.co.id/Sale-Pisang-Barlin-i.318840110.5660846439"
           },
           tester:{
               value:true,
               qty:5
           }
   
       },
       {
           id : 3,
           nama : "Kerupuk Belung",
           gambar : "https://firebasestorage.googleapis.com/v0/b/galing-d32b2.appspot.com/o/balung.png?alt=media&token=17b2e697-c823-4410-994a-f7691f356df5",
           harga:8000,
           kategori:"makanan",
           availability:true,
           description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nisi quod, ab odit facere velit recusandae, quasi eligendi commodi beatae ducimus mollitia optio officia?",
           varian:[],
           promo:{
               value : false,
               type : "",
               desc:""
           },
           urlapp : {
               shopee : "Kerupuk balung gurih dan renyah"
           },
           tester:{
               value:false,
               qty:0
           }
   
       },
       {
           id : 4,
           nama : "Robusta Lereng Ijen",
           gambar : "https://firebasestorage.googleapis.com/v0/b/galing-d32b2.appspot.com/o/robusta%20(1).png?alt=media&token=980d2b3f-454f-4442-9319-f904a9c306a5",
           harga:20000,
           kategori:"minuman",
           availability:true,
           description : "Kopi Robusta asli banyuwangi di buat dan di roasting secara teradisional, kopi ini 100% asli tanpa bahan campuran apapun berat bersih 150gr",
           varian:[],
           promo:{
               value : false,
               type : "",
               desc:""
           },
           urlapp : {
               shopee : "https://shopee.co.id/Kopi-Robusta-Medium-lereng-ijen-by-Galing-i.318840110.4960859468"
           },
           tester:{
               value:false,
               qty:0
           }
   
       },
       {
           id : 5,
           nama : "Excelsa Lereng Ijen",
           gambar : "https://firebasestorage.googleapis.com/v0/b/galing-d32b2.appspot.com/o/excelsa%20(1).png?alt=media&token=1a40a953-2661-4e28-ae2b-3b7a4e213524",
           harga:24000,
           kategori:"minuman",
           availability:true,
           description : "Kopi Excelsa asli banyuwangi di buat dan di roasting secara teradisional, kopi ini 100% asli tanpa bahan campuran apapun berat bersih 150gr",
           varian:[],
           promo:{
               value : false,
               type : "",
               desc:""
           },
           urlapp : {
               shopee : "https://shopee.co.id/Kopi-Excelsa-Medium-by-Galing-i.318840110.6360858037"
           },
           tester:{
               value:true,
               qty:5
           }
   
       },
       {
           id : 6,
           nama : "Arabica Lereng Ijen",
           gambar : "https://firebasestorage.googleapis.com/v0/b/galing-d32b2.appspot.com/o/arabica%20(1).png?alt=media&token=199e5021-66ec-4d04-a370-592c26e03723",
           harga:42000,
           kategori:"minuman",
           availability:true,
           description : "Kopi Arabika asli banyuwangi di buat dan di roasting secara teradisional, kopi ini 100% asli tanpa bahan campuran apapun berat bersih 150gr",
           varian:[],
           promo:{
               value : true,
               type : "price",
               desc:"40000"
           },
           urlapp : {
               shopee : "https://shopee.co.id/Kopi-Arabica-Medium-lereng-ijen-by-Galing-i.318840110.4660856100"
           },
           tester:{
               value:false,
               qty:0
           }
   
       },
       {
           id : 7,
           nama : "Usus Ayam",
           gambar : "https://firebasestorage.googleapis.com/v0/b/galing-d32b2.appspot.com/o/usus.png?alt=media&token=1da5bb56-8350-4127-b306-42c5aa82a1eb",
           harga:12000,
           kategori:"makanan",
           availability:true,
           description : "Keripik Usus Dari galing ini terbuat dari usus yang segar dipadukan dengan rempah-rempah serta digoreng dengan minyak yang bermerek untuk menjaga rasa serta kesehatan berat besih 150gr",
           varian:[],
           promo:{
               value : false,
               type : "",
               desc:""
           },
           urlapp : {
               shopee : "https://shopee.co.id/Keripik-Usus-Maantaap-i.318840110.3360951047"
           },
           tester:{
               value:false,
               qty:0
           }
   
       },
       {
           id : 8,
           nama : "Keripik Kedelai",
           gambar : "https://firebasestorage.googleapis.com/v0/b/galing-d32b2.appspot.com/o/kedelai.png?alt=media&token=f17bbdef-0069-4ed2-b5ba-8fa97692a685",
           harga:8000,
           kategori:"makanan",
           availability:true,
           description : "Keripik Kedelai dari galing dibuat dengan kedelai pilihan dan dibuat secara manual",
           varian:[],
           promo:{
               value : false,
               type : "",
               desc:""
           },
           urlapp : {
               shopee : "https://shopee.co.id/Keripik-Kedelai-Maantaap-i.318840110.7660850388"
           },
           tester:{
               value:false,
               qty:0
           }
   
       },
       {
           id : 9,
           nama : "Syrup Temulawak",
           gambar : "https://firebasestorage.googleapis.com/v0/b/galing-d32b2.appspot.com/o/temulawak.png?alt=media&token=0439a350-f08c-4e33-a30f-45cfcbad6d9f",
           harga:20000,
           kategori:"minuman",
           availability:true,
           description : "Sirup sari temulawak dengan extrak temulawak alami, dibuat dengan bahan alami tanpa bahan pengawet",
           varian:[],
           promo:{
               value : true,
               type : "price",
               desc:"18000"
           },
           urlapp : {
               shopee : "https://shopee.co.id/Sirup-Sari-Temulawak-i.318840110.6360846845"
           },
           tester:{
               value:true,
               qty:10
           }
   
       },
   ]


export function getKategori(args){
   let kat = [];
   for(let i = 0; i<dummydata.length;i++){
       if(dummydata[i].kategori == args){
           kat.push(dummydata[i]);
       }
   }
   return kat;
}


export function getData(id){
   for(let i = 0; i<dummydata.length;i++){
       if(dummydata[i].id == id){
           return dummydata[i];
       }
   }
   return;
}

export function dataAll(){
   return dummydata;
}

export function dataKategori(){
   return kategori;
}