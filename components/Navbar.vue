<template>
   <dir class="full-nav">
      <nav class="navbar">
         <div class="navbar__body">
            <nuxt-link :to="localePath('/')" class="navbar__logo">
               <img class="logo" src="@/assets/img/logo.png" alt="main logo" />
            </nuxt-link>
            <ul class="navbar__list">
               <li>
                  <nuxt-link :to="localePath('/news')" class="navbar__link">
                     {{ $t("pages.news") }}
                  </nuxt-link>
               </li>
               <li>
                  <nuxt-link :to="localePath('/projects')" class="navbar__link">
                     {{ $t("pages.projects") }}
                  </nuxt-link>
               </li>
               <li>
                  <nuxt-link
                     :to="localePath('/opportunity')"
                     class="navbar__link"
                  >
                     {{ $t("pages.opportunity") }}
                  </nuxt-link>
               </li>
               <li>
                  <nuxt-link :to="localePath('/about')" class="navbar__link">
                     {{ $t("pages.about") }}
                  </nuxt-link>
               </li>
               <li>
                  <nuxt-link :to="localePath('/contact')" class="navbar__link">
                     {{ $t("pages.contact") }}
                  </nuxt-link>
               </li>
            </ul>
            <div class="navbar__bars" @click="openNav">
               <span></span><span></span><span></span>
            </div>
            <!-- change language -->
            <div class="navbar__lang">
               <div class="navbar__lang-selected">
                  <span>{{ $t("lang") }}</span>
                  <img
                     src="@/assets/img/icons/angle-down.png"
                     alt="down icon"
                  />
               </div>
               <div class="navbar__lang-list">
                  <nuxt-link :to="switchLocalePath('ru')" data-lang="ru">
                     <img
                        src="@/assets/img/icons/ru.png"
                        alt="flag icon"
                        class="mr-1"
                     />
                     Rus</nuxt-link
                  ><br />
                  <nuxt-link :to="switchLocalePath('en')" data-lang="en">
                     <img
                        src="@/assets/img/icons/eng.png"
                        alt="flag icon"
                        class="mr-2"
                     />Eng
                  </nuxt-link>
                  <br />
                  <nuxt-link :to="switchLocalePath('uz')" data-lang="uz">
                     <img
                        src="@/assets/img/icons/uz.png"
                        alt="flag icon"
                        class="mr-2"
                     />Uzb
                  </nuxt-link>
               </div>
            </div>

            <div class="navbar__search" @click="openSearch">
               <img src="@/assets/img/icons/search-icon.svg" alt="seach icon" />
            </div>
         </div>
      </nav>
      <div class="nav__shadow">
         <img src="@/assets/img/icons/nav-shadow.png" alt="shadow elem" />
      </div>

      <!-- search modal -->
      <section class="search-modal">
         <div class="search-modal__sloy"></div>
         <div class="search-modal__body">
            <div class="search-modal__search-block">
               <i class="fas fa-search"></i>
               <input type="text" placeholder="Qidiruv..." />
            </div>
            <p class="search-modal__res text-center mt-3">
               Qidiruv natijasi yo'q !
            </p>
            <!-- <div class="search-modal__info">
               <p>
                  Search by - Yoshlar ishlari agentligi
               </p>
            </div> -->
         </div>
      </section>
   </dir>
</template>

<script>
export default {
   name: "Navbar",
   data: () => ({
      selectedLang: "",
   }),
   methods: {
      openNav() {
         const navList = document.querySelector(".navbar__list");
         const navbars = document.querySelector(".navbar__bars");
         navbars.classList.toggle("open");
         navList.classList.toggle("active");
      },
      openSearch() {
         const searchModal = document.querySelector(".search-modal");
         const seachClose = document.querySelector(".search-modal__sloy");
         searchModal.classList.add("active");
         seachClose.addEventListener("click", () => {
            searchModal.classList.remove("active");
         });
      },
   },
   mounted() {
      const langs = document.querySelectorAll(".navbar__lang-list a");
      const selected = document.querySelector(".navbar__lang-selected span");
      let val;
      langs.forEach((lang) => {
         lang.addEventListener("click", (e) => {
            let value = lang.textContent;
            selected.textContent = value;
            this.selectedLang = value;
            val = value;
         });
      });
   },
};
</script>

