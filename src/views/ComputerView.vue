<template>
  <header class="menu">
    <ul class="sidebar">
      <li><img src="../components/icons/logo.png" alt="" class="icon" /></li>
      <li><router-link to="/">第一個切版</router-link></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#projects">Learn</a></li>
      <li><a href="#about">Clone me</a></li>
      <li><a href="#contact">Find me</a></li>
    </ul>
  </header>
  <div class="banner">
    <div>
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
  <div class="container">
  <section class="quick-links container">
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
  <footer class="container">
    <h2>Projects</h2>
    <div class="projects">
      <swiper
        :spaceBetween="20"
        :slides-per-view="2"
        :modules="modules"
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
.container{
  max-width:1920px;
  margin: 0 auto;
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
.sidebar li {
  display: inline-block;
}

.sidebar li a {
  color: #000;
  font-weight: 600;
  display: block;
  padding: 15px 30px;
  font-size: 20px;
  display: block;
}
.banner {
  display: flex;
  border-bottom: 4px solid #000;
  justify-content: center;
  align-items: center;

}
.banner h1 {
  font-size: 100px;
  font-weight: 800;
  margin-bottom: 12px;
  line-height: 0.9;
}
.subhead {
  font-size: 25px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 35px;
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
  color: #000000;
  padding: 16px 24px;
  cursor: pointer;
  border: 4px solid #000;
  font-weight: 600;
  font-size: 18px;
}
.quick-links {
  position: relative;
  padding: 10px;
  z-index: 1;
  margin-top: -100px;
  margin-left: 160px;


}
.quick-links h3 {
  font-weight: 700;
  font-size: 35px;
  margin-bottom: 5px;
  text-align: start;
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
  width: 20%;
  text-align: start;
  align-items: center;
  justify-content: space-between;
  margin-left: -4px;
}
footer {
  position: relative;
  margin-bottom: 100px;
}
footer h2 {
  font-size: 80px;
  font-weight: 700;
  margin-left: 160px;
}
.projects{
  margin-left: 60px;
}
.project {
  border: 4px solid #000;
  box-shadow: 8px 8px 0 0 #000;
  margin-left: 100px;
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
  margin-right: auto; /* Push the .button-circles to the left */
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
  color: #555;
}

/* button 的 hover 效果 */
button:hover, .link-button:hover {
  background-color: #999; 
  color: #fff;
}
@media (max-width: 768px) {
  .menu {
    flex-direction: column;
  }

  .sidebar li {
    display: block;
    text-align: center;
  }

  .banner {
    flex-direction: column;
  }

  .banner h1 {
    font-size: 50px
  }

  .subhead {
    font-size: 18px;
  }

  .mac {
    width: 100%;
    margin-top: 20px;
  }

  .quick-links {
    margin-left: 0;
    margin-top: 20px;
  }

  .link-button {
    width: 100%;
    margin-left: 0;
  }

  .projects {
    margin-left: 0;
  }

  .project {
    margin-left: 0;
    margin-top: 20px;
  }
}
@media (max-width: 480px) {
  .banner h1 {
    font-size: 35px;
  }

  .subhead {
    font-size: 16px;
  }

  .quick-links h3, .modal-body h3 {
    font-size: 25px;
  }

  .modal-body p {
    font-size: 16px;
  }
}
</style>
