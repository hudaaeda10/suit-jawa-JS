var main = true;
while (main) {
    // inputan player
    var p = prompt('Masukkan pilihan (gajah, semut, orang) : ');

    // inputan komputer
    var comp = Math.random();

    //  memasukkan nilai angka menjadi string gajah, semut dan orang
    if (comp < 0.36) {
        comp = 'gajah';
    } else if (comp >= 0.36 && comp <= 0.76) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    // set rules
    var hasil = '';

    if (p == comp) {
        hasil = 'SERI';
    } else if (p == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'menang';
        // } else {
        //     hasil = 'kalah';
        // }
        hasil = (comp == 'orang') ? 'menang' : 'kalah';
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'kalah' : 'menang';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'kalah' : 'menang';
    }
    else {
        hasil = 'Pilihan kamu salah!';
    }

    // tampilkan hasil
    alert('Pilihan kamu ' + p + ' dan pilihan komputer ' + comp + '\n Hasil pertandingan : ' + hasil);
    main = confirm('lagi?');
}

alert ('terima kasih sudah bermain');