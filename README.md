## Installation
####1. Clone project atau Download ZIP file

```sh
$ git clone https://github.com/iyastoNuniary/project-task-website.git
```

####2.  Pastikan [npm](https://www.npmjs.org/) telah terinstall secara global


https://nodejs.org/en/download/

####3. Setelah project di download, jalankan perintah - perintah berikut

```sh
$ cd `project-directory`
```
```sh
$ npm install
```
```sh
$ npm start
```

NOTE:
- Untuk API ini : "https://dog.ceo/api/breed/boxer/images"  saya ganti karena error "Request header field content-type is not allowed by Access-Control-Allow-Headers in preflight response" API nya tidak di allow
- API yang saya gunakan "http://operationreportdev.kar-ads.com/api/breed/boxer/images", API ini saya buat mengunakan Node JS respone atau balikan dari API ini sama persis seperti "https://dog.ceo/api/breed/boxer/images"
- ```sh 
  const data = [
			{
				title: 'Video 1',
				url: 'https://www.youtube.com/watch?v=GILigSWRs3M'
			},
			{
				title: 'Video 2',
				url: 'https://mystorage/video2.jpeg'
			},
			{
				title: 'Video 3',
				url: 'https://mystorage/video3.jpeg'
			}
		]
```
data array url pertama saya ganti karena url yang di berikan tidak dapat diakses, tujuan saya ganti agar tampil pada aplikasi
