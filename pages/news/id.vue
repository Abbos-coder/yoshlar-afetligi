<template>
   <section class="more" @mouseenter="activeBtns">
      <div class="projects__big-title wrapper">{{ $t("pages.news") }}</div>
      <div class="projects__title wrapper">{{ $t("pages.news") }}</div>
      <div class="page-map wrapper">
         <nuxt-link to="/" class="page-map__link"
            >{{ $t("pages.main") }}
         </nuxt-link>
         <img src="@/assets/img/icons/angle-r.png" alt="icon" />
         <nuxt-link to="/news" class="page-map__link">{{
            $t("pages.news")
         }}</nuxt-link>
         <img src="@/assets/img/icons/angle-r.png" alt="icon" />
         {{ $t("titles.moreDetails") }}
      </div>
      <newsBtns />
      <div class="more__body wrapper">
         <div class="more__main wrapper">
            <div class="more__main-title">
               "O'zbekiston Qahramonlari va yoshlar"
            </div>
            <div class="more__main-date">
               <img src="@/assets/img/icons/date-icon.png" alt="date icon" />
               21 Sentabr 2021
            </div>
            <div class="more__main-image">
               <div class="news-wrapp">
                  <div class="swiper-container news">
                     <!-- Additional required wrapper -->
                     <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide">
                           <img
                              src="@/assets/img/news-1.jpg"
                              alt="more image"
                           />
                        </div>
                        <div class="swiper-slide">
                           <img
                              src="@/assets/img/news-2.jpg"
                              alt="more image"
                           />
                        </div>
                        <div class="swiper-slide">
                           <img
                              src="@/assets/img/news-3.jpg"
                              alt="more image"
                           />
                        </div>
                     </div>
                     <!-- If we need pagination -->
                     <div class="swiper-pagination news__pagination"></div>

                     <!-- If we need navigation buttons -->
                     <div class="swiper-button-prev news-id__prev"></div>
                     <div class="swiper-button-next news-id__next"></div>

                     <!-- If we need scrollbar -->
                  </div>
               </div>
            </div>
            <div class="more__main-subtitle">
               <p>
                  Yoshlarning saylov haqidagi bilimlarini boy etish maqsadida
                  mamlakatimiz bo‘ylab o‘tkazilayotgan "Yosh saylovchi - 2021"
                  forumi Navoiy viloyatida.
               </p>
               <p>
                  Navoiy shahridagi “Alisher Navoiy“ nomli madaniyat va
                  istirohat bog'ida forum doirasida "O‘z kelajagimni o‘zim
                  belgilayman, Sizchi?” shiori ostida insholar tanlovi,
                  “Munozara” intellektual bellashuvi, yutuqli viktorina,
                  yoshlarning huquqiy savodxonligini aniqlashga qaratilgan “Siz
                  bilasizmi?” televizion o‘yini va "O'zbekiston uchun 100 g'oya"
                  loyihasi o‘tkazildi.
               </p>
               <p>
                  Navoiy yosh saylovchilariga saylov jarayoni haqida muntazam
                  ma’lumot berib boruvchi yoshsaylovchi.uz elektron platformasi
                  haqida ma'lumotlar berildi.
               </p>
               <p>
                  "Yosh saylovchi" forumi bugun Samarqand viloyatida davom
                  etadi. 16-sentabr kuni “Adiblar xiyoboni”da loyihaning so‘nggi
                  finali bo‘lib o‘tdi. Respublika bosqichida ishtirok etgan 67
                  nafar ishtirokchidan saralangan 10 nafar ijodkorlar 4 ta –
                  nazm, nasr, badiiy tarjima, tasviriy san’at yo‘nalishi
                  finalchilari bellashdilar.
               </p>
            </div>
            <div class="more__main-line">
               <img src="@/assets/img/icons/about-line.svg" alt="line svg" />
            </div>
            <div class="more__main-icons">
               <a href="#"
                  ><img src="@/assets/img/icons/twitter.png" alt="twitter icon"
               /></a>
               <a href="#"
                  ><img
                     src="@/assets/img/icons/facebook.png"
                     alt="facebook icon"
               /></a>
               <a href="#"
                  ><img
                     src="@/assets/img/icons/instagram.png"
                     alt="instagram icon"
               /></a>
            </div>
         </div>
         <div class="leadership-id__main-names">
            <p>SO’NGI YANGLIKLAR</p>
            <div class="news-cards__id">
               <div class="news__card-double1">
                  <img
                     src="@/assets/img/news-2.jpg"
                     alt="news image"
                     class="news__card-img"
                  />
                  <div class="news__content-double1">
                     <div class="news__card-title title">
                        "Yosh saylovchi - 2021" forumi Samarqandda!
                     </div>

                     <div class="news__card-date">
                        <img src="@/assets/img/icons/date-icon.svg" alt="" />
                        21 Sentabr 2021
                     </div>
                  </div>
                  <img
                     class="news__play"
                     src="@/assets/img/icons/play-icon.svg"
                     alt="play icon"
                     v-b-modal.play-2
                  />

                  <b-modal id="play-2" title="News video">
                     <p class="my-4">This is video!</p>
                  </b-modal>
               </div>
               <div class="news__card-double1">
                  <img
                     src="@/assets/img/news-3.jpg"
                     alt="news image"
                     class="news__card-img"
                  />
                  <div class="news__content-double1">
                     <div class="news__card-title title">
                        "Yosh saylovchi - 2021" forumi Samarqandda!
                     </div>

                     <div class="news__card-date">
                        <img src="@/assets/img/icons/date-icon.svg" alt="" />
                        21 Sentabr 2021
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="related">
         <div class="projects__big-title wrapper">
            {{ $t("titles.subject") }}
         </div>
         <div class="projects__title wrapper">{{ $t("titles.subject") }}</div>
         <div class="related__cards wrapper">
            <div class="news__card-double1" data-aos="fade-left">
               <img
                  src="@/assets/img/news-2.jpg"
                  alt="news image"
                  class="news__card-img"
               />
               <div class="news__content-double1">
                  <div class="news__card-title title">
                     "Yosh saylovchi - 2021" forumi Samarqandda!
                  </div>

                  <div class="news__card-date">
                     <img src="@/assets/img/icons/date-icon.svg" alt="" />
                     21 Sentabr 2021
                  </div>
               </div>
               <img
                  class="news__play"
                  src="@/assets/img/icons/play-icon.svg"
                  alt="play icon"
                  v-b-modal.play-1
               />

               <b-modal id="play-1" title="News video">
                  <p class="my-4">This is video!</p>
               </b-modal>
            </div>
            <div class="news__card-double1" data-aos="fade-down">
               <img
                  src="@/assets/img/news-3.jpg"
                  alt="news image"
                  class="news__card-img"
               />
               <div class="news__content-double1">
                  <div class="news__card-title title">
                     "Yosh saylovchi - 2021" forumi Samarqandda!
                  </div>

                  <div class="news__card-date">
                     <img src="@/assets/img/icons/date-icon.svg" alt="" />
                     21 Sentabr 2021
                  </div>
               </div>
               <b-modal id="play" title="News video">
                  <p class="my-4">This is video!</p>
               </b-modal>
            </div>
            <div class="news__card-double1" data-aos="fade-right">
               <img
                  src="@/assets/img/news-3.jpg"
                  alt="news image"
                  class="news__card-img"
               />
               <div class="news__content-double1">
                  <div class="news__card-title title">
                     "Yosh saylovchi - 2021" forumi Samarqandda!
                  </div>

                  <div class="news__card-date">
                     <img src="@/assets/img/icons/date-icon.svg" alt="" />
                     21 Sentabr 2021
                  </div>
               </div>
            </div>
            <div class="news__card-double1" data-aos="fade-left">
               <img
                  src="@/assets/img/news-3.jpg"
                  alt="news image"
                  class="news__card-img"
               />
               <div class="news__content-double1">
                  <div class="news__card-title title">
                     "Yosh saylovchi - 2021" forumi Samarqandda!
                  </div>

                  <div class="news__card-date">
                     <img src="@/assets/img/icons/date-icon.svg" alt="" />
                     21 Sentabr 2021
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import newsBtns from "../../components/newsBtns.vue";

