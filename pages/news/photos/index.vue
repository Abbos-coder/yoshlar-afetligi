<template>
   <section class="photos" @mouseenter="activeBtns">
      <div class="photos__big-title wrapper">{{ $t("pages.news") }}</div>
      <div class="photos__title wrapper">{{ $t("pages.news") }}</div>
      <div class="page-map wrapper">
         <nuxt-link :to="localePath('/')" class="page-map__link"
            >{{ $t("pages.main") }}
         </nuxt-link>
         <img src="@/assets/img/icons/angle-r.png" alt="icon" />
         {{ $t("pages.news") }}
      </div>

      <div class="photos__body wrapper">
         <newsBtns />
         <div class="photos__cards">
            <nuxt-link :to="localePath('/news/photos/id')">
               <div class="photos__card" data-aos="fade-right">
                  <img
                     src="@/assets/img/news/galary1.jpg"
                     alt="galery photos"
                     class="photos__card-img"
                  />
                  <div class="photos__card-date">20.09.2021</div>
                  <div class="photos__card-quantity">30 foto</div>
                  <div class="photos__card-content">
                     “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Nunc.”
                  </div>
               </div>
            </nuxt-link>

            <div class="photos__card" data-aos="fade-up">
               <img
                  src="@/assets/img/news/galary2.jpg"
                  alt="galery photos"
                  class="photos__card-img"
               />
               <div class="photos__card-date">20.09.2021</div>
               <div class="photos__card-quantity">20 foto</div>
               <div class="photos__card-content">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nunc.”
               </div>
            </div>
            <div class="photos__card" data-aos="fade-left">
               <img
                  src="@/assets/img/news/galary3.jpg"
                  alt="galery photos"
                  class="photos__card-img"
               />
               <div class="photos__card-date">20.09.2021</div>
               <div class="photos__card-quantity">45 foto</div>
               <div class="photos__card-content">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nunc.”
               </div>
            </div>
            <div class="photos__card" data-aos="fade-right">
               <img
                  src="@/assets/img/news/galary4.jpg"
                  alt="galery photos"
                  class="photos__card-img"
               />
               <div class="photos__card-date">20.09.2021</div>
               <div class="photos__card-quantity">15 foto</div>
               <div class="photos__card-content">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nunc.”
               </div>
            </div>
            <div class="photos__card" data-aos="fade-up">
               <img
                  src="@/assets/img/news/galary3.jpg"
                  alt="galery photos"
                  class="photos__card-img"
               />
               <div class="photos__card-date">20.09.2021</div>
               <div class="photos__card-quantity">45 foto</div>
               <div class="photos__card-content">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nunc.”
               </div>
            </div>
            <div class="photos__card" data-aos="fade-left">
               <img
                  src="@/assets/img/news/galary4.jpg"
                  alt="galery photos"
                  class="photos__card-img"
               />
               <div class="photos__card-date">20.09.2021</div>
               <div class="photos__card-quantity">15 foto</div>
               <div class="photos__card-content">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nunc.”
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
export default {
   methods: {
      activeBtns() {
         const thisBtn = document.querySelector(".two");
         thisBtn.classList.add("active");
      },
   },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_news.scss";
.photos {
   margin-top: -50px;
}
.projects {
   &__block-btn {
      a {
         padding: 12px 33px;
         background: linear-gradient(180deg, #112e42 0%, #3d7da9 100%);
         box-shadow: 0px 6px 12px rgba(17, 46, 66, 0.3);
         border-radius: 3px;
         font-weight: 500;
         font-size: 16px;
         color: #ffffff;
         text-decoration: none;
      }
      img {
         margin-right: 7.5px;
      }
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 40px;
   }
}
</style>
