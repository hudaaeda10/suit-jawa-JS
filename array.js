// metode push and pop
// push menambah di paling belakang
// var arr = ['aeda', 'stren', 'odd', 'ulrich'];
// arr.push('yumi');
// console.log(arr.join('-'));

// pop membuah element array di paling belakang
// var arr = ['aeda', 'stren', 'odd', 'ulrich'];
// arr.pop();
// console.log(arr.join('-'));

// Metode unshift and shift penambahan dan pengurangan array dari element paling depan
// var arr = ['aeda', 'stren', 'odd', 'ulrich'];
// arr.unshift('yumi'); // menambah element
// arr.shift(); // menghapus element di paling depan
// console.log(arr.join('-'));


// Metode splice - metode menambah di element array tertentu
// arr.splice(indexAwal, mauDiHapusBerapa, elementBaru1, elementBaru2, ..)
// arr.splice(2, 0, 'yumi'); // menambahkan value yumi setelah stren dan tidak menghapus element
// console.log(arr.join('-'));

// Metode slice - mengambil element dari array 
// arr.slice(indexPertama, indexDua)
// var arr = ['aeda', 'stren', 'odd', 'ulrich'];
// var arr2 = arr.slice(1,3); // mengambil element stren dan odd
// console.log(arr2.join('-'));


// Metode forEach dan Map
// var arr = ['aeda', 'stren', 'odd', 'ulrich'];
// arr.forEach(function(e, i){
//     console.log('Mahasiswa ke - ' +(i+1)+ ' : ' +e);
// });

// map pengulangan array dengan mengembalikan nilainya
// var arr= ['aeda', 'stren', 'odd', 'ulrich'];
// var arr2 = arr.map(function(e, i){
//     return 'Mahasiswa ke - ' +(i+1)+ ' : ' +e;
// });
// console.log(arr2.join(' - '));

// Metode sort
// var arr= [1,4,5,2,6,7,8,30,9,3,20];
// var angka = arr.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka.join(' - '));


// filter - mengembalikan nilai lebih dari 1 atau dalam bentuk array
// var arr= [1,4,5,2,6,7,8,30,9,3,20];
// var angka = arr.filter(function(e) {
//     return e > 5;
// });
// console.log(angka.join(' - '));


// find - Mengembalikan nilai hanya 1 saja
// var arr = [1, 5, 3, 2, 6, 7, 8, 20, 21];
// var angka = arr.find(function(e) { 
//     return e > 5;
// });
// console.log(angka);

