<template>
   <div class="news-wrapp">
      <div class="swiper-container news">
         <!-- Additional required wrapper -->
         <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
               <img src="@/assets/img/news-1.jpg" alt="more image" />
            </div>
            <div class="swiper-slide">
               <img src="@/assets/img/news-2.jpg" alt="more image" />
            </div>
            <div class="swiper-slide">
               <img src="@/assets/img/news-3.jpg" alt="more image" />
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
</template>
<script>
import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use(Navigation, Pagination);
import "swiper/swiper-bundle.css";
export default {
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
};
</script>
<style lang="scss" scoped>
.carousel__pagination {
   .swiper-pagination-bullet {
      width: 14px;
      height: 14px;
      margin-right: 10px;
      cursor: pointer;
   }
}
.news-wrapp {
   max-width: 802px;
   max-height: 600px;
}
.swiper-container {
   width: 100%;
}

.swiper-slide {
   max-width: 802px;
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