import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use(Navigation, Pagination);
import "swiper/swiper-bundle.css";

export default {
   components: { newsBtns },
   data() {
      return {};
   },
   mounted() {
      let swiper = new Swiper(".news", {
         modules: [Navigation, Pagination],
         slidesPerView: 1,
         spaceBetween: 0,
         keyboard: {
            enabled: true,
            onlyInViewport: false,
         },
         loop: true,
         // using "ratio" endpoint
         navigation: {
            nextEl: ".news-id__next",
            prevEl: ".news-id__prev",
         },
         pagination: {
            el: ".news__pagination",
            clickable: true,
            // renderBullet: function(index, className) {
            //    return `<span class="dot swiper-pagination-bullet"></span>`;
            // },
         },
      });
   },
   methods: {
      activeBtns() {
         const thisBtn = document.querySelector(".one");
         console.log(thisBtn);
         thisBtn.classList.add("active");
      },
   },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_projects.scss";
@import "~/assets/scss/_about.scss";
@import "~/assets/scss/_opportunity.scss";
.more__body {
   display: flex;
   gap: 30px;
}
.projects__title {
   margin-bottom: 50px;
}
.more__main-title {
   margin-top: 0;
}
.more__main-date {
   margin-top: 10px;
}
.leadership-id__main-names {
   max-height: 100%;
   background: transparent;
   box-shadow: none;
   padding-top: 100px;
   p {
      text-align: center;
   }
}
.news__card-double1 {
   margin-bottom: 20px;
}
.news-cards__id {
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 20px;
   margin: 0px 0px 0px 0px;
   @media (max-width: 768px) {
      flex-direction: row;
   }
   @media (max-width: 414px) {
      flex-direction: column;
   }
}

// slider style
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
   bottom: 110px !important;
}
.swiper-pagination-bullet {
   width: 14px;
   height: 14px;
   display: inline-block;
   border-radius: 50%;
   background: #000;
   opacity: 0.2;
}

.news-wrapp {
   max-width: 802px;
   width: 100%;
   max-height: 600px;
   // margin: 0 25px;
}
.swiper-container {
   width: 100%;
   overflow: hidden;
   @media (max-width: 768px) {
      width: 90%;
   }
}

.swiper-slide {
   max-width: 802px;
   width: 100%;
   max-height: 550px;

   position: relative;
   background-size: cover;
   background-position: 50%;
   min-height: 20vh;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   color: #ffffff;
   overflow: hidden;
   background: linear-gradient(180deg, #20a3bf 0%, #354967 100%);
   // min-height: 596px;
   position: relative;
   z-index: 2;
   // margin-bottom: 100px;
   padding: 0 !important;
   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
   }
}
</style>
