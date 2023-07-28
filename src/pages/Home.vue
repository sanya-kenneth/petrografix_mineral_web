<template>
    <div>
    <div class="image-container">
        <b-img class="home-img" src="../assets/home/mmm.png" fluid alt="Responsive image"></b-img>
        <div v-if="store.animatedText">
        <div class="p-container">
            <b-p>Trusted experts in</b-p>
            <b-section class="animation">
                <div class="first"><div>Petrographic Analysis</div></div>
                <div class="second"><div>Mineral Exploration</div></div>
                <div class="third"><div>Mineralogic Analysis</div></div>
                <div class="fourth"><div>Gemstone Identification</div></div>
                <div class="fifth"><div>Gemstone Grading</div></div>
            </b-section>
        </div>
        <p class="tag-line animate-charcter">"Equipped for excellence"</p>
        </div>
    </div>
    <div class="row vision-container">
        <div class="col-lg-4 col-sm-6">
            <div>
                <b-card no-body class="overflow-hidden vision-card" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col>
                        <b-card-body title="Vision ">
                        <b-card-text class="vision-text">
                            To be the leading provider of technical and advisory services to the minerals industry and learning institutions, known for our expertise, innovation, and commitment to excellence.
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </div>
        </div>
        <div class="col-lg-4 col-sm-6">
            <div>
                <b-card no-body class="overflow-hidden vision-card" style="max-width: 540px;">
                    <b-row no-gutters>
                    <!-- <b-col md="5">
                        <b-img src="../assets/home/cut_stones2.png" alt="Image" class="rounded-0 droplet-img"></b-img>
                    </b-col> -->
                    <b-col>
                        <b-card-body title="Mission">
                        <b-card-text class="vision-text">
                            To provide high-quality technical and advisory services to the minerals industry and learning institutions, using cutting-edge technology to solve complex problems and help our clients achieve their goals.
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </div>
        </div>
        <div class="col-lg-4 col-sm-6">
            <div>
                <b-card no-body class="overflow-hidden vision-card" style="max-width: 540px;">
                    <b-row no-gutters>
                    <!-- <b-col md="5">
                        <b-img src="../assets/home/cut_stones2.png" alt="Image" class="rounded-0 droplet-img"></b-img>
                    </b-col> -->
                    <b-col>
                        <b-card-body title="Goals ">
                        <b-card-text class="vision-text">
                            <ul>
                                <li>Provide high-quality technical and advisory services to the minerals industry and learning institutions.</li>
                                <li>Build a strong team of experts in geology, mineralogy, gemology, and business.</li>
                            </ul>
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </div>
        </div>
    </div>
    <h2>Our Services</h2>
    <div class="row droplet-container">
        <div class="col-lg-4 col-sm-6">
            <div>
                <b-card no-body class="overflow-hidden services-card" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col md="5">
                        <b-img src="../assets/home/cut_stones2.png" alt="Image" class="rounded-0 droplet-img"></b-img>
                    </b-col>
                    <b-col md="7" sm="12">
                        <b-card-body title="Petrographic Analysis ">
                        <b-card-text class="service-card-text">
                            Through this analysis, we are able to provide insights into the geological history and potential uses of different rock samples.
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </div>
        </div>
        <div class="col-lg-4 col-sm-6">
            <div>
                <b-card no-body class="overflow-hidden services-card" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col md="5">
                        <b-img src="../assets/home/mine_stones.png" alt="Image" class="rounded-0 droplet-img"></b-img>
                    </b-col>
                    <b-col md="7">
                        <b-card-body title="Mineral Exploration ">
                        <b-card-text class="service-card-text">
                            We have high calibre Senior Geological Consultants with expertise to undertake mineral exploration activities.
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </div>
        </div>
        <div class="col-lg-4 col-sm-6">
            <div>
                <b-card no-body class="overflow-hidden services-card" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col md="5">
                        <b-img src="../assets/home/minerals.png" alt="Image" class="rounded-0 droplet-img"></b-img>
                    </b-col>
                    <b-col md="7">
                        <b-card-body title="Mineral Identification">
                        <b-card-text class="service-card-text">
                            Our team of experienced mineralogists identify and categorize minerals by using their physical properties and high powered microscopes.
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </div>
        </div>
    </div>
    <div class="row droplet-container">
        <div class="col-lg-4 col-sm-6">
            <div>
                <b-card no-body class="overflow-hidden services-card" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col md="5">
                        <b-img src="../assets/home/coal-pile.png" alt="Image" class="rounded-0 droplet-img"></b-img>
                    </b-col>
                    <b-col md="7">
                        <b-card-body title="Gemstone Identification">
                        <b-card-text class="service-card-text">
                            Our team of gemologists uses a range of advanced analytical techniques and equipment to identify your gemstones. 
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </div>
        </div>
        <div class="col-lg-4 col-sm-6">
            <div>
                <b-card no-body class="overflow-hidden services-card" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col md="5">
                        <b-img src="../assets/home/mining.png" alt="Image" class="rounded-0 droplet-img"></b-img>
                    </b-col>
                    <b-col md="7">
                        <b-card-body title="Mineralogic Analysis ">
                        <b-card-text class="service-card-text">
                            We provide insights into the geological history of your samples, their properties and potential uses to help you make informed decisions.
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </div>
        </div>
        <div class="col-lg-4 col-sm-6">
            <div>
                <b-card no-body class="overflow-hidden services-card" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col md="5">
                        <b-img src="../assets/home/mountains.png" alt="Image" class="rounded-0 droplet-img"></b-img>
                    </b-col>
                    <b-col md="7">
                        <b-card-body title="Gemstone Grading">
                        <b-card-text class="service-card-text">
                        Our team of gemologists uses internationally recognized grading standards and techniques to assess your gemstones and provide accurate and reliable results.
                        </b-card-text>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </div>
        </div>
    </div>
    <div>
        <FooterComponent />
    </div>
    </div>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue'
