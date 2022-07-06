<template>
   <section class="news-page">
      <div class="news-page__big-title wrapper">{{ $t("pages.news") }}</div>
      <div class="news-page__title wrapper">{{ $t("pages.news") }}</div>
      <div class="page-map wrapper">
         <nuxt-link to="/" class="page-map__link">{{
            $t("pages.main")
         }}</nuxt-link>
         <img src="@/assets/img/icons/angle-r.png" alt="icon" />
         {{ $t("pages.news") }}
      </div>
      <div class="news-page__body">
         <newsBtns />

         <div class="news-page__cards wrapper">
            <div class="news-page__cards1">
               <div class="news__cards">
                  <nuxt-link to="news/id">
                     <div class="news__card-main" data-aos="fade-up">
                        <img
                           src="@/assets/img/news-1.jpg"
                           alt="news image"
                           class="news__card-img"
                        />
                        <div class="news__content">
                           <div class="news__card-title">
                              "O'zbekiston Qahramonlari va yoshlar"
                           </div>
                           <div class="news__card-subtitle">
                              Bugun Toshkent shahar "Yoshlar markazi"da
                              O'zbekiston Respublikasi Yoshlar ishlari agentligi
                              hamda O'zbekiston Yoshlar Ittifoqi hamkorligida
                              ...
                           </div>
                           <div class="news__card-date">
                              <img
                                 src="@/assets/img/icons/date-icon.svg"
                                 alt=""
                              />
                              21 Sentabr 2021
                           </div>
                        </div>
                     </div>
                  </nuxt-link>

                  <div class="news__card-double">
                     <div class="news__card-double1" data-aos="fade-right">
                        <img
                           src="@/assets/img/news-2.jpg"
                           alt="news image"
                           class="news__card-img"
                        />
                        <div class="news__content-double1">
                           <div class="news__card-title title">
                              "Yosh saylovchi - 2021" forumi Samarqandda!
                           </div>

                           <div class="news__card-date">
                              <img
                                 src="@/assets/img/icons/date-icon.svg"
                                 alt=""
                              />
                              21 Sentabr 2021
                           </div>
                        </div>
                        <img
                           class="news__play"
                           src="@/assets/img/icons/play-icon.svg"
                           alt="play icon"
                           v-b-modal.play
                        />

                        <b-modal id="play" title="News video">
                           <p class="my-4">This is video!</p>
                        </b-modal>
                     </div>
                     <div class="news__card-double2" data-aos="fade-up">
                        <img
                           src="@/assets/img/news-3.jpg"
                           alt="news image"
                           class="news__card-img"
                        />
                        <div class="news__content-double1">
                           <div class="news__card-title title">
                              "Yosh saylovchi - 2021" forumi XORAZMda!
                           </div>
                           <div class="news__card-subtitle"></div>
                           <div class="news__card-date">
                              <img
                                 src="@/assets/img/icons/date-icon.svg"
                                 alt=""
                              />
                              21 Sentabr 2021
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="news__card-last" data-aos="fade-left">
                     <img
                        src="@/assets/img/news-4.jpg"
                        alt="news image"
                        class="news__card-img"
                     />
                     <div class="news__last-content">
                        <div class="news__card-title title">
                           "Yosh saylovchi - 2021" forumi Navoiyda!
                        </div>
                        <div class="news__card-subtitle subtitle">
                           Yoshlarning saylov haqidagi bilimlarini boy etish
                           maqsadida mamlakatimiz bo‘ylab ...
                        </div>
                        <div class="news__card-date">
                           <img src="@/assets/img/icons/date-icon.svg" alt="" />
                           14 Sentabr 2021
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="news-page__cards2">
               <div class="block1" data-aos="fade-right">
                  <img
                     src="@/assets/img/news-2.jpg"
                     alt="news image"
                     class="block1-img"
                  />
                  <div class="block1__content">
                     <div class="block1__content-title">
                        "Yosh saylovchi - 2021" forumi Samarqandda!
                     </div>
                     <div class="block1__content-subtitle"></div>
                     <div class="block1__content-date">
                        <img
                           src="@/assets/img/icons/date-icon.svg"
                           alt="date icon"
                        />21 Sentabr 2021
                     </div>
                  </div>
               </div>
               <div class="block2" data-aos="fade-up">
                  <img
                     src="@/assets/img/news-3.jpg"
                     alt="news image"
                     class="block2-img"
                  />
                  <div class="block1__content">
                     <div class="block1__content-title">
                        "Yosh saylovchi - 2021" forumi Samarqandda!
                     </div>
                     <div class="block1__content-subtitle"></div>
                     <div class="block1__content-date">
                        <img
                           src="@/assets/img/icons/date-icon.svg"
                           alt="date icon"
                        />15 Sentabr 2021
                     </div>
                  </div>
               </div>
               <div class="block3" data-aos="fade-left">
                  <img
                     src="@/assets/img/news-1.jpg"
                     alt="news image"
                     class="block3-img"
                  />
                  <div class="block1__content">
                     <div class="block1__content-title">
                        "O'zbekiston Qahramonlari va yoshlar"
                     </div>
                     <div class="block1__content-subtitle">
                        Bugun Toshkent shahar "Yoshlar markazi"da O'zbekiston
                        Respublikasi Yoshlar ishlari agentligi hamda O'zbekiston
                        Yoshlar Ittifoqi hamkorligida ...
                     </div>
                     <div class="block1__content-date">
                        <img
                           src="@/assets/img/icons/date-icon.svg"
                           alt="date icon"
                        />21 Sentabr 2021
                     </div>
                  </div>
               </div>
               <div class="block4" data-aos="fade-up">
                  <img
                     src="@/assets/img/projects/projects1.jpg"
                     alt="news image"
                     class="block4-img"
                  />
                  <div class="block1__content">
                     <div class="block1__content-title">
                        "Yosh saylovchi - 2021" forumi Samarqandda!
                     </div>
                     <div class="block1__content-subtitle"></div>
                     <div class="block1__content-date">
                        <img
                           src="@/assets/img/icons/date-icon.svg"
                           alt="date icon"
                        />15 Sentabr 2021
                     </div>
                  </div>
               </div>
            </div>
            <div class="projects__block-btn">
               <a href="#"
                  ><img
                     src="@/assets/img/icons/load-icon.png"
                     alt="load icon"
                  />{{ $t("btns.viewAgain") }}</a
               >
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import newsBtns from "../../components/newsBtns.vue";
export default {
   components: { newsBtns },
   methods: {},
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_news.scss";
@import "~/assets/scss/_projects.scss";
@import "~/assets/styles/_main.scss";
@import "~/assets/styles/_media.scss";

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
