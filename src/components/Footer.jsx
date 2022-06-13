import { Warning } from 'postcss'
import React from 'react'
import { Link } from 'react-router-dom'
// import AppStoreIMG from '../assets/img/AppStore.png'
import MessegeButton from './MessegeButton'
import TopButton from './TopButton'
import WarningToastify from './WarningToastify'

const Footer = () => {
  return (
    <div className="bg-zinc-800 pt-5 overflow-hidden">
      <div className="container-full lg:py-9 py-0">
        <WarningToastify />
        <MessegeButton />
        <TopButton />
        <div className="socials">
          <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-10">
            <div className="grid grid-cols-2 gap-5">
              <div className="block text-white">
                <Link to={"/"} className='text-red-600 font-bold lg:text-4xl text-2xl'>olma.uz</Link>
                <div className="block w-full">
                  <p className='text-white text-sm mt-5'>Телефон поддержки</p>
                  <p className='text-white text mt-2 font-medium'>+998 (94) 554 55 94</p>
                </div>
              </div>
              <div className="text-white">
                <div className='m-5 cursor-pointer flex items-center' >
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                  <p className="ml-2 text-lg">Facebook</p>
                </div>
                <div className='m-5 cursor-pointer flex items-center' >
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                  <p className="ml-2 text-lg">Instagram</p>
                </div>
                <div className='m-5 cursor-pointer flex items-center' >
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                  </svg>
                  <p className="ml-2 text-lg">Telegram</p>
                </div>
              </div>
              <div className="w-full flex">
                <img
                  className='mx-1 object-cover max-h-8 w-52 cursor-pointer'
                  src="https://olcha.uz/_nuxt/img/appstore.367673c.png"
                  alt="appstore"
                />
                <img
                  className='mx-1 object-cover max-h-8 w-52 cursor-pointer'
                  src="https://olcha.uz/_nuxt/img/googleplay.c20cdde.png"
                  alt="googleplay"
                />
              </div>
            </div>
            <div className="block">
              <h1 className="text-red-600 text-xl lg:mt-0 mt-2 font-semibold">Информация</h1>
              <p className="text-white text-base cursor-pointer mt-3">О компании</p>
              <p className="text-white text-base cursor-pointer mt-2">Вакансии</p>
              <p className="text-white text-base cursor-pointer mt-3">Публичная оферта</p>
              <p className="text-white text-base cursor-pointer mt-3">Возврат и обмен товаров</p>
              <p className="text-white text-base cursor-pointer mt-3">Условия рассрочки</p>
              <p className="text-white text-base cursor-pointer mt-3">Оплатить онлайн</p>
              <h1 className="text-red-600 text-xl font-semibold mt-4">О нас</h1>
              <p className="text-white text-base cursor-pointer mt-2">Оставить отзыв</p>
              <p className="text-white text-base cursor-pointer mt-2">Адрес</p>

            </div>
            <div className="block mt-10">
              <h1 className="text-white font-light">Eco-friendly</h1>
              <p className="text-white text-base cursor-pointer font-semibold mt-3">
                Политика обработки персональных данных
              </p>
              <p className="text-white text-base cursor-pointer font-semibold mt-3">
                Оплата и Доставка Товара</p>
              <p className="text-white text-base cursor-pointer font-semibold mt-3">
                Бонусы и акции</p>
              <p className="text-white text-base cursor-pointer font-semibold mt-3">
                Сервисные центры</p>
              <h1 className="text-white text-base cursor-pointer font-semibold mt-9">Контакты</h1>
              <p className='text-white text-base cursor-pointer font-semibold mt-3'>
                Info@olcha.uz</p>
            </div>
            <ul className="grid grid-cols-3 gap-x-6 gap-y-4 h-min mt-9">
              <li className='bg-white px-4 h-16 rounded-md flex justify-center ites cursor-pointer'>
                <a

                  className=''
                  href="https://apelsin.uz/"
                  target="_blank">
                  <img
                    width="80"
                    height="56"
                    src="https://olcha.uz/_nuxt/img/apelsin.93106ae.png"
                    alt="apelsin"
                    className="w-24 h-14 object-contain rounded-sm" />
                </a>
              </li>
              <li className='bg-white px-4 h-16 rounded-md flex justify-center ites cursor-pointer'>
                <a
                  className=''
                  href="https://apelsin.uz/"
                  target="_blank">
                  <img
                    width="80"
                    height="56"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAjCAMAAADrNwfvAAAArlBMVEUAAAAAPYcAPocAPYcAO4UAOYUANYYAPocAPIYAPYcAP4YAPIYAP4gAPocAPogAPocAPoUAQnYAOoUAPoYAPYcAPYYAPocAPYYAPocAPocAPYcAPocAPocAPYcAPocAPoUAPocAPYcAPoYAPokAPYYAPocAPocAPYYAPocAPYcAPogAPocAPYcAPof/hgD/gAAAPYgAPYYAPYf/iQD/hwD/igAAO4T/gAAAPof/iAAXwlIsAAAAOHRSTlMA/fmHGikJwSXzeFmnk3TrIAMWgmUP5bh9793Ww2lLQNCccDk0y4xFq2BSLqOVaQa7s5OG5MQeEsvbhOMAAAIkSURBVEjH3ZRpz6IwEIDbUgtF5RBEFA8Q72N9jz3G///HFmZqSMy7yQb5sNnnA5kp7UNnKLA/YQEyoMz25ef9fv/G2vDsguj2ozPXtPz1+b0jF+hY3W7duCryouzGhSz+Z1ffQ85duEYSUf9aja+5IkAOlM0pO7ZzuYDMMVEZZad2riMgPrbb0ZS1fI+lAMSrk5Rirdq51AwQYW02lvFuWUuuYBAcDGlbVyDgCX/E2pI+qXiftUbtwGAax17hOGtU2Yq9Rngq8qnWib3bh6wDQvU3mvJjKFk3jGbAe0z1al+IVzbuIWYj4/0STwHdcWiU5oyNogqDelz64EsWcLuKHT5hFWuOOLhmqAHEVdEqi/MlRX1eIS5odus4sVQ1+tZnLIB549p4nvdGZzK8QL6I5xDR+UiEOBgXTLw0gzW6YODtcnhH8ZOrjhLawF5ksipiTVUuocj0yLiiOr+QK67m5LD60qVs+MDAoycT4USsLFgb19U5F5AaF/6eoi9dEdjKfEFx4zrrXDliq8glhOAzp3GdYPdwbetGwTvVon2HxmP6PZPYhW0UTcWGXLalfckal/V47HjG++NgABaKM+5KKWlcuKPxwo9r4ZbrCige/bIgNS5X9lLhB4yIhZj5kGFj1wDTirKOVxqShPu9OqxKcpySJ8q4ZOL/JJeeCkiaT3VV2BOP9rwfIg5V707stIdbGZ5w5TCo2zFc1m09hGb+ri8Z8RuJv2K4FAf4iAAAAABJRU5ErkJggg=="
                    alt="apelsin"
                    className="w-24 h-14 object-contain rounded-sm" />
                </a>
              </li>
              <li className='bg-white px-4 h-16 rounded-md flex justify-center ites cursor-pointer'>
                <a
                  className=''
                  href="https://apelsin.uz/"
                  target="_blank">
                  <img
                    width="80"
                    height="56"
                    src="https://olcha.uz/_nuxt/img/payme.e57aa2a.png"
                    alt="apelsin"
                    className="w-24 h-14 object-contain rounded-sm" />
                </a>
              </li>
              <li className='bg-white px-4 h-16 rounded-md flex justify-center ites cursor-pointer'>
                <a
                  className=''
                  href="https://apelsin.uz/"
                  target="_blank">
                  <img
                    width="80"
                    height="56"
                    src="https://olcha.uz/_nuxt/img/click.93445f6.png"
                    alt="apelsin"
                    className="w-24 h-14 object-contain rounded-sm" />
                </a>
              </li>
              <li className='bg-white px-4 h-16 rounded-md flex justify-center ites cursor-pointer'>
                <a
                  className=''
                  href="https://apelsin.uz/"
                  target="_blank">
                  <img
                    width="80"
                    height="56"
                    src="https://olcha.uz/_nuxt/img/humo.7dc7e40.jpeg"
                    alt="apelsin"
                    className="w-24 h-14 object-contain rounded-sm" />
                </a>
              </li>
              <li className='bg-white px-4 h-16 rounded-md flex justify-center ites cursor-pointer'>
                <a
                  className=''
                  href="https://apelsin.uz/"
                  target="_blank">
                  <img
                    width="80"
                    height="56"
                    src="https://olcha.uz/_nuxt/img/logo-paynet.48b4b59.png"
                    alt="apelsin"
                    className="w-24 h-14 object-contain rounded-sm" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-t-zinc-900 lg:py-5 pb-20 py-3 mt-4 flex justify-center flex-col items-center">
        <span className="text-lg text-white">© {new Date().getFullYear()} All Rights Reserved.</span>
        <p className="text-lg text-white">Azizbek Yunusov</p>
      </div>
    </div>
  )
}

export default Footer