import { store } from '../store.js'

export default {
  name: 'HomePage',
  components: {
    FooterComponent
  },
  data() {
    return {
      store
    }
  }
}
</script>

<style scoped>

.droplet-container {
    margin-top: 3%;
    margin-left: 1%;
    margin-right: 1%;
    margin-bottom: 3%;
}
.services-card{
    height: 270px;
    margin-top: 5px;
}
.vision-container {
    margin-top: 3%;
    margin-left: 1%;
    margin-right: 1%;
    margin-bottom: 3%;
}
.vision-text-head {
    color: #ec5418;
}
.vision-text {
    text-align: left;
}
.vision-card {
    height: 230px;
    margin-top: 5px;
}
.service-card-text {
    text-align: left;
}
.home-img {
    /* height: 0%; */
    width: 100%;
    z-index: 0;
    /* margin-top: 0; */
    /* margin-bottom: 20%; */
}

.droplet-img {
    margin-top:10%;
    width: 80%;
}

.card-title {
    color: #157aa6;
}

/* .text-over-img {
z-index:1;
font-size: 1.2em;
margin-top: 0px;
} */

.image-container {
  /* position: relative; */
  /* text-align: center; */
  /* color: rgb(234, 100, 28); */
}

/* Centered text */
.centered-text {
  /* position: absolute;  */
  /* top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: x-large;
  font-weight: bold;
  text-shadow: 0 0 7px rgba(255,255,255,.3), 0 0 3px rgba(255,255,255,.3); */
}

.p-container {
  position: absolute;  
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: x-large;
  font-weight: bold;
  text-shadow: 0 0 7px rgba(255,255,255,.3), 0 0 3px rgba(255,255,255,.3);



  color: #ee634bd2;
  /* font-size: 2.26rem; */
  /* text-transform: uppercase; */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.animation {
  height:50px;
  overflow:hidden;
  margin-left: 1rem;
  border: 3px red bold;
}

.animation > div > div {
  padding: 0.25rem 0.75rem;
  height:2.81rem;
  margin-bottom: 2.81rem;
  display:inline-block;
}

.animation div:first-child {
  animation: text-animation 8s infinite;
}

.first div {
  background-color:#188bbc;
  color:aliceblue;
}
.second div {
  background-color:#ec5418;
  color:aliceblue;
}
.third div {
  background-color:#188bbc;
  color:aliceblue;
}

.fourth div {
  background-color:#ec5418;
  color:aliceblue;
}

.fifth div {
  background-color:#188bbc;
  color:aliceblue;
}

@keyframes text-animation {
  0% {margin-top: 0;}
  10% {margin-top: 0;}
  20% {margin-top: -4.82rem;}
  30% {margin-top: -4.82rem;}
  40% {margin-top: -10.24rem;}
  60% {margin-top: -10.24rem;}
  70% {margin-top: -15.62rem;}
  80% {margin-top: -15.62rem;}
  90% {margin-top: 0;}
  100% {margin-top: 0;}
}

.tag-line {
    position: absolute;  
    top: 40%;
    left: 40%;
    color: #188bbc;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

.animate-charcter
{
   /* text-transform: uppercase; */
  background-image: linear-gradient(
    -225deg,
    #231557ae 0%,
    #43107ac9 29%,
    #ff1361 67%,
    #ec5418 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  /* opacity: 10; */
  background-clip: text;
  /* text-fill-color: transparent; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 10s linear infinite;
  display: inline-block;
      font-size: 23px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

@media screen and (max-width: 768px) {
    .droplet-img {
    margin-top:10%;
    width: 30%;
}
.services-card{
    height: auto;
    margin-top: 10px;
}
}
@media screen and (max-width: 991px) {
    .p-container {
  position: absolute;  
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: medium;
  font-weight: bold;
  text-shadow: 0 0 7px rgba(255,255,255,.3), 0 0 3px rgba(255,255,255,.3);



  color: #ee634bd2;
  /* font-size: 2.26rem; */
  /* text-transform: uppercase; */
  height: 100vh;
  display: flex;
  align-items: left;
  justify-content: left;
}
.animation > div > div {
  padding: 0.3rem 0.75rem;
  height:2.81rem;
  margin-bottom: 2.81rem;
  display:inline-block;
  font-size: small;
}
@keyframes text-animation {
  0% {margin-top: 0;}
  10% {margin-top: 0;}
  20% {margin-top: -2.82rem;}
  30% {margin-top: -6.82rem;}
  40% {margin-top: -9.24rem;}
  60% {margin-top: -12.24rem;}
  70% {margin-top: -15.62rem;}
  80% {margin-top: -15.62rem;}
  90% {margin-top: 0;}
  100% {margin-top: 0;}
}
.tag-line {
    position: absolute;  
    top: 24%;
    left: 27%;
    font-size: large;
    /* color: #188bbc; */
    /* font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif */
}
/* nav-bar {
    position: absolute;
    z-index: 10;
} */
}
</style>
