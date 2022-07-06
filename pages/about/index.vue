<template>
   <section class="wrapper aboutagents">
      <div class="aboutagents__big-title">{{ $t("pages.about") }}</div>
      <div class="aboutagents__title">{{ $t("pages.about") }}</div>

      <div class="page-map">
         <nuxt-link :to="localePath('/')" class="page-map__link"
            >{{ $t("pages.main") }}
         </nuxt-link>
         <img src="@/assets/img/icons/angle-r.png" alt="icon" />
         {{ $t("pages.about") }}
      </div>

      <AboutBtns />

      <p class="aboutagents__main-title">{{ $t("aboutPages.agency") }}</p>

      <div class="aboutagents__image">
         <img src="@/assets/img/aboutPage-1.jpg" alt="main image" />
      </div>
      <div class="aboutagents__content">
         <p>
            O‘zbekiston Respublikasi Yoshlar ishlari agentligi yoshlarga oid
            davlat siyosatini yangi bosqichga olib chiqish, yoshlar sohasidagi
            muammolarga samarali yechim topish, ularni har tomonlama
            qo‘llab-quvvatlash, shuningdek vakolatli organlar faoliyatini
            samarali tashkil etish hamda muvofiqlashtirishni amalga oshiruvchi
            davlat tashkilotidir.
         </p>
         <p>
            Agentlikning qabul qilgan qarorlari davlat organlari, boshqa
            tashkilot va ularning mansabdor shaxslari, shuningdek, fuqarolar
            uchun bajarilishi majburiy hisoblanadi. Agentlik yuridik shaxs
            hisoblanib, o‘z nomi yozilgan va Davlat gerbi tasviri tushirilgan
            muhr va blankalarga, mustaqil balansga, shaxsiy g‘azna
            hisobvaraqlariga, bank hisobvaraqlariga ega.
         </p>
         <p>
            Agentlik tizimiga agentlikning markaziy apparati, hududiy
            bo‘linmalari, Yoshlar muammolarini o‘rganish va istiqbolli kadrlarni
            tayyorlash instituti, “Yoshlar media xoldingi” AJ kiradi. Hududiy
            bo‘linmalar (tumanlar va shaharlar bo‘limlari bundan mustasno)
            yuridik shaxs tashkil etgan holda faoliyat yuritadi. Yoshlar ishlari
            agentligi Prezidentning PF-6017-son Farmoni bilan tashkil etilgan.
         </p>
      </div>
   </section>
</template>

<script>
import AboutBtns from "@/components/AboutBtns.vue";
export default {
   components: { AboutBtns },
   data: () => ({
      selected: null,
   }),
   methods: {
      // changeLocale() {
      //    this.$router.push(this.switchLocalePath(this.selected));
      // },
   },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_about.scss";
</style>
