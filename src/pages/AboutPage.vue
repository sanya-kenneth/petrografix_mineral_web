<template>
    <div>
        <img class="about-img" src="../assets/home/about.png" fluid alt="Responsive ">
        <div class="about">
    <h1>{{ companyName }}</h1>
    <div class="description">
      <p>Petrografix is a consultancy-based company that provides technical and advisory services to the minerals industry and learning institutions. 
        Our team of experienced professionals uses cutting-edge technology to provide customized solutions to clients across a range of industries.
        <br><br>
        Our major services include rock and mineral identification, petrographic study, technical advice on gemstones, expertise in geological mapping and mineral exploration activities, on-site training in mineral exploration and mineral identification, and online teaching resources.
        <br><br>
        We have well-equipped units for petrography, mineralogy, gemology, mineral exploration, and an advisory unit. We also have a mini-museum, a collection of textbooks and online resources on geological disciplines, and a gemstone cutting and polishing unit in the works. Petrografix is suited for students taking geology, civil engineering, agriculture, and mining engineering courses, among others.
        <br><br>
        Petrografix is located in Kawafu in Entebbe and has been in operation since 2019.<br>
The company's primary clientele includes mining and construction companies, educational institutions, and individuals interested in gemstones.<br>
In addition to providing technical expertise and training, Petrografix also offers consulting services to help clients make informed decisions about geological and mineral-related projects.<br>
The online learning resources provided by Petrografix are available to anyone interested in learning more about geology and mineral exploration, regardless of their location or background.
The company's mini museum is open to the public and serves as a valuable educational resource for visitors interested in geology and mineralogy.
<br><br>
Petrografix is committed to using sustainable practices in its operations and encourages its clients to do the same. This includes minimizing waste and environmental impact, promoting responsible mining practices, and supporting local communities.
The company regularly collaborates with other experts in the field to stay up-to-date on the latest advancements in geology and mineral exploration, and to provide clients with the most accurate and reliable information possible.
<br>
We believe that it is our responsibility to help our clients make informed decisions about their mineral resources while minimizing the impact on the environment.
       </p>
      <p>Our team includes experts in geology, mineralogy, gemology, and business, who work together to provide customized solutions that meet our clients' unique needs.</p>
    </div>
  </div>
    <FooterComponent/>
</div>
  </template>


<script>
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'AboutPage',
  components: {
    FooterComponent
  },
  data() {
    return {
      companyName: 'About Us',
    };
  },
}
</script>

<style scoped>
.about-img {
    width: 51%;
    height: 30% !important;
}
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
}
.about h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
}
.description {
  margin-top: 50px;
  text-align: justify;
}
.description ul {
  list-style: disc;
  margin-left: 40px;
  margin-bottom: 20px;
  text-align: left;
}
</style>
