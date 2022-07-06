<template>
   <section class="search-modal">
      <div class="search-modal__sloy"></div>
      <div class="search-modal__body">
         <div class="search-modal__search-block">
            <img src="@/assets/img/icons/search-icon3.svg" alt="search icons" />
            <input type="text" placeholder="Search docs" />
         </div>
         <p class="search-modal__res text-center mt-3">
            No recent searches !
         </p>
         <div class="search-modal__info">
            <p>
               Search by - Yoshlar ishlari agentligi
            </p>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   methods: {
      openSearch() {
         const searchModal = document.querySelector(".search-modal");
         const seachClose = document.querySelector(".search-modal__sloy");
         searchModal.classList.add("active");
         seachClose.addEventListener("click", () => {
            searchModal.classList.remove("active");
         });
      },
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
      border-radius: 5px;
      overflow: hidden;
      background: #234f6d;
      z-index: 101;
      padding: 10px 0 0 0;
   }

   // .search-modal__search-block

   &__search-block {
      border: 2px solid #00ffa3;
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
         &::placeholder {
            color: #c2d5d5;
         }
      }
      img {
         width: 24px;
         height: 24px;
      }
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
</style>
