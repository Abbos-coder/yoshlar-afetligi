<template>
   <section class="about-btns">
      <div class="about-btns__body wrapper text-center">
         <ul class="about-btns__list">
            <li>
               <nuxt-link
                  :to="localePath('/news')"
                  exact
                  class="about-btns__link one"
                  >{{ $t("newsPages.news") }}</nuxt-link
               >
            </li>
            <li>
               <nuxt-link
                  :to="localePath('/news/photos')"
                  class="about-btns__link two"
                  >{{ $t("newsPages.fotoGalery") }}</nuxt-link
               >
            </li>
            <li>
               <nuxt-link
                  :to="localePath('/news/videos')"
                  class="about-btns__link three"
                  >{{ $t("newsPages.videoGalery") }}</nuxt-link
               >
            </li>
            <li>
               <nuxt-link to="#" class="about-btns__link four">
                  {{ $t("newsPages.blog") }}
               </nuxt-link>
            </li>
            <li>
               <a href="#" class="about-btns__link five">{{
                  $t("newsPages.event")
               }}</a>
            </li>
            <li>
               <a href="#" class="about-btns__link five">
                  {{ $t("newsPages.openInfo") }}
               </a>
            </li>
            <li>
               <a href="#" class="about-btns__link five">
                  {{ $t("newsPages.restrs") }}
               </a>
            </li>
         </ul>
      </div>
   </section>
</template>

<script>
export default {
   methods: {},
};
</script>

<style lang="scss" scoped>
.about-btns {
   &__list {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
      margin: 40px 0px 60px 0px;
      .nuxt-link-active {
         background: #3d7da9;
         border: 1px solid #3d7da9;
         box-shadow: 0px 6px 12px rgba(17, 46, 66, 0.3);
         color: #fff;
      }
   }

   &__link {
      text-decoration: none;
      padding: 8px 16px;
      font-weight: 500;
      font-size: 16px;
      color: #3d7da9;
      border-radius: 4px;
      border: 1px solid #3d7da9;
      &:hover {
         background: #3d7ea9ce;
         border: 1px solid #3d7da9;
         box-shadow: 0px 6px 12px rgba(17, 46, 66, 0.3);
         color: #fff;
      }
      .nuxt-link-active {
         background: #3d7da9;
         border: 1px solid #3d7da9;
         box-shadow: 0px 6px 12px rgba(17, 46, 66, 0.3);
         color: #fff;
      }
   }
}
</style>
