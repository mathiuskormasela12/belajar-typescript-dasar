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
enum MataKuliah {
	Math = 88,
	Database = 90,
	WebProgramming = 98,
	AI = 88
};

console.log(MataKuliah.Database);

// String Enum
enum Frameworks {
	Oak = 'Deno Ts',
	Express = 'Node Js',
	Django = 'Python',
	Laravel = 'PHP'
};

console.log(Frameworks.Django);
