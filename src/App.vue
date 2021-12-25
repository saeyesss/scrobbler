<template>
  <v-app>
    <!-- <Landing/> -->

    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/footer";
// import Landing from '@/components/Landing'

export default {
  components: {
    Footer,
  },
  name: "App",
  data() {
    return {};
  },
  metaInfo: {
    title: "HealthCalculators",
    htmlAttrs: { lang: "en" },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
};
</script>