<style lang="scss" scoped>
.search-modal {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 100;
   display: flex;
   justify-content: center;
   transform: scale(0.2) translateY(-100%);
   opacity: 0;
   visibility: hidden;
   transition: all ease-in-out 0.3s;
   &.active {
      transform: scale(1) translateY(0);
      visibility: visible;
      opacity: 1;
   }

   // .search-modal__sloy

   &__sloy {
      position: relative;
      width: 100%;
      height: 100%;
      background: #3d7ea9bb;
   }

   // .search-modal__body

   &__body {
      position: absolute;
      top: 30px;
      width: 40vw;
      min-width: 370px;
      border-radius: 5px;
      overflow: hidden;
      background: #234f6d;
      z-index: 101;
      padding: 10px 0 0 0;
   }

   // .search-modal__search-block

   &__search-block {
      border: 2px solid #ffff;
      border-radius: 5px;
      padding: 8px 10px;
      margin: 0 12px;
      input {
         margin-left: 10px;
         border: 0;
         background: transparent;
         outline: 0;
         color: #c2d5d5;
         font-size: 1.2em;
         width: 85%;
         &::placeholder {
            color: #c2d5d5;
         }
      }
      i {
         font-size: 24px;
         color: #ffff;
      }
      // img {
      //    width: 24px;
      //    height: 24px;
      // }
   }

   // .search-modal__res

   &__res {
      color: #fff;
      font-size: 14px;
      min-height: 50px;
   }
   &__info {
      background: #173b54;
      padding: 10px;
      p {
         border: 1px solid #fff;
         padding: 3px 5px;
         border-radius: 3px;
         color: #fff;
         display: inline-block;
         font-size: 12px;
         margin: 0;
      }
   }
}
.navbar__lang {
   position: relative;
   @media (max-width: 1000px) {
      order: 1;
   }
   &:hover .navbar__lang-list {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
   }
}
.navbar__lang-list {
   position: absolute;
   background-color: rgba(255, 255, 255, 0.2);
   backdrop-filter: blur(15px);
   z-index: 10;
   width: 120%;
   border-radius: 5px;
   padding: 10px;
   margin-top: 5px;
   transform: translateY(55px);
   opacity: 0;
   visibility: hidden;
   transition: all ease-in-out 0.3s;
   img {
      width: 18px;
   }
   a {
      text-decoration: none;
      color: #3d7da9;
      margin: 0;
      font-size: 16px;
      &:hover {
         color: #fff;
      }
   }
}
.navbar__lang-selected {
   cursor: pointer;
   font-weight: 600;
   font-size: 16px;
   line-height: 20px;
   color: #ffffff;
   padding: 8px;
   background: rgba(255, 255, 255, 0.4);
   border-radius: 5px;
   transition: all ease-in 0.2s;
   &:hover {
      background: rgba(255, 255, 255, 0.2);
   }
   &:hover img {
      transform: translateY(5px);
      transition: all ease-in 0.2s;
   }
   img {
      margin-left: 8px;
      transition: all ease-in 0.2s;
   }
}
.full-nav {
   position: relative;
   z-index: 100 !important;
   top: 0;
}
.nav__shadow {
   width: 100vw;
   height: 50px;
   img {
      width: 100%;
      height: 60%;
      object-position: center;
      object-fit: cover;
   }
}
.navbar {
   background: #3d7da9;
   width: 100%;
   padding: 10px 0px;
   @media (max-width: 414px) {
      padding: 15px 0;
   }
   position: relative;
   &__logo {
      @media (max-width: 414px) {
         width: 170px;
      }
      img {
         width: 100%;
         height: 100%;
      }
   }
   &__body {
      max-width: 1220px;
      margin: 0 auto;
      display: flex;
      gap: 70px;
      align-items: center;
      justify-content: space-between;
   }

   &__list {
      display: flex;
      align-items: center;
      gap: 30px;
      list-style-type: none;
      text-transform: uppercase;
      margin-top: 15px;
      font-weight: 600;
   }

   &__link {
      color: #fff;
      text-decoration: none;
      &:after {
         content: "";
         display: block;
         width: 0;
         height: 2px;
         background-color: #fff;
         transition: all linear 0.3s;
         margin: 0 auto;
      }
      &:hover:after {
         width: 100%;
      }
   }

   &__search {
      background-color: #fff;
      cursor: pointer;
      width: 40px;
      height: 40px;
      margin-left: auto;
      @media (max-width: 414px) {
         width: 30px;
         height: 30px;
      }
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
   }
   &__bars {
      @media (max-width: 1000px) {
         order: 0;
      }
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      cursor: pointer;
      display: none;
      span {
         transition: all ease-in 0.2s;
         width: 25px;
         min-height: 2px;
         display: block;
         background: #fff;
         &:nth-child(2) {
            margin: 5px 0;
         }
      }
   }
   &__bars.open {
      span {
         transition: all ease-in 0.2s;
         &:nth-child(2) {
            transform: translateX(50px);
            opacity: 0;
         }
         &:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
         }
         &:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
         }
      }
   }
}

@media (max-width: 1124px) {
   .navbar__body {
      gap: 27px;
   }
   .navbar__list {
      gap: 10px;
   }
}
@media (max-width: 1000px) {
   .navbar__bars {
      display: flex;
      // margin-left: auto;
      order: 3;
   }
   .navbar__list {
      position: fixed;
      top: 70px;
      left: 0;
      display: flex;
      flex-direction: column;
      height: 100vh;
      max-width: 414px;
      width: 100%;
      align-items: center;
      background: #3894d1;
      padding-top: 75px;
      gap: 50px;
      transform: translateX(-100%);
      transition: all ease-in-out 0.2s;
      z-index: 10;
   }
   .navbar__body {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin: 0px 15px;
   }
   //   mobile navbar
   .navbar__list.active {
      position: fixed;
      top: 50px;
      left: 0;
      z-index: 10;
      display: flex;
      flex-direction: column;
      height: 100vh;
      max-width: 414px;
      align-items: center;
      background: #3894d1;
      padding-top: 75px;
      gap: 50px;
      transform: translateX(0%);
      transition: all ease-in-out 0.2s;
   }
}
</style>
