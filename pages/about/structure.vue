<template>
   <section class="goals">
      <div class="aboutagents__big-title">{{ $t("pages.about") }}</div>
      <div class="aboutagents__title">{{ $t("pages.about") }}</div>
      <div class="page-map wrapper">
         <nuxt-link :to="localePath('/')" class="page-map__link"
            >{{ $t("pages.main") }}
         </nuxt-link>
         <img src="@/assets/img/icons/angle-r.png" alt="icon" />
         {{ $t("pages.about") }}
      </div>
      <AboutBtns />
      <div class="goals__body wrapper">
         <div class="goals__main-title">{{ $t("aboutPages.structure") }}</div>
         <div class="structure">
            <img
               src="@/assets/img/about-structure1.png"
               alt="structure image-1"
            />
            <img
               src="@/assets/img/about-structure2.png"
               alt="structure image-2"
            />
         </div>
      </div>
   </section>
</template>

<script>
import AboutBtns from "@/components/AboutBtns.vue";
export default {
   components: { AboutBtns },
   methods: {},
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_about.scss";
</style>
