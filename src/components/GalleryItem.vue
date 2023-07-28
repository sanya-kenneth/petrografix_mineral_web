<template>
    <div class="gallery-item">
      <img :src="image" @click="showModall" />
      <div class="modal" :class="{ 'is-active': showModal }">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-content">
          <img :src="image" />
        </div>
        <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        showModal: false
      }
    },
    methods: {
      showModall() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      }
    }
  }
  </script>
  
  <style>
  .gallery-item {
    margin: 10px;
    overflow: hidden;
    width: 300px;
    height: 200px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
  
  .gallery-item:hover {
    transform: scale(1.05);
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: none;
    align-items: center;
    justify-content: center;
  }
  
  .modal.is-active {
    display: flex;
  }
  
  .modal-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  .modal-content {
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    z-index: 2;
  }
  </style>