<template>
  <header class="menu">
    <ul class="sidebar">
      <li><img src="../components/icons/logo.png" alt="" class="icon" /></li>
      <li><router-link to="/">第一個切版</router-link></li>
      <li><router-link to="/">Blog</router-link></li>
      <li><router-link to="/">Learn</router-link></li>
      <li><router-link to="/">Clone me</router-link></li>
      <li><router-link to="/">Find me</router-link></li>
    </ul>
  </header>
  <div class="container">
  <div class="banner">
    <div class="banner-text">
      <h1>
        Hello.
        <br />
        I'm Mac.
      </h1>
      <div class="subhead">
        I'm a free retro Webflow template made by
        <br />
        <a href="#" class="name">Mackenzie Child</a>.
      </div>
      <button>Clone me on Webflow</button>
    </div>
    <img class="mac" src="../components/icons/computer.png" alt="" />
  </div>
  <section class="quick-links">
    <h3>Quick links</h3>
    <div class="links-container">
      <button class="link-button">
        Blog<img src="../components/icons/arrow.png" alt="" />
      </button>
      <button class="link-button">
        Projects<img src="../components/icons/arrow.png" alt="" />
      </button>
      <button class="link-button">
        About<img src="../components/icons/arrow.png" alt="" />
      </button>
      <button class="link-button">
        Contact<img src="../components/icons/arrow.png" alt="" />
      </button>
    </div>
  </section>
  <footer>
    <h2>Projects</h2>
    <div class="projects">
      <swiper
        :spaceBetween="20"
        :slides-per-view="2"
        :modules="modules"
         :breakpoints="{
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    }
  }"
      >
        <swiper-slide>
          <div class="project">
            <div class="modal-header">
              <div class="button-circles">
                <img src="../components/icons/radio.png" alt="" />
                <img src="../components/icons/radio.png" alt="" />
              </div>
              <div class="title">
                <div>2020-04-08-project.html</div>
              </div>
            </div>
            <div>
              <img class="fake" src="https://fakeimg.pl/500x200/ff0010" />
            </div>
            <div class="modal-body">
              <h3>Dolorum Ullam Totam</h3>
              <p>
                Consequatur consequatur et quisquam sit velit. Distinctio perferendis sint
                omnis. Vitae et sint repellendus consequatur cumque ducimus eos atque.
                Eligendi cupiditate praesentium est dolore qui et. Iure non minima
                architecto laudantium asperiores.
              </p>
              <button>
                <a href="#" class="button">View project</a>
              </button>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="project">
            <div class="modal-header">
              <div class="button-circles">
                <img src="../components/icons/radio.png" alt="" />
                <img src="../components/icons/radio.png" alt="" />
              </div>
              <div class="title">
                <div>2020-04-08-project.html</div>
              </div>
            </div>
            <div>
              <img class="fake" src="https://fakeimg.pl/500x200/ff0010" />
            </div>
            <div class="modal-body">
              <h3>Dolorum Ullam Totam</h3>
              <p>
                Consequatur consequatur et quisquam sit velit. Distinctio perferendis sint
                omnis. Vitae et sint repellendus consequatur cumque ducimus eos atque.
                Eligendi cupiditate praesentium est dolore qui et. Iure non minima
                architecto laudantium asperiores.
              </p>
              <button>
                <a href="#" class="button">View project</a>
              </button>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="project">
            <div class="modal-header">
              <div class="button-circles">
                <img src="../components/icons/radio.png" alt="" />
                <img src="../components/icons/radio.png" alt="" />
              </div>
              <div class="title">
                <div>2020-04-08-project.html</div>
              </div>
            </div>
            <div>
              <img class="fake" src="https://fakeimg.pl/500x200/ff0010" />
            </div>
            <div class="modal-body">
              <h3>Dolorum Ullam Totam</h3>
              <p>
                Consequatur consequatur et quisquam sit velit. Distinctio perferendis sint
                omnis. Vitae et sint repellendus consequatur cumque ducimus eos atque.
                Eligendi cupiditate praesentium est dolore qui et. Iure non minima
                architecto laudantium asperiores.
              </p>
              <button>
                <a href="#" class="button">View project</a>
              </button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </footer>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px; 
  margin: 0 auto;
  padding: 0 20px; 
  position: relative;
}
.menu {
  display: flex;
  background: #c4c4c4;
  justify-content: start;
  border-bottom: 4px solid #000;
}
.icon {
  width: 50px;
}
.sidebar {
  display: flex;
  align-items: center;
}
.sidebar li a {
  color: #000;
  font-weight: 600;
  padding: 15px 30px;
  font-size: 20px;
  display: block;
}

