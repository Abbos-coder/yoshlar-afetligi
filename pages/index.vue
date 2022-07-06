<template>
   <section>
      <HeaderSlide />

      <div class="news">
         <div class="news__body wrapper">
            <div class="news__bg-title ">{{ $t("pages.news") }}</div>
            <div class="news__title">{{ $t("pages.news") }}</div>

            <div class="news__cards">
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
                        Bugun Toshkent shahar "Yoshlar markazi"da O'zbekiston
                        Respublikasi Yoshlar ishlari agentligi hamda O'zbekiston
                        Yoshlar Ittifoqi hamkorligida ...
                     </div>
                     <div class="news__card-date">
                        <img src="@/assets/img/icons/date-icon.svg" alt="" />
                        21 Sentabr 2021
                     </div>
                  </div>
               </div>

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
                           <img src="@/assets/img/icons/date-icon.svg" alt="" />
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
                           <img src="@/assets/img/icons/date-icon.svg" alt="" />
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
                        <img src="@/assets/img/icons/date-icon.svg" alt="" /> 14
                        Sentabr 2021
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="news__moreView-btn">
            <nuxt-link to="/news" class="news__btn">{{
               $t("btns.allNews")
            }}</nuxt-link>
         </div>
      </div>
      <!-- Carousel -->
      <CarouselUser />

      <div class="projects">
         <div class="projects__body wrapper">
            <div class="projects__bg-title">{{ $t("pages.projects") }}</div>
            <div class="projects__title">{{ $t("pages.projects") }}</div>

            <div class="projects__grids">
               <div class="first projects__grid" data-aos="fade-right">
                  <img src="@/assets/img/grid-1.jpg" alt="projects image" />
                  <div class="projects__grid-content"></div>
                  <div class="projects__grid-mark">Ta’lim</div>
                  <div class="projects__grid-subtitle">
                     Imtihon topshirish xarajati kompensatsiya qilinadigan
                     xalqaro imtihon tizimlari
                  </div>
               </div>
               <div class="second projects__grid" data-aos="fade-up-left">
                  <img src="@/assets/img/grid-2.jpg" alt="projects image" />
                  <div class="projects__grid-content"></div>
                  <div class="projects__grid-mark">Grantlar</div>
                  <div class="projects__grid-subtitle">
                     Imtihon topshirish xarajati kompensatsiya qilinadigan
                     xalqaro imtihon tizimlari
                  </div>
               </div>
               <div class="three projects__grid" data-aos="fade-up">
                  <img src="@/assets/img/grid-3.jpg" alt="projects image" />
                  <div class="projects__grid-content"></div>
                  <div class="projects__grid-mark">Media</div>
                  <div class="projects__grid-subtitle">
                     Imtihon topshirish xarajati kompensatsiya qilinadigan
                     xalqaro imtihon tizimlari
                  </div>
               </div>
               <div class="four projects__grid" data-aos="fade-left">
                  <img src="@/assets/img/grid-4.jpg" alt="projects image" />
                  <div class="projects__grid-content"></div>
                  <div class="projects__grid-mark">Ijtimoiy buyurtmalar</div>
                  <div class="projects__grid-subtitle">
                     Imtihon topshirish xarajati kompensatsiya qilinadigan
                     xalqaro imtihon tizimlari
                  </div>
               </div>
               <div class="five projects__grid" data-aos="fade-right">
                  <img src="@/assets/img/grid-5.jpg" alt="projects image" />
                  <div class="projects__grid-content"></div>
                  <div class="projects__grid-mark">Ta’lim</div>
                  <div class="projects__grid-subtitle">
                     Imtihon topshirish xarajati kompensatsiya qilinadigan
                     xalqaro imtihon tizimlari
                  </div>
               </div>
               <div class="six projects__grid" data-aos="fade-up">
                  <img src="@/assets/img/grid-6.jpg" alt="projects image" />
                  <div class="projects__grid-content"></div>
                  <div class="projects__grid-mark">Ta’lim</div>
                  <div class="projects__grid-subtitle">
                     Imtihon topshirish xarajati kompensatsiya qilinadigan
                     xalqaro imtihon tizimlari
                  </div>
               </div>
            </div>
         </div>
         <div class="projects__btn">
            <nuxt-link to="/projects">{{ $t("btns.allProjects") }}</nuxt-link>
         </div>
      </div>

      <div class="counters" @mouseenter="runCounter">
         <div class="counters__body wrapper">
            <div class="counters__bg-title">{{ $t("pages.appeals") }}</div>
            <div class="counters__title">{{ $t("pages.appeals") }}</div>

            <div class="counters__cards">
               <div class="counters__card">
                  <div class="counters__card-img">
                     <img
                        src="@/assets/img/icons/counters-1.svg"
                        alt="counter icon"
                     />
                  </div>
                  <div class="counters__card-body">
                     <div
                        class="counters__card-numbers"
                        data-value="2782"
                        id="counter1"
                     >
                        0
                     </div>
                     <div class="counters__card-text">
                        {{ $t("btns.appeals") }}
                     </div>
                  </div>
               </div>
               <div class="counters__card">
                  <div class="counters__card-img">
                     <img
                        src="@/assets/img/icons/counters-2.svg"
                        alt="counter icon"
                     />
                  </div>
                  <div class="counters__card-body">
                     <div
                        class="counters__card-numbers"
                        data-value="2532"
                        id="counter2"
                     >
                        0
                     </div>
                     <div class="counters__card-text">
                        {{ $t("btns.views") }}
                     </div>
                  </div>
               </div>
               <div class="counters__card">
                  <div class="counters__card-img">
                     <img
                        src="@/assets/img/icons/counters-3.svg"
                        alt="counter icon"
                     />
                  </div>
                  <div class="counters__card-body">
                     <div
                        class="counters__card-numbers"
                        data-value="168"
                        id="counter3"
                     >
                        0
                     </div>
                     <div class="counters__card-text">
                        {{ $t("btns.viewing") }}
                     </div>
                  </div>
               </div>
               <div class="counters__card">
                  <div class="counters__card-img">
                     <img
                        src="@/assets/img/icons/counters-4.svg"
                        alt="counter icon"
                     />
                  </div>

                  <div
                     class="counters__card-numbers"
                     data-value="8"
                     id="counter4"
                  >
                     0
                  </div>
                  <div class="counters__card-text">
                     {{ $t("btns.rejected") }}
                  </div>
               </div>
            </div>
         </div>
      </div>

      <!-- <Slider /> -->
      <div class="info-slider__titles wrapper mb-5">
         <div class="info-slider__bg-title">{{ $t("pages.opportunity") }}</div>
         <div class="info-slider__title">{{ $t("pages.opportunity") }}</div>
      </div>

      <SliderInfo data-aos="zoom-in-up" />

      <div class="about">
         <div class="about__body wrapper">
            <div class="about__bg-title">{{ $t("pages.about") }}</div>
            <div class="about__title mb-4">{{ $t("pages.about") }}</div>

            <div class="about__section">
               <div class="about__content">
                  <p
                     data-aos="fade-right"
                     data-aos-offset="300"
                     data-aos-easing="ease-in-sine"
                  >
                     O‘zbekiston Respublikasi Yoshlar ishlari agentligi
                     yoshlarga oid davlat siyosatini yangi bosqichga olib
                     chiqish, yoshlar sohasidagi muammolarga samarali yechim
                     topish, ularni har tomonlama qo‘llab-quvvatlash, shuningdek
                     vakolatli organlar faoliyatini samarali tashkil etish hamda
                     muvofiqlashtirishni amalga oshiruvchi davlat tashkilotidir.
                  </p>
                  <p
                     data-aos="fade-right"
                     data-aos-offset="300"
                     data-aos-easing="ease-in-sine"
                  >
                     Agentlikning qabul qilgan qarorlari davlat organlari,
                     boshqa tashkilot va ularning mansabdor shaxslari,
                     shuningdek, fuqarolar uchun bajarilishi majburiy
                     hisoblanadi. Agentlik yuridik shaxs hisoblanib, o‘z nomi
                     yozilgan va Davlat gerbi tasviri tushirilgan muhr va
                     blankalarga, mustaqil balansga, shaxsiy g‘azna
                     hisobvaraqlariga, bank hisobvaraqlariga ega.
                  </p>
                  <p
                     class="mb-5"
                     data-aos="fade-right"
                     data-aos-offset="300"
                     data-aos-easing="ease-in-sine"
                  >
                     Agentlik tizimiga agentlikning markaziy apparati, hududiy
                     bo‘linmalari, Yoshlar muammolarini o‘rganish va istiqbolli
                     kadrlarni tayyorlash instituti, “Yoshlar media xoldingi” AJ
                     kiradi.
                  </p>
                  <nuxt-link to="aboutUs/about-agency" class="about__btn">{{
                     $t("btns.readMore")
                  }}</nuxt-link>
               </div>
               <div class="about__images">
                  <img
                     src="@/assets/img/about-2.jpg"
                     alt="about image"
                     class="about__image2"
                     data-aos="zoom-out-down"
                  />
               </div>
            </div>
         </div>
      </div>

      <div class="useful">
         <div class="useful__body wrapper pb-5">
            <div class="useful__big-title">
               {{ $t("pages.usefulResurces") }}
            </div>
            <div class="useful__title">{{ $t("pages.usefulResurces") }}</div>
            <div class="useful__icons">
               <div class="useful__icons-1">
                  <img src="@/assets/img/useful-1.jpg" alt="useful icons" />
               </div>
               <div class="useful__icons-2">
                  <img src="@/assets/img/useful-2.jpg" alt="useful icons" />
                  <img src="@/assets/img/useful-3.jpg" alt="useful icons" />
               </div>
               <div class="useful__icons-3">
                  <img src="@/assets/img/useful-4.jpg" alt="useful icons" />
                  <img src="@/assets/img/useful-5.jpg" alt="useful icons" />
                  <img src="@/assets/img/useful-6.jpg" alt="useful icons" />
               </div>
               <div class="useful__icons-4">
                  <img src="@/assets/img/useful-7.jpg" alt="useful icons" />
                  <img src="@/assets/img/useful-8.jpg" alt="useful icons" />
               </div>
               <div class="useful__icons-5">
                  <img src="@/assets/img/useful-9.jpg" alt="useful icons" />
               </div>
            </div>
         </div>

         <!-- <div class="useful__big-images">
            <img
               src="@/assets/img/useful-big-main.jpg"
               alt="useful big image"
            />
            <img src="@/assets/img/useful-big.svg" alt="useful big image" />
         </div> -->
      </div>

      <div class="contact">
         <div class="contact__body wrapper">
            <div class="contact__big-title">{{ $t("pages.contact") }}</div>
            <div class="contact__title">{{ $t("pages.contact") }}</div>

            <div class="contact__form">
               <div class="contact__form-title text-center mb-3">
                  Bizga so’rov qoldiring biz siz bilan tez fursatda bog’lanamiz!
               </div>
               <form method="post">
                  <div class="contact__form-block1">
                     <input
                        type="text"
                        placeholder="Ismingizni kiriting"
                        class="contact__form-name"
                     />
                     <input
                        type="email"
                        placeholder="Emailingizni kiriting"
                        class="contact__form-email"
                     />
                  </div>
                  <div class="contact__form-block2">
                     <input
                        type="number"
                        placeholder="+998 90 900 90 90"
                        class="contact__form-number"
                     />
                     <input
                        type="text"
                        placeholder="Mavzu"
                        class="contact__form-subject"
                     />
                  </div>
                  <textarea
                     class="contact__form-message"
                     placeholder="Habar yozing"
                  /><br />
                  <input
                     type="submit"
                     class="contact__form-submit"
                     :value="$t('btns.send')"
                  />
               </form>
            </div>
         </div>
      </div>
      <!-- <p v-for="(data, idx) in info" :key="idx">
      {{ data.first_name }}
      hello guys
      <img :src="data.image" :alt="data.id" />
    </p> -->
   </section>
</template>

<script>
export default {
   //   data: () => ({}),
   //  async asyncData({ $axios }) {
   // 	let events = (await $axios.get('https://yoshlar-04.herokuapp.com/event/')).data
   //    return { events };
   //  },

   data: () => ({}),
   methods: {
      runCounter() {
         const counters = document.querySelectorAll(".counters__card-numbers");
         const speed = 500;
         counters.forEach((counter) => {
            const animate = () => {
               const value = +counter.getAttribute("data-value");
               const data = +counter.innerText;
               const time = value / speed;
               if (data < value) {
                  counter.innerText = Math.ceil(data + time);
                  setTimeout(animate, 1);
               } else {
                  counter.innerText = value;
               }
            };
            animate();
         });
      },
   },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/_main.scss";
@import "~/assets/styles/_media.scss";
.navbar__lang-list a {
   color: #fff !important;
}
</style>
