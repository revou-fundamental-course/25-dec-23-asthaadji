function calculateArea() {
    var base = parseFloat(document.getElementById("base").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(base) || isNaN(height)) {
        alert("Masukkan angka yang valid untuk alas dan tinggi.");
    } else {
        var area = 0.5 * base * height;
        document.getElementById("result").innerHTML = "Hasil: " + area.toFixed(2);
    }
}
