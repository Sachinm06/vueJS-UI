<template>
  <div class="home">
    <section>
      <vue-slick-carousel class="slider-area" :dots="true" :arrows="false" :autoplay="true" :autoplaySpeed="500">
        <div class="slide" v-for="index in 4" :key="index">
          <img :src="require(`@/assets/images/banner_1920_550.jpg`)" alt="">
          <div class="slide-text">
            <div>
              <h2>Lorem ipsum dolor sit amet <br> consectetur adipisicing.</h2>
            </div>
            <div>
              <p>Elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna <br> aliquam
                erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud <br>exerci tation ullamcorper
                suscipit lobortis nisl ut aliquip ex ea comm...</p>
            </div>
            <button class="button-container primary-button buttonA buttonB">
              LEARN MORE
              <div class="arr"></div>
            </button>
          </div>
        </div>
      </vue-slick-carousel>
    </section>
  </div>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css';

export default {
  name: 'HomeView',
  components: {},
};
</script>

<style scoped>
.slider-area {
  width: 100%;
  height: 550px;
}

.slide {
  position: relative;
}

.slide img {
  height: 550px;
  width: 100%;
  object-fit: cover;
}

.slide-text {
  position: absolute;
  left: 6rem;
  top: 50%;
  transform: translate(0%, -50%);
  color: var(--color-content-1);
}

.slide-text h2 {
  font-family: var(--avenir-medium);
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.5rem;
  text-align: start;
}

.slide-text p {
  font-family: var(--avenir-medium);
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 0.7rem;
  line-height: 1.4rem;
  text-align: start;
}
</style>
