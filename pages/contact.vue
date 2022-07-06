<template>
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
</template>

<script>
export default {
   name: "contact",
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/_main.scss";
@import "~/assets/styles/_media.scss";
.contact {
   margin-top: -50px;
}
</style>
