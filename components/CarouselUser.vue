<template>
   <div>
      <div class="swiper-container carousel">
         <!-- Additional required wrapper -->
         <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
               <div class="slider__items wrapper">
                  <div class="slider__items-elem">
                     <img src="@/assets/img/icons/scobe.svg" alt="element" />
                  </div>
                  <div class="slider__items-content">
                     <div class="slider__items-title">Tanishing</div>
                     <div class="slider__items-maintitle">
                        Shaxlo <br />
                        Hudoyberdiyeva
                     </div>
                     <div class="slider__items-subtitle">
                        We had an incredible experience working with Landify and
                        were impressed they made such a big difference in only
                        three weeks. Our team is so grateful for the wonderful
                        improvements they made and their ability to get familiar
                        with the product concept so quickly. It acted as a
                        catalyst to take our design to the next level and get
                        more eyes on our product.
                     </div>
                     <div class="slider__items-footer">
                        <strong>Scarlett Johansson</strong><br />
                        <span>CEO at Xion</span>
                        <div
                           class="swiper-pagination carousel__pagination"
                        ></div>
                     </div>
                  </div>
                  <div class="slider__items-userimg">
                     <img
                        src="@/assets/img/carousel-user1.png"
                        alt="user image"
                     />
                  </div>
               </div>
               <div class="slider__bg"></div>
            </div>
            <div class="swiper-slide">
               <div class="slider__items wrapper">
                  <div class="slider__items-elem">
                     <img src="@/assets/img/icons/scobe.svg" alt="element" />
                  </div>
                  <div class="slider__items-content">
                     <div class="slider__items-title">Tanishing</div>
                     <div class="slider__items-maintitle">
                        Shaxlo <br />
                        Hudoyberdiyeva
                     </div>
                     <div class="slider__items-subtitle">
                        We had an incredible experience working with Landify and
                        were impressed they made such a big difference in only
                        three weeks. Our team is so grateful for the wonderful
                        improvements they made and their ability to get familiar
                        with the product concept so quickly. It acted as a
                        catalyst to take our design to the next level and get
                        more eyes on our product.
                     </div>
                     <div class="slider__items-footer">
                        <strong>Scarlett Johansson</strong><br />
                        <span>CEO at Xion</span>
                        <div
                           class="swiper-pagination carousel__pagination"
                        ></div>
                     </div>
                  </div>
                  <div class="slider__items-userimg">
                     <img
                        src="@/assets/img/carousel-user1.png"
                        alt="user image"
                     />
                  </div>
               </div>
               <div class="slider__bg"></div>
            </div>
            <div class="swiper-slide">
               <div class="slider__items wrapper">
                  <div class="slider__items-elem">
                     <img src="@/assets/img/icons/scobe.svg" alt="element" />
                  </div>
                  <div class="slider__items-content">
                     <div class="slider__items-title">Tanishing</div>
                     <div class="slider__items-maintitle">
                        Shaxlo <br />
                        Hudoyberdiyeva
                     </div>
                     <div class="slider__items-subtitle">
                        We had an incredible experience working with Landify and
                        were impressed they made such a big difference in only
                        three weeks. Our team is so grateful for the wonderful
                        improvements they made and their ability to get familiar
                        with the product concept so quickly. It acted as a
                        catalyst to take our design to the next level and get
                        more eyes on our product.
                     </div>
                     <div class="slider__items-footer">
                        <strong>Scarlett Johansson</strong><br />
                        <span>CEO at Xion</span>
                        <div
                           class="swiper-pagination carousel__pagination"
                        ></div>
                     </div>
                  </div>
                  <div class="slider__items-userimg">
                     <img
                        src="@/assets/img/carousel-user1.png"
                        alt="user image"
                     />
                  </div>
               </div>
               <div class="slider__bg"></div>
            </div>
         </div>
         <!-- If we need pagination -->
         <!-- <div class="swiper-pagination carousel__pagination"></div> -->

         <!-- If we need navigation buttons -->
         <!-- <div class="swiper-button-prev news__prev"></div>
         <div class="swiper-button-next news__next"></div> -->

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
      let swiper = new Swiper(".carousel", {
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
            nextEl: ".news__next",
            prevEl: ".news__prev",
         },
         pagination: {
            el: ".carousel__pagination",
            clickable: true,
            // renderBullet: function(index, className) {
            //    return `<span class="dot swiper-pagination-bullet"></span>`;
            // },
         },
      });
   },
};
</script>
<style lang="scss">
.carousel__pagination {
   margin-top: 20px;
   .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      margin-right: 10px;
      cursor: pointer;
   }
}
.swiper-container {
   width: 100%;
}

.swiper-slide {
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
   min-height: 596px;
   position: relative;
   z-index: 2;
   padding: 78px 0px 0px 0;
   margin-bottom: 100px;
}

.slider {
   &__bg {
      background: url(@/assets/img/icons/OBJECTS.png);
      background-size: cover;
      background-position: center center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      img {
         width: 100%;
         height: 100%;
         object-fit: cover;
         object-position: center;
      }
   }
   &__items {
      display: flex !important;
   }
   @media (max-width: 925px) {
      &__items {
         display: flex !important;
         flex-wrap: wrap;
         justify-content: center;
      }
   }

   &__items-title {
      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 32px;
      line-height: 28px;
      text-transform: uppercase;
      font-feature-settings: "salt" on, "liga" off;
      color: #f2c94c;
      margin: 0px 0px 8px 0px;
   }

   &__items-maintitle {
      font-family: "Inter", sans-serif;
      font-weight: bold;
      font-size: 44px;
      line-height: 110%;
      text-transform: uppercase;
      font-feature-settings: "salt" on, "liga" off;
      color: #ffffff;
      margin: 0px 0px 20px 0px;
   }

   &__items-subtitle {
      font-family: "Inter", sans-serif;
      font-size: 18px;
      line-height: 32px;
      font-feature-settings: "salt" on, "liga" off;
      color: #ffffff;
      margin-bottom: 20px;
   }
   &__items-elem {
      margin-right: 16px;
   }
   &__items-footer {
      font-family: "Inter", sans-serif;
      strong {
         font-weight: bold;
         font-size: 18px;
         line-height: 28px;
         font-feature-settings: "salt" on, "liga" off;
         color: #f2c94c;
      }
      span {
         font-size: 16px;
         line-height: 26px;
         font-feature-settings: "salt" on, "liga" off;
         color: #6bf6ff;
      }
   }
}
</style>
