<template>
   <div class="swiper">
      <div class="swiper-container slider__info wrapp">
         <!-- Additional required wrapper -->
         <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide slider__info-item">
               <div class="info-slider__card">
                  <div class="info-slider__card-body">
                     <img
                        src="@/assets/img/info-slider1.jpg"
                        alt="slider image"
                     />
                     <div class="info-slider__card-mark">
                        Yoshlar bandligini ta’minlash va rivojlantirish
                     </div>
                     <div class="info-slider__card-title">
                        Biznes sayohatlar
                     </div>
                     <div class="info-slider__card-sloy">
                        <img
                           src="@/assets/img/icons/slider-sloy.svg"
                           alt="sloy svg"
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div class="swiper-slide slider__info-item">
               <div class="info-slider__card">
                  <div class="info-slider__card-body">
                     <img
                        src="@/assets/img/info-slider2.jpg"
                        alt="slider image"
                     />
                     <div class="info-slider__card-mark">
                        Yoshlar bandligini ta’minlash va rivojlantirish
                     </div>
                     <div class="info-slider__card-title">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nunc.”
                     </div>
                     <div class="info-slider__card-sloy">
                        <img
                           src="@/assets/img/icons/slider-sloy.svg"
                           alt="sloy svg"
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div class="swiper-slide slider__info-item">
               <div class="info-slider__card">
                  <div class="info-slider__card-body">
                     <img
                        src="@/assets/img/info-slider3.jpg"
                        alt="slider image"
                     />
                     <div class="info-slider__card-mark">
                        Yoshlar bandligini ta’minlash va rivojlantirish
                     </div>
                     <div class="info-slider__card-title">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nunc.”
                     </div>
                     <div class="info-slider__card-sloy">
                        <img
                           src="@/assets/img/icons/slider-sloy.svg"
                           alt="sloy svg"
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div class="swiper-slide slider__info-item">
               <div class="info-slider__card">
                  <div class="info-slider__card-body">
                     <img
                        src="@/assets/img/info-slider3.jpg"
                        alt="slider image"
                     />
                     <div class="info-slider__card-mark">
                        Yoshlar bandligini ta’minlash va rivojlantirish
                     </div>
                     <div class="info-slider__card-title">
                        «ILHOM» mukofotini ta'sis etish to'g'risida
                     </div>
                     <div class="info-slider__card-sloy">
                        <img
                           src="@/assets/img/icons/slider-sloy.svg"
                           alt="sloy svg"
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div class="swiper-slide slider__info-item">
               <div class="info-slider__card">
                  <div class="info-slider__card-body">
                     <img
                        src="@/assets/img/info-slider2.jpg"
                        alt="slider image"
                     />
                     <div class="info-slider__card-mark">
                        Yoshlar bandligini ta’minlash va rivojlantirish
                     </div>
                     <div class="info-slider__card-title">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nunc.”
                     </div>
                     <div class="info-slider__card-sloy">
                        <img
                           src="@/assets/img/icons/slider-sloy.svg"
                           alt="sloy svg"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!-- If we need pagination -->
         <div class="swiper-pagination slider-info__pagination"></div>
         <!-- <div class="swiper-pagination carousel__pagination"></div> -->

         <!-- If we need navigation buttons -->
         <div class="swiper-button-prev news__prev"></div>
         <div class="swiper-button-next news__next"></div>

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
      let swiper = new Swiper(".slider__info", {
         modules: [Navigation, Pagination],
         slidesPerView: 4.5,
         spaceBetween: 10,
         keyboard: {
            enabled: true,
            onlyInViewport: false,
         },
         loop: true,
         // using "ratio" endpoint
         navigation: {
            nextEl: ".news__next",
            prevEl: ".news__prev",
         },
         pagination: {
            el: ".slider-info__pagination",
            clickable: true,
            // renderBullet: function(index, className) {
            //    return `<span class="dot swiper-pagination-bullet"></span>`;
            // },
         },
         // Responsive breakpoints
         breakpoints: {
            // when window width is >= 320px
            320: {
               slidesPerView: 1,
               spaceBetween: 10,
            },
            // when window width is >= 480px
            414: {
               slidesPerView: 1,
               spaceBetween: 10,
            },
            // when window width is >= 640px
            640: {
               slidesPerView: 2,
               spaceBetween: 10,
            },
            1024: {
               slidesPerView: 2.5,
            },
            1366: {
               slidesPerView: 3.4,
               spaceBetween: 10,
            },
            1920: {
               slidesPerView: 4.5,
               spaceBetween: 10,
            },
         },
      });
   },
};
</script>
<style lang="scss">
.wrapp {
   max-width: 1920px;
   margin: 0 auto;
   position: relative;
}
.swiper {
   padding: 0 30px !important;
}
.slider-info__pagination {
   margin-top: 0px;
   position: relative !important;

   .swiper-pagination-bullet {
      width: 16px !important;
      height: 16px !important;
      margin-right: 10px;
      cursor: pointer;
   }
}
.slider__info-item {
   background: transparent !important;
   margin-bottom: 50px !important;
}
.news__next,
.news__prev {
   background: #2d81ba;
   width: 30px;
   height: 30px;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   opacity: 0.5;
   &:hover {
      opacity: 1;
   }
   &:after {
      font-size: 18px;
      color: #fff;
   }
}
@media (max-width: 414px) {
   .news__next,
   .news__prev {
      display: none;
   }
}
.swiper-container {
   width: 100%;
}

.swiper-slide {
   background-size: cover;
   background-position: 50%;
   min-height: 20vh;
   height: auto;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   color: #ffffff;
}
</style>
