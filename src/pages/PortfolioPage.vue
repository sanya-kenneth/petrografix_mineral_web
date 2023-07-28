<template>
    <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4" v-for="(image, index) in images" :key="index">
          <div class="card">
            <img :src="image" class="card-img-top" alt="Image">
            <div class="card-body">
              <p class="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent/>
</div>
  </template>
  
  <script>
  import FooterComponent from '../components/FooterComponent.vue'
  export default {
    components: {
    FooterComponent
  },
    data() {
      return {
        images: [
          require(`../assets/photos/1.jpg`),
          require(`../assets/photos/2.jpg`),
          require(`../assets/photos/3.jpg`),
          require(`../assets/photos/11.jpg`),
          require(`../assets/photos/5.jpg`),
          require(`../assets/photos/6.jpg`),
          require(`../assets/photos/7.jpg`),
          require(`../assets/photos/8.jpg`),
          require(`../assets/photos/9.jpg`)
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    border: none;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  </style>