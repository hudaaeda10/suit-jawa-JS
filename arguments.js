function tambah() {
    var hasil = 0;
    for (var i=0; i < arguments.length; i++)
    {
        hasil += arguments[i];
    }
    return hasil;
}

console.log(tambah(1,4,7));