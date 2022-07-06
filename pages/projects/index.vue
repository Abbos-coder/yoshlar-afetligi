<template>
   <section class="projects">
      <div class="projects__body wrapper">
         <div class="projects__big-title">{{ $t("pages.projects") }}</div>
         <div class="projects__title">{{ $t("pages.projects") }}</div>
         <div class="page-map wrapper">
            <nuxt-link :to="localePath('/')" class="page-map__link"
               >{{ $t("pages.main") }}
            </nuxt-link>
            <img src="@/assets/img/icons/angle-r.png" alt="icon" />
            {{ $t("pages.projects") }}
         </div>

         <div class="projects__blocks">
            <div class="projects__block one" data-aos="fade-right">
               <img
                  src="@/assets/img/projects/projects1.jpg"
                  alt="projects image"
               />
               <div class="projects__grid-content"></div>
               <div class="projects__grid-mark">Ta’lim</div>
               <nuxt-link to="projects/id" class="projects__grid-subtitle">
                  Imtihon topshirish xarajati kompensatsiya qilinadigan xalqaro
                  imtihon tizimlari
               </nuxt-link>
            </div>
            <div class="projects__block two" data-aos="fade-left">
               <img
                  src="@/assets/img/projects/projects2.jpg"
                  alt="projects image"
               />
               <div class="projects__grid-content"></div>
               <div class="projects__grid-mark">Ta’lim</div>
               <div class="projects__grid-subtitle">
                  Imtihon topshirish xarajati kompensatsiya qilinadigan xalqaro
                  imtihon tizimlari
               </div>
            </div>
            <div class="projects__block three" data-aos="fade-right">
               <img
                  src="@/assets/img/projects/projects3.jpg"
                  alt="projects image"
               />
               <div class="projects__grid-content"></div>
               <div class="projects__grid-mark">Ta’lim</div>
               <div class="projects__grid-subtitle">
                  Imtihon topshirish xarajati kompensatsiya qilinadigan xalqaro
                  imtihon tizimlari
               </div>
            </div>
            <div class="projects__block four" data-aos="fade-up">
               <img
                  src="@/assets/img/projects/projects4.jpg"
                  alt="projects image"
               />
               <div class="projects__grid-content"></div>
               <div class="projects__grid-mark">Ta’lim</div>
               <div class="projects__grid-subtitle">
                  Imtihon topshirish xarajati kompensatsiya qilinadigan xalqaro
                  imtihon tizimlari
               </div>
            </div>
            <div class="projects__block five" data-aos="fade-left">
               <img
                  src="@/assets/img/projects/projects5.jpg"
                  alt="projects image"
               />
               <div class="projects__grid-content"></div>
               <div class="projects__grid-mark">Ta’lim</div>
               <div class="projects__grid-subtitle">
                  Imtihon topshirish xarajati kompensatsiya qilinadigan xalqaro
                  imtihon tizimlari
               </div>
            </div>
            <div class="projects__block six" data-aos="fade-right">
               <img
                  src="@/assets/img/projects/projects6.jpg"
                  alt="projects image"
               />
               <div class="projects__grid-content"></div>
               <div class="projects__grid-mark">Ta’lim</div>
               <div class="projects__grid-subtitle">
                  Imtihon topshirish xarajati kompensatsiya qilinadigan xalqaro
                  imtihon tizimlari
               </div>
            </div>
            <div class="projects__block seven" data-aos="fade-up">
               <img
                  src="@/assets/img/projects/projects7.jpg"
                  alt="projects image"
               />
               <div class="projects__grid-content"></div>
               <div class="projects__grid-mark">Ta’lim</div>
               <div class="projects__grid-subtitle">
                  Imtihon topshirish xarajati kompensatsiya qilinadigan xalqaro
                  imtihon tizimlari
               </div>
            </div>
            <div class="projects__block last" data-aos="fade-left">
               <img
                  src="@/assets/img/projects/projects8.jpg"
                  alt="projects image"
               />
               <div class="projects__grid-content"></div>
               <div class="projects__grid-mark">Ta’lim</div>
               <div class="projects__grid-subtitle">
                  Imtihon topshirish xarajati kompensatsiya qilinadigan xalqaro
                  imtihon tizimlari
               </div>
            </div>
         </div>
         <div class="projects__block-btn">
            <a href="#"
               ><img src="@/assets/img/icons/load-icon.png" alt="load icon" />{{
                  $t("btns.viewAgain")
               }}</a
            >
         </div>
      </div>
   </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_projects.scss";
.projects {
   margin-top: -50px;
}
.projects__grid-subtitle {
   display: block;
   text-decoration: none;
   color: #fff;
}
</style>
