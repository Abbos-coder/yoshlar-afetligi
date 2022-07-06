<template>
   <section class="more">
      <div class="more__body wrapper">
         <div class="projects__big-title">{{ $t("pages.projects") }}</div>
         <div class="projects__title">{{ $t("pages.projects") }}</div>
         <div class="page-map wrapper">
            <nuxt-link :to="localePath('/')" class="page-map__link"
               >{{ $t("pages.main") }}
            </nuxt-link>
            <img src="@/assets/img/icons/angle-r.png" alt="icon" />
            <nuxt-link :to="localePath('/projects')" class="page-map__link"
               >{{ $t("pages.projects") }}
            </nuxt-link>
            <img src="@/assets/img/icons/angle-r.png" alt="icon" />
            {{ $t("titles.moreDetails") }}
         </div>
         <div class="more__main">
            <div class="more__main-title">
               "Imtihon topshirish xarajati kompensatsiya qilinadigan xalqaro
               imtihon tizimlari
            </div>
            <div class="more__main-date">
               <img src="@/assets/img/icons/date-icon.png" alt="date icon" />
               21 Sentabr 2021
            </div>
            <div class="more__main-image">
               <img
                  src="@/assets/img/projects/projects-id.png"
                  alt="more image"
               />
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
      </div>
   </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_projects.scss";
</style>
