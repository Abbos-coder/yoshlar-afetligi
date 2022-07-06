<template>
   <section class="photos">
      <div class="photos__big-title wrapper">{{ $t("pages.news") }}</div>
      <div class="photos__title wrapper">{{ $t("pages.news") }}</div>
      <div class="page-map wrapper">
         <nuxt-link :to="localePath('/')" class="page-map__link">{{
            $t("pages.main")
         }}</nuxt-link>
         <img src="@/assets/img/icons/angle-r.png" alt="icon" />
         {{ $t("pages.news") }}
      </div>

      <div class="photos__body wrapper">
         <newsBtns />
         <CoolLightBox
            :items="videos"
            :index="index"
            @close="index = null"
            fullScreen="true"
         >
         </CoolLightBox>
         <div class="photos__cards">
            <div
               class="photos__card"
               :data-aos="video.aos"
               v-for="(video, videoIndex) in videos"
               :key="videoIndex"
               @click="index = videoIndex"
               :style="{ backgroundImage: 'url(' + video.thumb + ')' }"
            >
               <div class="photos__card-date">20.09.2021</div>
               <div class="photos__card-content">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nunc.”
               </div>
               <video :src="video.src"></video>
               <i class="fas fa-play play-video"></i>
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
   data: function() {
      return {
         videos: [
            {
               title: "In nature, nothing is perfect and everything is perfect",
               description: "Photo by Lucas",
               thumb: "/galary1.jpg",
               src: "https://www.youtube.com/watch?v=d0tU18Ybcvk",
               aos: "fade-right",
            },
            {
               title: "A beautiful mountain view",
               description: "Photo by Facundo",
               src: "https://vimeo.com/43338103",
               thumb:
                  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
               aos: "fade-up",
            },
            {
               title: "In nature, nothing is perfect and everything is perfect",
               description: "Photo by Lucas",
               thumb: "https://scx1.b-cdn.net/csz/news/800/2019/1-nature.jpg",
               src: "https://www.youtube.com/watch?v=dDEAZ8oE0n0",
               aos: "fade-left",
            },
         ],
         index: null,
      };
   },
   methods: {},
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_news.scss";
.play-video {
   font-size: 34px;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   color: #ffffff;
   transition: color ease-in 0.2s;
   &:hover {
      color: #164197cd;
   }
}
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
