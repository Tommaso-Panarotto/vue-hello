const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'VUE INTRO',
            imageUrl: `https://miro.medium.com/v2/resize:fit:1100/format:webp/1*XH9l-6x9SUlmGxPlZFaoIA.jpeg`
        }
    }
}).mount('#app')