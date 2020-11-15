"use strict";
/*
 ===== Belajar Enum =====

 Enum adalah tipe data yang menyimpan
 data-data kontanta. Enum ini menyimpan
 data-data konstantanya di level aplikasi
 tidak seperti dotenv yang di simpan di
 level konfigurasi.

 jenis - jenis enum :
 a. Numeric Enum
    enum Nilai {
            MTK = 80,
            Fisika = 80,
            Kimia = 80
        };
 b. String Enum
    enum Month {
            JAN = 'Januari',
            FEB = 'Febuari',
            MAY = 'Mei'
        }
*/
// Numeric Enum
var MataKuliah;
(function (MataKuliah) {
    MataKuliah[MataKuliah["Math"] = 88] = "Math";
    MataKuliah[MataKuliah["Database"] = 90] = "Database";
    MataKuliah[MataKuliah["WebProgramming"] = 98] = "WebProgramming";
    MataKuliah[MataKuliah["AI"] = 88] = "AI";
})(MataKuliah || (MataKuliah = {}));
;
console.log(MataKuliah.Database);
// String Enum
var Frameworks;
(function (Frameworks) {
    Frameworks["Oak"] = "Deno Ts";
    Frameworks["Express"] = "Node Js";
    Frameworks["Django"] = "Python";
    Frameworks["Laravel"] = "PHP";
})(Frameworks || (Frameworks = {}));
;
console.log(Frameworks.Django);
