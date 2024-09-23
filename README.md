## Plane Scape

## Sunucu Tarafında Kullanılan Teknolojiler

![NodeJs](https://img.shields.io/badge/Nodejs-20.9.0-yellowgreen)
![bcryptjs](https://img.shields.io/badge/bcryptjs-2.4.3-green)
![cookie-parser](https://img.shields.io/badge/cookie--parser-1.4.6-red)
![cors](https://img.shields.io/badge/cors-2.8.5-orange)
![dotenv](https://img.shields.io/badge/dotenv-16.4.5-brightgreen)
![express](https://img.shields.io/badge/express-4.18.2-lightblue)
![mongodb](https://img.shields.io/badge/mongodb-6.3.0-darkgreen)
![mongoose](https://img.shields.io/badge/mongoose-8.2.0-darkred)
![nodemon](https://img.shields.io/badge/nodemon-3.1.0-gold)

## İstemci Tarafında Kullanılan Teknolojiler

![reduxjs/toolkit](https://img.shields.io/badge/reduxjs/toolkit-2.2.1-green)
![autoprefixer](https://img.shields.io/badge/autoprefixer-10.4.17-yellow)
![axios](https://img.shields.io/badge/axios-1.6.7-blue)
![flowbite-react](https://img.shields.io/badge/flowbite--react-0.7.2-orange)
![postcss](https://img.shields.io/badge/postcss-8.4.35-purple)
![prop-types](https://img.shields.io/badge/prop--types-15.8.1-brightgreen)
![react](https://img.shields.io/badge/react-18.2.0-lightblue)
![react-dom](https://img.shields.io/badge/react--dom-18.2.0-lightgrey)
![react-icons](https://img.shields.io/badge/react--icons-5.0.1-darkgreen)
![react-loader-spinner](https://img.shields.io/badge/react--loader--spinner-6.1.6-darkred)
![react-redux](https://img.shields.io/badge/react--redux-9.1.0-pink)
![react-router-dom](https://img.shields.io/badge/react--router--dom-6.22.1-gold)
![redux-persist](https://img.shields.io/badge/redux--persist-6.0.0-silver)
![tailwindcss](https://img.shields.io/badge/tailwindcss-3.4.1-lightgreen)


## Giriş
Bu uygulama, kullanıcıların uçak bileti rezervasyonu yapmalarını ve bilet satın almalarını sağlayan bir platformdur. Kullanıcılar, uçuşları tarih ve gidiş yönüne göre filtreleyebilir, uygun uçuşları kolayca bulabilirler. Ayrıca, uçuş rezervasyonları yapabilme ve mevcut rezervasyonları iptal etme imkânı da sunulmaktadır.

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

Kullanıcı başarılı bir şekilde sisteme giriş yaptıktan sonra Anasayfaya yönlendirilmekte. Bu sayfada bütün uçuş kayıtlarını görüntüleyebilemkte. Uçuşları tarih ve hareket yönüne göre filtreleyebilmekte. Ve uçuş rezervasyonu yapabilmektedir.

#### 3.a. Tarihe ve Hareket Yönüne göre uçuşları filtrleme


| ![img-7](./client/src/assets/images/bookflight.jpg) | ![img-8](./client/src/assets/images/bookflightflilter.jpg) |
| -------------------------- | -------------------------- |

Bu alanda kullanıcı, sağlanan iki input alanı ile uçuşları filtreleyebilmektedir. Kullanıcı, öncelikle ``Tarih (Date)`` alanına filtrelemek istediği tarihi girer. Ardından, ``Uçuş Yönü (FlightDirection) ``alanında uçuş yönünü seçer. Bu alanda bir select menüsü açılır ve kullanıcı ``İniş (Arrival)`` veya ``Kalkış (Departure) `` seçeneklerinden birini belirleyebilir.  Eğer iki input alanı da boş ise ``Uçuşları Göster (Show Flights)`` butonu devre dışı ``(disabled)`` olur ve tıklanamaz. Ancak, her iki input alanı da dolu olduğunda buton aktif hale gelir ve uçuşlar istenilen kriterlere göre filtrelenir. 

Burada uçuşlar `24.09.2024` tarihine ve `Kalkış (Departure)` yöne göre filtrelenmiştir.

#### 3.b. Uçuş bilgleri

![img-9](./client/src/assets/images/booklistdetail.jpg)

Burada listelen uçuş bilgisinin detayları yer almakta.
Yukarıdaki resimde belirtilen;

- `Mavi` renkteki alan içinde uçuş yönü gösterilmektedir. (Kalkış (Departure) - İniş (Arrival))

- `Kırmızı` renkteki alan içinde uçuşun olacağı tarih gösterilmektedir.

- `Pempe` renkteki alan içinde ise uçuşun hangi şehirler ve ülkeler arasında olduğu bilgisi gösterilmektedir. (Ör: Constanta-Dalaman (Bu uçuşun Romanyanın Dalaman şehrinden Türkiye'nin Muğla şehrine olduğunu gösteriyor))