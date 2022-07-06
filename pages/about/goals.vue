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
         <div class="goals__main-title">{{ $t("aboutPages.goals") }}</div>
         <div class="goals__cards">
            <div class="goals__card">
               <div class="goals__card-number">1</div>
               <div class="goals__content">
                  <div class="goals__title">Yoshlar va tadbirkorlik</div>
                  <div class="goals__subtitle">
                     Yoshlarni kichik biznes va xususiy tadbirkorlikka keng jalb
                     etish, zamonaviy kasb-hunarlar, raqamli iqtisodiyot
                     ko‘nikmalarini puxta egallashlari uchun qo‘shimcha
                     shart-sharoitlar yaratish, ularni ish bilan taʼminlash
                     jarayonlariga ko‘maklashish
                  </div>
               </div>
            </div>

            <div class="goals__card">
               <div class="goals__card-number">2</div>
               <div class="goals__content">
                  <div class="goals__title">Ijtimoiy himoya</div>
                  <div class="goals__subtitle">
                     Tarbiya muassasalarini tamomlagan yetim va ota-onasining
                     qaramog‘idan mahrum bo‘lgan yoshlarning ijtimoiy-huquqiy
                     himoyasini tashkil etish va bandligini taʼminlash
                  </div>
               </div>
            </div>

            <div class="goals__card">
               <div class="goals__card-number">3</div>
               <div class="goals__content">
                  <div class="goals__title">Kuchli yoshlar</div>
                  <div class="goals__subtitle">
                     Yoshlar bilan bog‘liq soha va yo‘nalishlarda yagona davlat
                     siyosati, strategik yo‘nalishlar va davlat dasturlarini
                     ishlab chiqish hamda amalga oshirish
                  </div>
               </div>
            </div>
            <div class="goals__card">
               <div class="goals__card-number">4</div>
               <div class="goals__content">
                  <div class="goals__title">Yoshlar va tadbirkorlik</div>
                  <div class="goals__subtitle">
                     Yoshlarni kichik biznes va xususiy tadbirkorlikka keng jalb
                     etish, zamonaviy kasb-hunarlar, raqamli iqtisodiyot
                     ko‘nikmalarini puxta egallashlari uchun qo‘shimcha
                     shart-sharoitlar yaratish, ularni ish bilan taʼminlash
                     jarayonlariga ko‘maklashish
                  </div>
               </div>
            </div>

            <div class="goals__card">
               <div class="goals__card-number">5</div>
               <div class="goals__content">
                  <div class="goals__title">Ijtimoiy himoya</div>
                  <div class="goals__subtitle">
                     Tarbiya muassasalarini tamomlagan yetim va ota-onasining
                     qaramog‘idan mahrum bo‘lgan yoshlarning ijtimoiy-huquqiy
                     himoyasini tashkil etish va bandligini taʼminlash
                  </div>
               </div>
            </div>

            <div class="goals__card">
               <div class="goals__card-number">6</div>
               <div class="goals__content">
                  <div class="goals__title">Kuchli yoshlar</div>
                  <div class="goals__subtitle">
                     Yoshlar bilan bog‘liq soha va yo‘nalishlarda yagona davlat
                     siyosati, strategik yo‘nalishlar va davlat dasturlarini
                     ishlab chiqish hamda amalga oshirish
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
</style>