.banner {
  display: flex;
  position: relative;
  margin-top: 50px;
}

.banner::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -30px;
  border-bottom: 4px solid #000; 
  width: 100vw;
  margin-left: calc(-50vw + 50%); 
}

.banner-text h1 {
  font-size: 100px;
  font-weight: 800;
  margin-bottom: 12px;
  line-height: 0.9;
}
.subhead {
  font-size: 25px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 20px;
}
.quick-links {
  position: relative;
  margin-top: -60px; 

}
.name {
  text-decoration: underline;
  color: #000;
  font-weight: 600;
}

.mac {
  width: 50%;
}

button {
  background: #c4c4c4;
  padding: 16px 24px;
  cursor: pointer;
  border: 4px solid #000;
  font-weight: 600;
  font-size: 18px;
}
button a{
  color: #000000;
}
.quick-links h3 {
  font-weight: 700;
  font-size: 35px;
  margin-bottom: 5px;
}

.links-container {
  display: flex;
}

.link-button {
  color: #000;
  display: flex;
  border: 4px solid #000;
  padding: 15px 20px;
  font-weight: 600;
  font-size: 20px;
  width: 25%;
  justify-content: space-between;
  margin-left: -4px;
}

footer {
  position: relative;
  margin: 60px 0;
}
footer h2 {
  font-size: 80px;
  font-weight: 700;
}

.project {
  border: 4px solid #000;
  box-shadow: 8px 8px 0 0 #000;
  margin-top:10px;
}
.fake {
  width: 100%;
  border-bottom: 4px solid #000;
}
.modal-header {
  background: #c4c4c4;
  display: flex;
  padding: 20px 15px;
  border-bottom: 4px solid #000;
  justify-content: center;
  text-align: center;
}
.button-circles {
  margin-right: auto;
}
.title {
  font-weight: 600;
  font-size: 20px;
  display: flex;
  flex-grow: 1;
  justify-content: center;
}
.modal-body {
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
}
.modal-body h3 {
  margin: 15px 0;
  font-weight: 700;
  font-size: 30px;
}

.modal-body p {
  margin-bottom: 24px;
  font-size: 20px;
}
.sidebar li a:hover, .name:hover {
  background-color: #999; 

}

button:hover, .link-button:hover {
  background-color: #999; 
}
@media (max-width: 768px) {
  .sidebar{
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
  .sidebar li {
    width: 100%;
    text-align: center; 
  }
 .sidebar li a {
    padding: 0;
    text-align: center; 
  }
  .banner {
    flex-direction: column;
  }
  .banner-text {
    padding: 0 60px; 
    margin-top: 30px;
    text-align: center;
  }
  .icon {
    margin: 0 auto; 
  }
  .bannner{
   margin-top: 0;
  }
  
  .banner h1 {
    font-size: 50px
  }

  .subhead {
    font-size: 18px;
  }

  .mac {
    width: 80%;
    margin: 0 auto;
  }
  .quick-links {
    margin-left: 0;
    margin-top: 0px;
  }

  .links-container {
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .link-button {
    flex: 1 0 auto;
    margin: 0px;
    min-width: 150px;
    font-size: 15px;
  }

  .quick-links h3 {
    font-size: 30px;
  }

  .modal-body h3 {
    font-size: 20px;
  }
  .modal-body p {
    font-size: 16px;
  }

  footer h2 {
    font-size: 40px;
  }

  .modal-body h3 {
    font-size: 18px;
  }

  .modal-body p {
    font-size: 14px; 
  }

  .banner::after{
    display: none;
  }
}

</style>