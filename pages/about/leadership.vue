<template>
   <section class="goals">
      <div class="aboutagents__big-title">{{ $t("pages.about") }}</div>
      <div class="aboutagents__title">{{ $t("pages.about") }}</div>
      <div class="page-map wrapper">
         <nuxt-link :to="localePath('/')" class="page-map__link">{{
            $t("pages.main")
         }}</nuxt-link>
         <img src="@/assets/img/icons/angle-r.png" alt="icon" />
         {{ $t("pages.about") }}
      </div>
      <AboutBtns />
      <div class="goals__body wrapper">
         <div class="goals__main-title">{{ $t("aboutPages.leadership") }}</div>

         <div class="leadership">
            <div class="leadership__cards">
               <nuxt-link :to="localePath('/about/idleadership')">
                  <div class="leadership__card">
                     <div class="leadership__card-image">
                        <img
                           src="@/assets/img/about-leadership1.jpg"
                           alt="leader image"
                        />
                        <div class="leadership__leader-name">
                           <p>
                              Nazirov Abdulaziz <br />
                              Abdurasul o‘g‘li
                           </p>
                           <div class="leadership__leader-icons">
                              <i class="fab fa-instagram"></i>
                              <i class="fab fa-whatsapp"></i>
                              <i class="fab fa-facebook-f"></i>
                           </div>
                        </div>
                     </div>
                     <div class="leadership__card-info">
                        O‘zbekiston Respublikasi Yoshlar ishlari agentligi
                        Toshkent shahar boshqarmasi boshlig‘i
                     </div>
                  </div>
               </nuxt-link>

               <div class="leadership__card">
                  <div class="leadership__card-image">
                     <img
                        src="@/assets/img/about-leadership2.jpg"
                        alt="leader image"
                     />
                     <div class="leadership__leader-name">
                        <p>
                           Nazirov Abdulaziz <br />
                           Abdurasul o‘g‘li
                        </p>
                        <div class="leadership__leader-icons">
                           <i class="fab fa-instagram"></i>
                           <i class="fab fa-whatsapp"></i>
                           <i class="fab fa-facebook-f"></i>
                        </div>
                     </div>
                  </div>
                  <div class="leadership__card-info">
                     O‘zbekiston Respublikasi Yoshlar ishlari agentligi Toshkent
                     shahar boshqarmasi boshlig‘i
                  </div>
               </div>
               <div class="leadership__card">
                  <div class="leadership__card-image">
                     <img
                        src="@/assets/img/about-leadership3.jpg"
                        alt="leader image"
                     />
                     <div class="leadership__leader-name">
                        <p>
                           Nazirov Abdulaziz <br />
                           Abdurasul o‘g‘li
                        </p>
                        <div class="leadership__leader-icons">
                           <i class="fab fa-instagram"></i>
                           <i class="fab fa-whatsapp"></i>
                           <i class="fab fa-facebook"></i>
                        </div>
                     </div>
                  </div>
                  <div class="leadership__card-info">
                     O‘zbekiston Respublikasi Yoshlar ishlari agentligi Toshkent
                     shahar boshqarmasi boshlig‘i
                  </div>
               </div>
               <div class="leadership__card">
                  <div class="leadership__card-image">
                     <img
                        src="@/assets/img/about-leadership4.jpg"
                        alt="leader image"
                     />
                     <div class="leadership__leader-name">
                        <p>
                           Nazirov Abdulaziz <br />
                           Abdurasul o‘g‘li
                        </p>
                        <div class="leadership__leader-icons">
                           <i class="fab fa-instagram"></i>
                           <i class="fab fa-whatsapp"></i>
                           <i class="fab fa-facebook-f"></i>
                        </div>
                     </div>
                  </div>
                  <div class="leadership__card-info">
                     O‘zbekiston Respublikasi Yoshlar ishlari agentligi Toshkent
                     shahar boshqarmasi boshlig‘i
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import AboutBtns from "@/components/AboutBtns.vue";
export default {
   components: { AboutBtns },
   methods: {},
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_about.scss";
.leadership__cards a {
   text-decoration: none;
}
</style>
