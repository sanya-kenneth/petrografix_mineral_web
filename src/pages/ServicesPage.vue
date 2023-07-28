<template>
  <div>
    <section class="container pt-3 mb-3">
    <h2 class="h3 block-title text-center">Our Services</h2>
    <div class="row pt-5 mt-30">
        <div class="col-lg-4 col-sm-6 mb-30 mt-3 pb-5">
            <a class="card" href="#">
                <div class="box-shadow bg-white rounded-circle mx-auto text-center" style="width: 90px; height: 90px; margin-top: -45px;"><i class="fa fa-search fa-3x head-icon"></i></div>
                <div class="card-body text-center">
                    <h3 class="card-title pt-1">Gemstone Identification</h3>
                    <p class="card-text text-sm">
                      We specialize in providing accurate and reliable gemstone identification services. Our team of certified gemologists uses a range of advanced analytical techniques and equipment to identify your gemstones and provide you with the information you need to make informed decisions.<br>
                      Whether you are a collector, a dealer, or a jeweler, our gemstone identification services can help you identify your gemstones and ensure their authenticity.</p>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 mt-3 pb-5">
            <a class="card" href="#">
                <div class="box-shadow bg-white rounded-circle mx-auto text-center" style="width: 90px; height: 90px; margin-top: -45px;"><i class="fa fa-diamond fa-3x head-icon"></i></div>
                <div class="card-body text-center">
                    <h3 class="card-title pt-1">Gemstone Grading</h3>
                    <p class="card-text text-sm">We provide professional gemstone grading services to help you determine the quality and value of your precious gemstones. Our team of certified gemologists uses internationally recognized grading standards and techniques to assess your gemstones and provide accurate and reliable results. <br>
                      Whether you need gemstone grading for insurance purposes, buying or selling, or personal collection management, we can provide you with the accurate and reliable grading you need.
                    </p>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 mt-3 pb-5">
            <a class="card" href="#">
                <div class="box-shadow bg-white rounded-circle mx-auto text-center" style="width: 90px; height: 90px; margin-top: -45px;"><i class="fa fa-superpowers fa-3x head-icon"></i></div>
                <div class="card-body text-center">
                    <h3 class="card-title pt-1">Mineralogic Analysis</h3>
                    <p class="card-text text-sm">We specialize in providing detailed and accurate mineralogic analysis of rock and mineral samples. Our team of experienced mineralogists uses a range of advanced analytical techniques to determine the mineral composition of your samples.<br>
Our mineralogic analysis services can provide insights into the geological history of your samples, their properties and potential uses, and can help you make informed decisions about your projects. <br>
Whether you are a researcher, an exploration company, or an industry professional, we can provide you with the mineralogic analysis you need to achieve your goals.</p>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 mt-3 pb-5">
            <a class="card" href="#">
                <div class="box-shadow bg-white rounded-circle mx-auto text-center" style="width: 90px; height: 90px; margin-top: -45px;"><i class="fa fa-globe fa-3x head-icon"></i></div>
                <div class="card-body text-center">
                    <h3 class="card-title pt-1">Mineral Exploration</h3>
                    <p class="card-text text-sm">We provide a comprehensive range of mineral exploration services, from initial prospecting to final production decision. We have a team of experienced geologists, geophysicists, and engineers who can help you identify, assess, and develop your mineral assets. <br>
                        Our mineral exploration services are tailored to the specific needs of our clients. We offer a wide range of services, including geological mapping, geochemical sampling, geophysical surveys, and drilling. We also have expertise in mineral resource estimation and mine planning.
                    </p>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 mt-3 pb-5">
            <a class="card" href="#">
                <div class="box-shadow bg-white rounded-circle mx-auto text-center" style="width: 90px; height: 90px; margin-top: -45px;"><i class="fa fa-car  fa-3x head-icon"></i></div>
                <div class="card-body text-center">
                    <h3 class="card-title pt-1">Petrographic Analysis</h3>
                    <p class="card-text text-sm">We specialize in providing accurate and reliable petrographic analysis of rock and mineral samples. Our team of experienced petrographers uses a range of advanced analytical techniques to determine the mineral composition, texture, and structure of your samples.<br>
                      Whether you are a researcher, an exploration company, or an industry professional, our petrographic analysis services can provide you with the information you need to make informed decisions about your projects.
                    </p>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-sm-6 mt-3 mb-30 pb-5">
            <a class="card" href="#">
                <div class="box-shadow bg-white rounded-circle mx-auto text-center" style="width: 90px; height: 90px; margin-top: -45px;"><i class="fa fa-graduation-cap fa-3x head-icon"></i></div>
                <div class="card-body text-center">
                    <h3 class="card-title pt-1">Training in geological skills</h3>
                    <p class="card-text text-sm">We offer comprehensive training in geological skills to help you develop the knowledge and expertise you need to succeed in the geosciences industry. <br>
                      Our geological training services are tailored to meet your specific needs and objectives.<br> Whether you are a student, a professional, or an industry organization, we can provide you with the training you need to succeed in the geosciences industry.<br>
                    </p>
                </div>
            </a>
        </div>
    </div>
</section>
<FooterComponent />
  </div>
</template>


<script>
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'ServicesPage',
  components: {
    FooterComponent
  }
}
</script>


<style scoped>
body{
    margin-top:20px;
    background:#eee;
}
.card::after {
    display: block;
    position: absolute;
    bottom: -10px;
    left: 20px;
    width: calc(100% - 40px);
    height: 35px;
    background-color: #fff;
    -webkit-box-shadow: 0 19px 28px 5px rgba(64,64,64,0.09);
    box-shadow: 0 19px 28px 5px rgba(64,64,64,0.09);
    content: '';
    z-index: -1;
}
/* a {
  text-decoration: none;
} */
a.card {
    text-decoration: none;
    color: #188bbc;
}

a.card:hover {
  color: #ee634bd2;
}

.card {
    position: relative;
    border: 0;
    border-radius: 0;
    background-color: #fff;
    -webkit-box-shadow: 0 12px 20px 1px rgba(64,64,64,0.09);
    box-shadow: 0 12px 20px 1px rgba(64,64,64,0.09);
    height: 100%;
}
.card {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,0.125);
    border-radius: .25rem;
}

.box-shadow {
    -webkit-box-shadow: 0 12px 20px 1px rgba(64,64,64,0.09) !important;
    box-shadow: 0 12px 20px 1px rgba(64,64,64,0.09) !important;
}

.ml-auto, .mx-auto {
    margin-left: auto !important;
}
.mr-auto, .mx-auto {
    margin-right: auto !important;
}
.rounded-circle {
    border-radius: 50% !important;
}
.bg-white {
    background-color: #fff !important;
}

.ml-auto, .mx-auto {
    margin-left: auto !important;
}

.mr-auto, .mx-auto {
    margin-right: auto !important;
}
.d-block {
    display: block !important;
}
img, figure {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
}

.card-text {
    padding-top: 12px;
    color: #1a1a1ad8;
    text-align: left;
}

.text-sm {
    /* font-size: 13px !important; */

}
p, .p {
    margin: 0 0 16px;
}

.card-title {
    margin: 0;
    font-family: "Montserrat",sans-serif;
    font-size: 18px;
    font-weight: 900;
}

.pt-1, .py-1 {
    padding-top: .25rem !important;
}

.head-icon{
    margin-top:18px;
    color:#ee634bd2
}
</style>