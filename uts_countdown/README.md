# Countdown - Mobile App

<img src="docs/icon.png" width="200">

## Deskripsi Aplikasi
Aplikasi `Countdown` merupakan aplikasi yang dapat digunakan untuk membuat waktu mundur. Tidak hanya satu, anda dapat mengelola banyak waktu hitungan mundur. Aplikasi ini dapat digunakan sebagai pengelola hitungan mundur pada suatu tes, kompetisi, belajar, dan pengingat.

## Dependensi atau Library (Expo)
- `expo-av`: Digunakan untuk berniteraksi dengan audio dan video. Pada aplikasi ini, modul ini digunakan untuk memutar audio ketika hitungan mundur telah selesai.
- `expo-font`: Digunakan untuk memuat kastemisasi font.
- `expo-random`: Digunakan menggenerate data random yang digunakan sebagai ID dalam basis data.
- `expo-status-bar`: Digunakan untuk mengontorol status bar.

## Cara Instalasi
Jalakan perintah di bawah ini untuk melakukan instalasi dependensi!

```
yarn
npm install (alternative command)
```

Setelah proses selesai, jalankan salah satu perintah ini untuk membuka aplikasi via expo:
```
yarn android
yarn ios
yarn web (no support)

npm run android
npm run ios
npm run web (no support)
```

Membuka aplikasi via web tidak dapat dilakukan. Hal tersebut dikarenakan aplikasi ini dibangun menggunakan library `react-native-ui-lib` yang tidak mendukung fitur penampilan dari perangkat web.