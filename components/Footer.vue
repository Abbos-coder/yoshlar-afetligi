<template>
   <div class="footer">
      <div class="footer__body wrapper">
         <nuxt-link to="/" class="footer__logo">
            <img
               src="@/assets/img/icons/footer-logo.svg"
               alt="footer logo icon"
            />
         </nuxt-link>
         <div class="footer__menu mt-5">
            <div class="footer__menu-title">{{ $t("footer.menu") }}</div>
            <ul class="footer__menu-list">
               <li>
                  <nuxt-link
                     :to="localePath('/news')"
                     class="footer__menu-link"
                     >{{ $t("pages.news") }}</nuxt-link
                  >
               </li>
               <li>
                  <nuxt-link
                     :to="localePath('/projects')"
                     class="footer__menu-link"
                     >{{ $t("pages.projects") }}</nuxt-link
                  >
               </li>
               <li>
                  <nuxt-link
                     :to="localePath('/opportunity')"
                     class="footer__menu-link"
                     >{{ $t("pages.opportunity") }}</nuxt-link
                  >
               </li>
               <!-- <li>
                  <nuxt-link to="/" class="footer__menu-link">{{
                     $t("pages.goals")
                  }}</nuxt-link>
               </li> -->
               <li>
                  <nuxt-link
                     :to="localePath('/about')"
                     class="footer__menu-link"
                     >{{ $t("pages.about") }}</nuxt-link
                  >
               </li>
               <li>
                  <nuxt-link
                     :to="localePath('/contact')"
                     class="footer__menu-link"
                     >{{ $t("pages.contact") }}</nuxt-link
                  >
               </li>
            </ul>
         </div>
         <div class="footer__address mt-5">
            <div class="footer__address-title">
               {{ $t("footer.address.title") }}
            </div>
            <div class="footer__address-body">
               <p>infotoshkent@gmail.com</p>
               <p>{{ $t("footer.address.locetion") }}</p>
               <a href="tel:+998 90 999 99 99">+998 90 999 99 99</a>
            </div>
         </div>
         <div class="footer__messangers mt-5">
            <div class="footer__messangers-title">
               {{ $t("footer.messangers") }}
            </div>
            <div class="footer__messangers-icons">
               <a href="#">
                  <i class="fab fa-telegram-plane"></i>
               </a>
               <a href="#"
                  ><img
                     src="@/assets/img/icons/facebook.png"
                     alt="facebook icon"
               /></a>
               <a href="#"
                  ><img
                     src="@/assets/img/icons/instagram.png"
                     alt="instagram icon"
               /></a>
            </div>
         </div>
      </div>
      <div class="footer__down wrapper">
         <p>{{ new Date().getFullYear() }} © Barcha huquqlar himoyalangan.</p>
      </div>
   </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
   background: #f8f8f8;
   padding-top: 50px;
   margin-top: 100px;
   &__body {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
   }
   @media (max-width: 768px) {
      &__body {
         justify-content: space-around;
      }
      &__down {
         text-align: center;
      }
   }
   @media (max-width: 414px) {
      &__menu {
         width: 220px;
      }
   }

   &__menu-title {
      font-weight: 600;
      font-size: 18px;
      line-height: 30px;
      color: #164197;
      margin-bottom: 20px;
   }

   &__menu-list {
      list-style: none;
   }

   &__menu-link {
      font-weight: 500;
      font-size: 16px;
      line-height: 30px;
      color: #4f5665;
   }

   &__address-title {
      font-weight: 600;
      font-size: 18px;
      line-height: 30px;
      color: #164197;
      margin-bottom: 20px;
   }

   &__address-body {
      p,
      a {
         font-weight: 500;
         font-size: 16px;
         color: #4f5665;
         line-height: 30px;
         padding: 0;
         margin: 0;
      }
   }

   &__messangers-icons {
      display: flex;
      justify-content: space-between;
      min-width: 220px;
      a {
         width: 60px;
         height: 60px;
         border-radius: 50%;
         background: #ffffff;
         box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
         display: flex;
         justify-content: center;
         align-items: center;
         text-decoration: none;
         font-size: 34px;
      }
   }
   &__messangers-title {
      font-weight: 600;
      font-size: 18px;
      line-height: 30px;
      color: #164197;
      margin-bottom: 20px;
   }

   &__down {
      margin-top: 30px;
      padding: 20px 0px 40px 0;
      font-weight: 500;
      font-size: 16px;
      color: #afb5c0;
      border-top: 1px solid rgba(22, 65, 151, 0.1);
   }
}
</style>
