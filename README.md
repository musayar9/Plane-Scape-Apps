## Plane Scape

## Sunucu Tarafında Kullanılan Teknolojiler

![NodeJs](https://img.shields.io/badge/Nodejs-20.9.0-yellowgreen)
![bcryptjs](https://img.shields.io/badge/bcryptjs-2.4.3-green)
![cookie-parser](https://img.shields.io/badge/cookie--parser-1.4.6-red)
![cors](https://img.shields.io/badge/cors-2.8.5-orange)
![dotenv](https://img.shields.io/badge/dotenv-16.4.5-brightgreen)
![express](https://img.shields.io/badge/express-4.21.0-lightblue)
![mongodb](https://img.shields.io/badge/mongodb-6.9.0-darkgreen)
![mongoose](https://img.shields.io/badge/mongoose-8.6.3-darkred)
![nodemon](https://img.shields.io/badge/nodemon-3.1.5-gold)

## İstemci Tarafında Kullanılan Teknolojiler

![reduxjs/toolkit](https://img.shields.io/badge/reduxjs/toolkit-2.2.7-green)
![autoprefixer](https://img.shields.io/badge/autoprefixer-10.4.20-yellow)
![axios](https://img.shields.io/badge/axios-1.7.7-blue)
![postcss](https://img.shields.io/badge/postcss-8.4.47-purple)
![prop-types](https://img.shields.io/badge/prop--types-15.8.1-brightgreen)
![react](https://img.shields.io/badge/react-18..0-lightblue)
![react-dom](https://img.shields.io/badge/react--dom-18.3.1-lightgrey)
![react-icons](https://img.shields.io/badge/react--icons-5.3.0-darkgreen)
![react-loader-spinner](https://img.shields.io/badge/react--loader--spinner-6.1.6-darkred)
![react-redux](https://img.shields.io/badge/react--redux-9.1.2-pink)
![react-router-dom](https://img.shields.io/badge/react--router--dom-6.26.2-gold)
![redux-persist](https://img.shields.io/badge/redux--persist-6.0.0-silver)
![tailwindcss](https://img.shields.io/badge/tailwindcss-3.4.12-lightgreen)


## Giriş


Uygulama geliştirilirken sunucu (server) tarafında Node.js, Express.js, MongoDB, Cors, ve Bcrypt.js gibi teknolojiler kullanıldı. Kullanıcı bilgileri ve uçuş rezervasyon bilgileri MongoDB'de saklanmaktadır. Kullanıcı şifreleri, güvenlik amacıyla Bcrypt.js kullanılarak şifrelenmiştir.

İstemci tarafı, JavaScript'in React kütüphanesi ile yazıldı. Uygulamanın durum (state) yönetimi için Redux-Toolkit kullanıldı ve kullanıcı (user) ile uçuş rezervasyon (bookFlight) bilgileri Redux-Persist ile localStorage'a kaydedildi. Uygulama içi yönlendirmeler (routing) için React Router DOM kullanıldı. Schiphol Havalimanı'nın sunduğu API'ler ve Express.js ile MongoDB kullanarak yazılan API'ler Axios ile çekildi.

Tasarımda Tailwind CSS kullanıldı. Uygulama içinde bildirim mesajları göstermek için React Hot Toast kütüphanesi kullanıldı. Veri çekme işlemleri sırasında, kullanıcıya bekleme durumunu göstermek için React Loader Spinner ile loading animasyonları oluşturuldu. İkon kullanımı için ise React Icons tercih edildi. Uygulama içinde tarih bilgileri moment kütüphanesi kullanarak formatlandı.

### Tanım

Bu uygulama, kullanıcıların uçak bileti rezervasyonu yapmalarını ve bilet satın almalarını sağlayan bir platformdur. Kullanıcılar, uçuşları tarih ve gidiş yönüne göre filtreleyebilir, uygun uçuşları kolayca bulabilirler. 

Bu uygulama geliştirilirken, uçuş bilgilerini içeren veriler, Schiphol Havalimanı'nın sunduğu https://developer.schiphol.nl/ sitesindeki API'ler aracılığıyla sağlandı. Bu API'ler, uçuş bilgilerini gerçek zamanlı olarak getirerek kullanıcıların güncel uçuşları görüntüleyebilmesini sağlamaktadır.


Kullanıcılar, bu uçuş bilgilerini kullanarak uçuş rezervasyonu yapabilmektedir. Yapılan rezervasyonlar, Node.js ve MongoDB kullanılarak veritabanında saklanmaktadır. Ayrıca, kullanıcılar API’ler aracılığıyla uçuş rezervasyonlarını görüntüleyebilir ve yönetebilirler. Bu sayede, mevcut rezervasyonlarına kolayca erişip, uçuş bilgilerini kontrol edebilirler.

### Proje Detayı

1. ### Hesap Oluşturma



| ![img-1](./client/src/assets/images/register.jpg) | ![img-2](./client/src/assets/images/registerError.jpg) |
| -------------------------- | -------------------------- |

Kullanıcı burada sisteme kayıt olabilmekte.Kullanıcıdan isim, soyisim, email ve password bilgisi istenmektedir. Eğer herhangi bir eksik bilgi durumunda kullanıcıya ekranda hata mesajı gösterilmektedir.

2. ### Sisteme giriş yapma


| ![img-3](./client/src/assets/images/login.jpg) | ![img-4](./client/src/assets/images/loginerror.jpg) | ![img-5](./client/src/assets/images/loginsucces.jpg)|
| -------------------------- | -------------------------- |  -------------------------- | 

Kullanıcı `Register` sayfasında kayıt olduktan sonra `Login` sayfasına yönlendirilmektedir. Burada kullanıcıdan sisteme kayıt olurken girmiş olduğu `email` ve `password` bilgileri istenilmektedir. Kullanıcının `email` ve `password` bilgisi yanlış ise ekranda kullanıcıya hata mesajı gösterilmektedir. Kullanıcı doğru ``email`` ve ``password`` bilgisini girdikten sonra anasayfaya yönlendirilmektedir.

3. ### Anasayfa

![img-6](./client/src/assets/images/homepage.jpg)

Kullanıcı başarılı bir şekilde sisteme giriş yaptıktan sonra Anasayfaya yönlendirilmekte. Bu sayfada bütün uçuş kayıtlarını görüntüleyebilmekte. Uçuşları tarih ve hareket yönüne göre filtreleyebilmekte. Ve uçuş rezervasyonu yapabilmektedir.

##### 3.a. Tarihe ve Hareket Yönüne göre uçuşları filtrleme


| ![img-7](./client/src/assets/images/bookflight.jpg) | ![img-8](./client/src/assets/images/bookflightflilter.jpg) |
| -------------------------- | -------------------------- |

Bu alanda kullanıcı, sağlanan iki input alanı ile uçuşları filtreleyebilmektedir. Kullanıcı, öncelikle ``Tarih (Date)`` alanına filtrelemek istediği tarihi girer. Ardından, ``Uçuş Yönü (FlightDirection) ``alanında uçuş yönünü seçer. Bu alanda bir select menüsü açılır ve kullanıcı ``İniş (Arrival)`` veya ``Kalkış (Departure) `` seçeneklerinden birini belirleyebilir.  Eğer iki input alanı da boş ise ``Uçuşları Göster (Show Flights)`` butonu devre dışı ``(disabled)`` olur ve tıklanamaz. Ancak, her iki input alanı da dolu olduğunda buton aktif hale gelir ve uçuşlar istenilen kriterlere göre filtrelenir. 

Burada uçuşlar `24.09.2024` tarihine ve `Kalkış (Departure)` yöne göre filtrelenmiştir.

##### 3.b. Uçuş bilgleri

![img-9](./client/src/assets/images/booklistdetail.jpg)

Burada listelen uçuş bilgisinin detayları yer almakta.
Yukarıdaki resimde belirtilen;

- `Mavi` renkteki alan içinde uçuş yönü gösterilmektedir. (Kalkış (Departure) - İniş (Arrival))

- `Kırmızı` renkteki alan içinde uçuşun olacağı tarih gösterilmektedir.

- `Pempe` renkteki alan içinde ise uçuşun hangi şehirler ve ülkeler arasında olduğu bilgisi gösterilmektedir.`` (Ör: Constanta-Dalaman (Bu uçuşun Romanyanın Dalaman şehrinden Türkiye'nin Muğla şehrine olduğunu gösteriyor))``


- `Gri` renkteki alan içinde uçuş yönü belirtilmektedir (Departure). Bu alanın altında ise havalimanının prefixICAO bilgisi yer almaktadır.

- `Yeşil` renkteki alanda uçuşun yapıldığı havayolu şirketinin adı ``(Corendon Dutch Airlines)`` ve ticariı uçuşun adı ``(CD283)`` yazmaktadır.

- `Kırmızı` alan içinde herhangi bir duraklama veya aktarma uçuşu durumu belirtilmiştir `Nonstop` uçuşun herhangi bir duraklama ve aktaram olmadan gerçkleşeceğini belirtir. `Connecting Flight` ise uçuşda duraklama ve aktarma olacağını belirtir. 

- `Siyah` renkteki alan içinde uçuş yönü belirtilmektedir (Arrival). Bu alanın altında ise uçuşun hangi havalimanına veya hangi havalimanların gideceği bilgisi yer almaktadır. Uçuşun rotasındaki havalimanlaro belirtilmektedir.

- `Kahverengi` alan içinde ise planlanan uçuşun saat bilgisi yer almaktadır. (Burada uçuşun yönü arrival olduğunda tahmini (estimatedLandingTime) gerçekleşecek olan iniş saati yer almakatadır)


*Not*: API'den çekilen uçuş saatleri, yerel saate göre formatlandığında, Türkiye'nin coğrafi konumundan dolayı saat farkı oluşabilmektedir.

- `Mor` renkteki alanda ise uçuşun fiyat bilgisi yer almaktadır.


- `Uçuş rezervasyonu ( Book Flight)` : kullanıcı `book flight` butonun tıklayarak uçuş rezervasyonu yapabilmektedir. Kullanıcı butona tıkladığın da ekranda bir bilgilendirme mesajı gözükmekte ve `/myFligh` sayfasın yönlendirilmekte. Kullanıcı bu sayfada rezervasyon yaptığı bütün uçuşları görebilmektedir.


| ![img-10](./client/src/assets/images/myflight.jpg) | ![img-11](./client/src/assets/images/reservation.jpg) |
| -------------------------- | -------------------------- |

Daha sonra kullanıcı sayfaya gittikten sonra uçuş kayıtlarını görüntülediğinde daha önceden uçuş reservasyonu yaptığı bir daha aynı uçuş için tekrar reservasyon yapılmasına izin verilmiyor. `Book Flight` butonu içinde `reservation made` yazısı yer alıyor ve buton devre dışı `disabled` hale geliyor.

##### 3.c Uçuşları fiyata, varış saatine, havalimanın veya  aktarmalı ve aktarmasız olma durumuna göre fitrleme

![img-12](./client/src/assets/images/sortflilter.jpg)

Buradaki alanda herhangi işlem gerçekleştirilememektedir. Tasarım için eklenmiştir.

### 4- Uçuşlarım Sayfası
Bu sayfada kullanıcı, rezervasyon yaptığı tüm uçuşların uçuş yönünü, uçuş tarihini, uçuş saatini, uçuşun servis tipini, uçuşun gerçekleştiği şehirler arasındaki bilgileri ve uçuşun fiyat durumlarını görüntüleyebilmektedir.

Kullanıcı, uçuş rezervasyonunu iptal etmek isterse, Clean Flight butonuna tıklaması yeterlidir.

![img-13](./client/src/assets/images/myFlightList.jpg)



## Kurulun

1. Clone the repository:

```javasript
git clone https://github.com/musayar9/-Flight-Apps.git
```

2. Bağımlılıkları sunucya kurun; (Install dependencies server;)

```
npm install
```

or

```
yarn
```

3. Bağımlılıkları istemciye kurun  (Install dependencies client)

```
cd client
```

```
npm install
```

or

```
yarn
```

## Kullanım

Uygulamayı çalıştırmadan önce kök dizindeki .env dosyasına aşağıdaki bilgileri ekleyin:

### 1.a) Sunucu Taraf (Server Side)

```js

MONGO_URI = "<MONGO CLUSTER>"
PORT = ``
```

### 1.b ) Sunucu tarafı ayağı kaldırma ( Run the app sever)

```
npm run start
```

or

```
yarn start
```

### 2.a) İstemci Tarafı (Client Side)

```javascript
VITE_APP_ID = "<Your Schipol Api Id> "
VITE_APP_KEY = "<Your  Schipol Api Key>"
```

### 2.b) Uygulamayı istemci tarafında ayağı kaldırın - Run the app locally:

```
npm run start
```

or

```
yarn dev
```



### Geliştirici

- Geliştici - Musa Sayar

### İletişim

<p>
<a href="https://www.linkedin.com/in/musasayar/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="musayar9" height="30" width="40" /></a>
<a href="https://medium.com/@musasayar67" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="musayar9" height="30" width="40" /></a>
</p>
