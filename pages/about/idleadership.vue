<template>
   <section class="leadership-id">
      <div class="aboutagents__big-title">{{ $t("pages.about") }}</div>
      <div class="aboutagents__title">{{ $t("pages.about") }}</div>
      <div class="page-map wrapper">
         <nuxt-link :to="localePath('/')" class="page-map__link">{{
            $t("pages.main")
         }}</nuxt-link>
         <img src="@/assets/img/icons/angle-r.png" alt="icon" />
         <nuxt-link :to="localePath('/about/leadership')" class="page-map__link"
            >{{ $t("pages.about") }}
         </nuxt-link>
         <img src="@/assets/img/icons/angle-r.png" alt="icon" />
         {{ $t("aboutPages.leadership") }}
      </div>
      <div class="leadership-id__body wrapper">
         <div class="leadership-id__main">
            <div class="leadership-id__main-img">
               <img src="@/assets/img/about-leadership1.jpg" alt="user image" />
            </div>
            <div class="leadership-id__main-fullinfo">
               <div class="leadership-id__main-title">
                  Nazirov Abdulaziz Abdurasul o‘g‘li
               </div>
               <div class="leadership-id__main-subtitle">
                  O‘zbekiston Respublikasi Yoshlar ishlari agentligi Toshkent
                  shahar boshqarmasi boshlig‘i
               </div>
               <div class="leadership-id__main-content">
                  <p>Telefon: <span>+998 71 246-10-70</span></p>
                  <p>Pochta: <span>yia.tashkentcity@exat.uz</span></p>
                  <p>
                     Fuqarolar qabul kunlari:
                     <span>Dushanba - Shanba 10.00-12.00 </span>
                  </p>
                  <div class="leadership-id__messangers">
                     <i class="fab fa-facebook-f"></i>
                     <i class="fab fa-whatsapp"></i>
                     <i class="fab fa-instagram"></i>
                  </div>
               </div>
            </div>
            <div class="leadership-id__main-names">
               <p>Jamoatchilik kengashi</p>
               <a href="#" class="leadership-id__main-links names-active"
                  >Nazirov Abdulaziz Abdurasul o‘g‘li</a
               ><a href="#" class="leadership-id__main-links"
                  >Abduqodirov Nodir Abduqayumovich</a
               ><a href="#" class="leadership-id__main-links"
                  >Ashurov Sarvar G'aniyevich</a
               ><a href="#" class="leadership-id__main-links"
                  >Kattaxanova Dilnozaxon Sobir qizi</a
               ><a href="#" class="leadership-id__main-links"
                  >Omonov Farruh Farxodjonovich</a
               ><a href="#" class="leadership-id__main-links"
                  >Axmedov Qobuljon Xoliqovich
               </a>
            </div>
         </div>

         <div class="leadership-id__work">
            <div class="leadership-id__work-title">Ish faoliyati</div>
            <div class="leadership-id__work-subtitle">
               2019-2020 yy. - Oʻzbekiston yoshlar ittifoqi Toshkent shahar
               hududiy Kengashi raisining birinchi oʻrinbosari
            </div>
         </div>
         <div class="leadership-id__functional">
            <div class="leadership-id__functional-title">
               vAZIFA VA FUNKSIYALARI
            </div>
            <div class="leadership-id__functional-subtitle">
               2019-2020 yy. - Oʻzbekiston yoshlar ittifoqi Toshkent shahar
               hududiy Kengashi raisining birinchi oʻrinbosari
            </div>
            <img
               src="@/assets/img/icons/about-line.svg"
               alt="line"
               class="leadership-id__line"
            />
         </div>
      </div>
   </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_about.scss";
</style>
