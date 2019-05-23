<template>
  <div>
    <div class="sidenav">
      <div class="sidenav-content">
        <br>
        <h3>Portfolio template</h3>
        <img
          v-on:click="onShow()"
          class="imgs-profile img-thumbnail"
          src="https://sites.google.com/site/wanlakran/_/rsrc/1477892471986/home/summer_010.png"
          alt
        >
        <img
          class="imgs-skill img-thumbnail"
          src="https://img.etimg.com/thumb/msid-59008402,width-1200,height-900,resizemode-4,imgsize-55542/jobs/in-the-world-of-digitalisation-these-10-new-skills-will-help-you-to-stay-ahead/skill-.jpg"
          alt
        >
        <br>
        <img
          class="imgs-study img-thumbnail"
          src="https://www.how-to-study.com/images/study-skills-assessments.jpg"
          alt
        >

        <img
          class="imgs-exper img-thumbnail"
          src="http://www.sparkawards.com/wp-content/uploads/2014/03/Experience3-72.jpg"
          alt
        >
        <br>
        <img
          class="imgs-specailexper img-thumbnail"
          src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/brand_experience_report_2017_Future_trends_experiential-2017062710050119.jpg"
          alt
        >
      </div>
    </div>

    <div class="main">
      <div class="main-content">
        <Content v-show="contents"></Content>
      </div>
    </div>
  </div>
</template>

<script>
import Content from "../components/Content";

export default {
  name: "home",
  components: {
    Content
  },
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      contents: true
    };
  },
  methods: {},
  computed: {
    onShow: function() {
      if (this.contents) {
        this.contents = false;
      } else {
        this.contents = true;
      }
      console.log(this.contents);
    }
  }
};
</script>

<style lang="scss" scoped>
.sidenav {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding: 40px;
}

h3 {
  color: aliceblue;
}

.sidenav-content {
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: rgb(147, 165, 173);
}

.main {
  margin-left: 50%; /* Same as the width of the sidenav */
  font-size: 26px; /* Increased text to enable scrolling */
  padding: 50px;
}

.main-content {
  width: 100%;
  height: 100%;
}

.imgs-profile {
  margin-top: 20px;
  margin-left: 20px;
  width: 300px;
  height: 200px;
}
.imgs-study {
  margin-top: 5px;
  margin-left: 20px;
  width: 300px;
  height: 200px;
}
.imgs-skill {
  margin-top: 5px;
  margin-left: 20px;
  width: 200;
  height: 170px;
}
.imgs-exper {
  margin-top: 5px;
  margin-left: 20px;
  width: 200px;
  height: 170px;
}
.imgs-specailexper {
  margin-top: 5px;
  width: 250px;
  height: 150;
}
p.title {
  font-size: 18px;
}
</style>

