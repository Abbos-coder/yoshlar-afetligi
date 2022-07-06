<template>
   <section class="photos">
      <div class="photos__big-title">{{ $t("pages.news") }}</div>
      <div class="photos__title">{{ $t("pages.news") }}</div>
      <div class="page-map wrapper">
         <nuxt-link to="/" class="page-map__link"
            >{{ $t("pages.main") }}
         </nuxt-link>
         <img src="@/assets/img/icons/angle-r.png" alt="icon" />
         <nuxt-link to="/news" class="page-map__link">
            {{ $t("pages.news") }}</nuxt-link
         >
         <img src="@/assets/img/icons/angle-r.png" alt="icon" />
         {{ $t("newsPages.fotoGalery") }}
      </div>

      <div class="photos__body wrapper">
         <newsBtns />
         <CoolLightBox
            :items="items"
            :index="index"
            :fullScreen="true"
            @close="index = null"
         >
         </CoolLightBox>
         <div class="photos__cards">
            <div
               class="photos__card"
               v-for="(image, imageIndex) in items"
               :key="imageIndex"
               @click="index = imageIndex"
            >
               <img :src="image" alt="galery photos" class="photos__card-img" />
               <img
                  src="@/assets/img/news/sloy.png"
                  alt="loop sloy"
                  class="photos__card-sloy"
               />
               <img
                  src="@/assets/img/news/loop-icon.png"
                  alt="loop icon"
                  class="photos__card-icon"
               />
            </div>
         </div>
         <div class="photos__looks-like">
            <div class="photos__big-title">
               {{ $t("titles.similarPhotos") }}
            </div>
            <div class="photos__title">{{ $t("titles.similarPhotos") }}</div>
            <div class="photos__looks-like--cards">
               <div class="photos__card">
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
               <div class="photos__card">
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
               <div class="photos__card">
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
            </div>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   data: function() {
      return {
         items: [
            "https://picsum.photos/1366/768?random=1",
            "https://picsum.photos/1366/768?random=2",
            "https://picsum.photos/1366/768?random=3",
            "https://picsum.photos/1366/768?random=4",
            "https://picsum.photos/1366/768?random=5",
            "https://picsum.photos/1366/768?random=6",
            "/galary1.jpg",
         ],
         index: null,
      };
   },
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
@import "~/assets/scss/_projects.scss";

.photos {
   &__card:hover &__card-icon {
      opacity: 1;
   }
   &__card:hover &__card-sloy {
      opacity: 1;
   }
   &__card-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      right: 0;
      bottom: 0;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: all linear 0.2s;
   }
   &__card-sloy {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      transition: all linear 0.2s;
   }
   &__looks-like {
      margin-top: 100px;
   }
   &__looks-like--cards {
      margin-top: 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 25px;
   }
}
</style>
