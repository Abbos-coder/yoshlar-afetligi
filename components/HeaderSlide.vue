<template>
   <div class="swiper">
      <div class="swiper-container header wrapp">
         <!-- Additional required wrapper -->
         <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide header-item">
               <header class="header mt-5">
                  <div class="header__body mt-5">
                     <img src="@/assets/img/mainBg.png" alt="header bg" />
                     <img
                        class="header__flag"
                        src="@/assets/img/flag.png"
                        alt="header flag"
                     />
                     <img src="@/assets/img/allItems.png" alt="header items" />
                     <div class="header__persons">
                        <img
                           class="header__persons-img"
                           src="@/assets/img/header-people.png"
                           alt="header persons"
                           data-aos="zoom-in-down"
                        />
                     </div>
                     <div class="header__title">
                        Yoshlar <br /><strong>saylovga</strong
                        ><br />Tayyormisiz?
                     </div>
                     <div class="header__btn">
                        <a href="#">{{ $t("btns.readMore") }}</a>
                     </div>
                  </div>
                  <div class="next">Next ></div>
               </header>
            </div>
            <div class="swiper-slide header-item">
               Event slide 2
            </div>
            <div class="swiper-slide header-item">
               Event slide 3
            </div>
         </div>
         <!-- If we need pagination -->
         <div class="swiper-pagination header__pagination"></div>
         <!-- If we need navigation buttons -->

         <div class="swiper-button-prev header__prev">
            <i class="fas fa-angle-left"></i> Prev
         </div>

         <div class="swiper-button-next header__next">
            Next
            <img src="@/assets/img/icons/angle-right.svg" alt="icon" />
         </div>
         <div class="line"></div>
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
      let swiper = new Swiper(".header", {
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
            nextEl: ".header__next",
            prevEl: ".header__prev",
         },
         pagination: {
            el: ".slider-info__pagination",
            clickable: true,
         },
      });
   },
};
</script>
<style lang="scss" scoped>
.header__title {
   padding-top: 28vh !important;
   @media (max-width: 768px) {
      padding-top: 38vh !important;
   }
}
.header__btn a {
   top: 53vh !important;
   @media (max-width: 768px) {
      top: 50vh !important;
   }
   @media (max-width: 414px) {
      top: 55vh !important;
   }
}
.header__prev {
   left: 42%;
   top: 80%;
   font-weight: bold;
   font-size: 14px;
   line-height: 15px;
   color: #fff;
   display: flex;
   align-items: center;
   @media (max-width: 414px) {
      left: 35%;
   }
   &:hover {
      color: #00ffa3;
   }
   i {
      margin-right: 13px;
      vertical-align: middle;
   }
   &:after {
      font-size: 22px;
      display: none;
   }
}
.line {
   position: absolute;
   top: 82%;
   left: 41%;
   transform: translateY(-41%);
   z-index: 10;
   width: 18%;
   height: 2px;
   background-color: #e5e5e5;
   @media (max-width: 414px) {
      width: 30%;
      left: 35%;
   }
}
.header__next {
   right: 42%;
   top: 80%;
   font-weight: bold;
   font-size: 14px;
   line-height: 15px;
   color: #00ffa3;
   @media (max-width: 414px) {
      right: 35%;
   }
   img {
      margin-left: 13px;
   }
   &:after {
      font-size: 22px;
      display: none;
   }
}
.wrapp {
   max-width: 1920px;
   margin: 0 auto;
   position: relative;
}
.swiper {
   padding: 0 !important;
   max-height: 100vh !important;
   margin-bottom: -70px;
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
   height: 106vh;
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
