import { reactive } from 'vue'

export const store = reactive({
  animatedText: true,
  setAnimatedText(input) {
    this.animatedText = !(input === false && this.animatedText === true);
  }
})
