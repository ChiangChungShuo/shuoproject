<template>
  <header>
    <h1><a href="#">FUEGO.</a></h1>
    <nav>
      <ul>
        <li><router-link to="/computer">第二個切版</router-link></li>
        <li><a href="#home">HOME</a></li>
        <li><a href="#gallery">GALLERY</a></li>
        <li><a href="#contacts1">CONTACTS</a></li>
        <li><a href="#contacts2">CONTACTS</a></li>
        <li><a href="#contacts3">CONTACTS</a></li>
      </ul>
    </nav>
    <a href="#"><img class="icon" src="../components/icons/menu.png" alt="" /></a>
  </header>
  <section class="block">
    <div>
      <img class="img-left" src="../components/icons/octopus.jpg" />
    </div>
    <div class="content">
      <h2>OUT THERE</h2>
      <p>Lorem ipsum ipsum dolor dolor sit amet,<br />Lorem ipsum dolor sit amet...</p>
      <button>PURCHASE</button>
    </div>
  </section>
  <section class="block black">
    <div class="content-left">
      <h2>OUT THERE</h2>
      <p>Lorem ipsum dolor ipsum dolorsit amet,<br />Lorem ipsum dolor sit amet...</p>
      <button class="w-bg">PURCHASE</button>
    </div>
    <div>
      <img class="img-right" src="../components/icons/seahorse.jpg" />
    </div>
  </section>
  <section class="block">
    <div>
      <img class="img-left" src="../components/icons/whale.gif" />
    </div>
    <div class="content">
      <h2>OUT THERE</h2>
      <p>Lorem ipsum doloripsum dolor sit amet,<br />Lorem ipsum dolor sit amet...</p>
      <button>PURCHASE</button>
    </div>
  </section>
  <section class="block black">
    <div class="content-left">
      <h2>OUT THERE</h2>
      <p>Lorem ipsum doloripsum dolor sit amet,<br />Lorem ipsum dolor sit amet...</p>
      <button class="w-bg">PURCHASE</button>
    </div>
    <div>
      <img class="img-right" src="../components/icons/jellyfish.jpg" />
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
a {
  color: #000;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

h1 {
  font-size: 24px;
  font-weight: bold;
}

nav ul {
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style: none;
}
li {
  padding: 0 20px;
}
li a:hover {
  color: red;
  display: block;
}
.icon {
  width: 30px;
}

.block {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.img-left {
  width: 500px;
  margin-right: 150px;
}

.img-right {
  width: 500px;
  margin-left: 150px;
}
.content {
  text-align: right;
  padding-left: 150px;
}
.content-left {
  color: #fff;
  text-align: left;
  padding-right: 150px;
}
.block h2 {
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 30px;
}

.block p {
  margin-bottom: 20px;
  font-size: 16px;
}

button {
  background-color: #fff;
  color: #000;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border: 4px solid #000;
}

button:hover {
  background-color: #e0e0e0;
}

.black {
  background-color: #000;
}
.w-bg {
  color: #fff;
  background-color: #000;
  border: 4px solid #fff;
}
@media (max-width: 768px) {
  header {
    flex-direction: column;
    text-align: center;
  }

  nav ul li {
    padding: 10px 0;
  }
  .img-left,
  .img-right {
    margin: 0;
  }

  .content,
  .content-left {
    text-align: center;
    padding-right: 20px;
    padding-left: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .content-left {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
