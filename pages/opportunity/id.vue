<template>
   <section class="more">
      <div class="projects__big-title wrapper">
         {{ $t("pages.opportunity") }}
      </div>
      <div class="projects__title wrapper">{{ $t("pages.opportunity") }}</div>
      <div class="page-map wrapper">
         <nuxt-link :to="localePath('/')" class="page-map__link"
            >{{ $t("pages.main") }}
         </nuxt-link>
         <img src="@/assets/img/icons/angle-r.png" alt="icon" />
         <nuxt-link :to="localePath('/opportunity')" class="page-map__link"
            >{{ $t("pages.opportunity") }}
         </nuxt-link>
         <img src="@/assets/img/icons/angle-r.png" alt="icon" />
         {{ $t("titles.moreDetails") }}
      </div>
      <div class="more__body wrapper">
         <div class="more__main">
            <div class="more__main-title">
               "O'zbekiston Qahramonlari va yoshlar"
            </div>
            <div class="more__main-date">
               <img src="@/assets/img/icons/date-icon.png" alt="date icon" />
               21 Sentabr 2021
            </div>
            <div class="more__main-image">
               <img src="@/assets/img/news-1.jpg" alt="more image" />
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
            <p>IMkoniyatlar</p>
            <a href="#" class="leadership-id__main-links names-active"
               >Besh Tashabbus loyihalarini muvofiqlashtirish</a
            ><a href="#" class="leadership-id__main-links"
               >Yoshlarga oid qonunchilik tashabbuslari va huquqiy savodxonlikni
               oshirish bo‘limi</a
            ><a href="#" class="leadership-id__main-links"
               >Fuqarolar murojati bo'limi</a
            ><a href="#" class="leadership-id__main-links"
               >Yoshlarni ijtimoiy himoya qilish va sog‘lom turmush tarzini
               targ‘ib qilish bo‘limi</a
            ><a href="#" class="leadership-id__main-links"
               >Yoshlarga oid qonunchilik tashabbuslari va huquqiy savodxonlikni
               oshirish bo‘limi</a
            ><a href="#" class="leadership-id__main-links"
               >Davlat va xo'jalik boshqaruv organlarida yoshlar siyosatini
               muvofiqlashtirish boshqarmasi
            </a>
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
                  v-b-modal.play
               />

               <b-modal id="play" title="News video">
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
               <!-- <img
            class="news__play"
            src="@/assets/img/icons/play-icon.svg"
            alt="play icon"
            v-b-modal.play
          /> -->

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
export default {};
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
</style>
