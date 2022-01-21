<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <div v-for="item in items" :key="item.cationL">
        <b-carousel-slide
          :caption="item.slide"
          :text="item.text"
          :img-src="item.image"
        ></b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      items: [
        {
          cationL: "A",
          image:
            "https://cdn.pixabay.com/photo/2017/02/28/02/58/woman-2104756_1280.jpg",
          text: "ok",
        },
        {
          cationL: "B",
          image:
            "https://cdn.pixabay.com/photo/2022/01/12/07/57/bear-6932230_1280.jpg",
          text: "ok",
        },
        {
          cationL: "C",
          image:
            "https://cdn.pixabay.com/photo/2022/01/15/18/04/grey-crowned-crane-6940364_1280.jpg",
          text: "ok",
        },
      ],
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
