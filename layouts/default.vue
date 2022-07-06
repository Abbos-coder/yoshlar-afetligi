<template>
   <div @mouseenter="navScroll">
      <Navbar />
      <Nuxt />
      <Footer />
   </div>
</template>

<script>
export default {
   name: "default",
   methods: {
      navScroll() {
         window.addEventListener("scroll", (e) => {
            let scrolled = window.scrollY;
            if (window.scrollY > 200) {
               const nav = document.querySelector(".full-nav");
               //  const navShadow = document.querySelector('.full-nav')
               nav.style.position = "fixed";
               nav.style.zIndex = "10";
               nav.style.transition = "all linear .4s";
            } else if (window.scrollY < 200) {
               const nav = document.querySelector(".full-nav");
               nav.style.position = "relative";
               nav.style.zIndex = "0";
            }
         });
      },
   },
};
</script>

<style scoped>
.page-map {
   cursor: pointer;
}
</style>
