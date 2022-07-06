<template>
   <section class="about-btns">
      <div class="about-btns__body wrapper text-center">
         <ul class="about-btns__list">
            <li>
               <nuxt-link
                  :to="localePath('/about')"
                  exact
                  class="about-btns__link one"
                  >{{ $t("aboutPages.agency") }}</nuxt-link
               >
            </li>
            <li>
               <nuxt-link
                  :to="localePath('/about/goals')"
                  class="about-btns__link two"
                  >{{ $t("aboutPages.goals") }}</nuxt-link
               >
            </li>
            <li>
               <nuxt-link
                  :to="localePath('/about/structure')"
                  class="about-btns__link three"
                  >{{ $t("aboutPages.structure") }}</nuxt-link
               >
            </li>
            <li>
               <nuxt-link
                  :to="localePath('/about/leadership')"
                  class="about-btns__link four"
                  >{{ $t("aboutPages.leadership") }}</nuxt-link
               >
            </li>
            <li>
               <nuxt-link
                  :to="localePath('/about/management')"
                  class="about-btns__link five"
               >
                  {{ $t("aboutPages.directors") }}
               </nuxt-link>
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
   }
}
</style>
