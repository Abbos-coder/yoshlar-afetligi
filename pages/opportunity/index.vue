<template>
   <section class="opportunity">
      <div class="opportunity__big-title wrapper">
         {{ $t("pages.opportunity") }}
      </div>
      <div class="opportunity__title wrapper">
         {{ $t("pages.opportunity") }}
      </div>
      <div class="page-map wrapper">
         <nuxt-link :to="localePath('/')" class="page-map__link"
            >{{ $t("pages.main") }}
         </nuxt-link>
         <img src="@/assets/img/icons/angle-r.png" alt="icon" />
         {{ $t("pages.opportunity") }}
      </div>
      <div class="opportunity__body wrapper">
         <div class="opportunity__cards">
            <nuxt-link to="opportunity/id">
               <div class="opportunity__card" data-aos="fade-right">
                  <div class="opportunity__card-body">
                     <img
                        src="@/assets/img/info-slider1.jpg"
                        alt="slider image"
                     />
                     <div class="opportunity__card-mark">
                        Yoshlar bandligini ta’minlash va rivojlantirish
                     </div>
                     <div class="opportunity__card-title">
                        Biznes sayohatlar
                     </div>
                     <div class="opportunity__card-sloy">
                        <img
                           src="@/assets/img/icons/slider-sloy.svg"
                           alt="sloy svg"
                        />
                     </div>
                  </div>
               </div>
            </nuxt-link>
            <div class="opportunity__card" data-aos="fade-up">
               <div class="opportunity__card-body">
                  <img src="@/assets/img/info-slider2.jpg" alt="slider image" />
                  <div class="opportunity__card-mark">
                     Yoshlar bandligini ta’minlash va rivojlantirish
                  </div>
                  <div class="opportunity__card-title">Biznes sayohatlar</div>
                  <div class="opportunity__card-sloy">
                     <img
                        src="@/assets/img/icons/slider-sloy.svg"
                        alt="sloy svg"
                     />
                  </div>
               </div>
            </div>
            <div class="opportunity__card" data-aos="fade-left">
               <div class="opportunity__card-body">
                  <img src="@/assets/img/info-slider1.jpg" alt="slider image" />
                  <div class="opportunity__card-mark">
                     Yoshlar bandligini ta’minlash va rivojlantirish
                  </div>
                  <div class="opportunity__card-title">Biznes sayohatlar</div>
                  <div class="opportunity__card-sloy">
                     <img
                        src="@/assets/img/icons/slider-sloy.svg"
                        alt="sloy svg"
                     />
                  </div>
               </div>
            </div>
            <div class="opportunity__card" data-aos="fade-right">
               <div class="opportunity__card-body">
                  <img src="@/assets/img/info-slider2.jpg" alt="slider image" />
                  <div class="opportunity__card-mark">
                     Yoshlar bandligini ta’minlash va rivojlantirish
                  </div>
                  <div class="opportunity__card-title">Biznes sayohatlar</div>
                  <div class="opportunity__card-sloy">
                     <img
                        src="@/assets/img/icons/slider-sloy.svg"
                        alt="sloy svg"
                     />
                  </div>
               </div>
            </div>
            <div class="opportunity__card" data-aos="fade-up">
               <div class="opportunity__card-body">
                  <img src="@/assets/img/info-slider3.jpg" alt="slider image" />
                  <div class="opportunity__card-mark">
                     Yoshlar bandligini ta’minlash va rivojlantirish
                  </div>
                  <div class="opportunity__card-title">Biznes sayohatlar</div>
                  <div class="opportunity__card-sloy">
                     <img
                        src="@/assets/img/icons/slider-sloy.svg"
                        alt="sloy svg"
                     />
                  </div>
               </div>
            </div>
            <div class="opportunity__card" data-aos="fade-left">
               <div class="opportunity__card-body">
                  <img src="@/assets/img/info-slider2.jpg" alt="slider image" />
                  <div class="opportunity__card-mark">
                     Yoshlar bandligini ta’minlash va rivojlantirish
                  </div>
                  <div class="opportunity__card-title">Biznes sayohatlar</div>
                  <div class="opportunity__card-sloy">
                     <img
                        src="@/assets/img/icons/slider-sloy.svg"
                        alt="sloy svg"
                     />
                  </div>
               </div>
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
   </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_opportunity.scss";
@import "~/assets/scss/_about.scss";
</style>
