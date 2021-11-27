<template>
<div>
    <Header />
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <router-view v-if='sanphams' :sanphams="sanphams"></router-view>

  <Footer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SanPhamService from './services/sanpham.service'
import CuaHangService from './services/cuahang.service'
import TinTucService from './services/tintuc.service'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Footer,
    Header
    // HelloWorld
  },
  data(){
      return {
          sanphams: null,
      }
  },
  methods: {
      async laySanPham(){
          const [e, res] = await this.handle(
              SanPhamService.getAll()
          )
          if(e){
              console.log("loi lay san pham");
          }else{
              console.log(res.data)
              this.sanphams =  res.data
          }
      },
      async layTinTuc(){
          const [e, res] = await this.handle(
              TinTucService.getAll()
          )
          if(e){
              console.log("loi lay tin tuc");
          }else{
              console.log(res.data)
          }
      },
      async layCuaHang(){
          const [e, res] = await this.handle(
              CuaHangService.getAll()
          )
          if(e){
              console.log("loi lay cua hang");
          }else{
              console.log(res.data)
          }
      }
  },
  mounted() {
      this.laySanPham();
      this.layCuaHang();
      this.layTinTuc();
  },
}
</script>

<style>
/* Header */

a {
    text-decoration: none;
    color: black;
}

ul {
    list-style: none;
}

li {
    margin-right: 70px;
}

body {
    background-color: #F5F5F5;
}

.header {
    background-image: linear-gradient(0, white, rgb(129, 180, 129));
}

.header_main {
    height: calc(var(--header-height) - var(--navbar-height));
    display: flex;
    align-items: center;
}

.header_logo {
    width: 200px;
    align-items: center;
    margin: 0px;
    display: flex;
    color: var(--white-color);
    font-style: italic;
}

.header_logo-img {
    width: 100px;
}

.header_search {
    flex: 1;
    height: 40px;
    background-color: var(--white-color);
    border-radius: 3px;
    display: flex;
    align-items: center;
}

.header_search-input {
    height: inherit;
    width: 100%;
    border-radius: 3px;
    outline: none;
    border: none;
    font-size: 1.4rem;
    padding: 0 8px;
}

.header_search-btn {
    background-color: green;
    border-radius: 3px;
    border: none;
    height: 34px;
    width: 60px;
    margin-right: 4px;
    outline: none;
    cursor: pointer;
}

.header_search-btn-icon {
    font-size: 1.4rem;
    color: var(--black-color);
}

.header_megamenu {
    display: flex;
    align-items: center;
    padding: 5px 40px;
    border-radius: 10px;
    position: relative;
    color: black;
    background-color: rgb(73, 216, 73);
    border-radius: 5px;
    margin: 10px 0;
    padding: 5px 40px;
    width: 100%;
}

.header_megamenu_name {
    color: black;
    font-size: 20px;
    font-weight: bold;
    width: 100%;
}

.header_megamenu_name ul {
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: center;
}


/* Banner */

.banner {
    height: var(--banner-height);
    background-color: var(--white-color);
}

.banner-content {
    display: flex;
}

.banner-img {
    flex: 1;
    width: 990px;
    height: var(--banner-height);
}

.banner-img>img {
    width: 100%;
    height: 100%;
}


/* Main */

.category {
    display: flex;
    align-items: center;
    padding: 5px 40px;
    border-radius: 10px;
    position: relative;
    color: black;
    background-color: rgb(73, 216, 73);
    border-radius: 5px;
    margin: 10px 0;
    padding: 5px 40px;
}

.category_name {
    color: black;
    font-size: 1.6rem;
    font-weight: bold;
}

.seemore {
    margin-top: 15px;
    font-size: 1.5rem;
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    list-style: none;
}

.pagination-item-active {
    color: #008848;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #008848;
}

.pagination-item {
    border-radius: 3px;
    padding: 5px 0px;
}

.pagination-item-link {
    color: #008848;
    min-height: 40px;
    list-style: none;
    text-decoration: none;
    margin: 0 10px;
    border-radius: 4px;
    padding: 0px 10px;
}

.home-product-item {
    display: block;
    text-decoration: none;
    background-color: var(--white-color);
    margin-top: 10px;
    border-radius: 5px;
    position: relative;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .1);
    transition: transform linear 0.1s;
    will-change: transform;
    cursor: pointer;
}

.home-product-item__img {
    padding-top: 100%;
    border-radius: 5px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

.home-product-item__name {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--text-color);
    line-height: 1.8rem;
    height: 3.6rem;
    margin: 10px 10px 0px;
    overflow: hidden;
    display: -webkit-box;
    display: block;
    --webkit-box-orient: vertical;
    --webkit-line-clamp: 2;
}

.home-product-item-button {
    margin-top: 5px;
    text-decoration: none;
    display: block;
    overflow: hidden;
    font-size: 1.4rem;
    color: #008848;
    text-align: center;
    text-transform: uppercase;
    padding: 10px 0;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #008848;
}


/*Fotter*/

.footer {
    margin-top: 20px;
    border-top: 2px solid var(--main-color);
    color: #333333;
}

.footer-heading {
    font-size: 1.6rem;
    font-weight: 500;
    color: black;
}

.footer-list {
    list-style: none;
    padding-left: 0px;
}

.footer-item {
    margin: 10px 0px;
}

.footer-link {
    text-decoration: none;
    color: #333333;
    font-size: 1.4rem;
}

.fotter-download {
    display: flex;
}

.fotter-download-app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.footer-download-qr {
    height: 60px;
}

.footer-download-img {
    height: 25px;
    padding-left: 5px;
    width: 70%;
}

.booton-foter {
    background-color: #f5f5f5;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    padding: 10px 0px;
}


/*Base*/

:root {
    --main-color: #312a6c;
    --main1-color: #852d91;
    --white-color: #fff;
    --black-color: #000;
    --text-color: #333;
    --header-height: 120px;
    --navbar-height: 34px;
    --banner-height: 340px;
}

* {
    box-sizing: inherit;
}

html {
    font-size: 62.5%;
    list-style: 1.6rem;
    font-family: sans-serif;
    box-sizing: border-box;
}


/*Layout*/

.grid {
    width: 100%;
    display: block;
    padding: 0;
}

.grid.wide {
    max-width: 1200px;
    margin: 0 auto;
}

[class *="col-"] {
    max-width: 100%;
}

@media only screen and (min-width: 800px) {
    .row {
        display: flex;
        flex-wrap: wrap;
        margin-left: -12px;
        margin-right: -12px;
    }
    .col {
        padding-left: 12px;
        padding-right: 12px;
    }
    .col-c-1 {
        flex: 0 0 8.33%;
        max-width: 8.33%
    }
    .col-c-2 {
        flex: 0 0 16.66%;
        max-width: 16.66%
    }
    .col-c-3 {
        flex: 0 0 25%;
        max-width: 25%
    }
    .col-c-4 {
        flex: 0 0 33.33%;
        max-width: 33.33%
    }
    .col-c-5 {
        flex: 0 0 61.66%;
        max-width: 41.66%
    }
    .col-c-6 {
        flex: 0 0 50%;
        max-width: 50%
    }
    .col-c-7 {
        flex: 0 0 58.33%;
        max-width: 58.33%
    }
    .col-c-8 {
        flex: 0 0 66.66%;
        max-width: 66.66%
    }
    .col-c-9 {
        flex: 0 0 75%;
        max-width: 75%
    }
    .col-c-10 {
        flex: 0 0 83.33%;
        max-width: 83.33%
    }
    .col-c-11 {
        flex: 0 0 92.66%;
        max-width: 92.66%
    }
    .col-c-12 {
        flex: 0 0 100%;
        max-width: 100%
    }
}

@media only screen and (min-width: 600px) {
    .row {
        margin-left: 0px;
        margin-right: 0px;
        display: flex;
    }
    .col {
        padding-left: 6px;
        padding-right: 6px;
    }
    .col-1 {
        flex: 0 0 8.33%;
        max-width: 8.33%
    }
    .col-2 {
        flex: 0 0 16.66%;
        max-width: 16.66%
    }
    .col-3 {
        flex: 0 0 25%;
        max-width: 25%
    }
    .col-4 {
        flex: 0 0 33.33%;
        max-width: 33.33%
    }
    .col-5 {
        flex: 0 0 61.66%;
        max-width: 41.66%
    }
    .col-6 {
        flex: 0 0 50%;
        max-width: 50%
    }
    .col-7 {
        flex: 0 0 58.33%;
        max-width: 58.33%
    }
    .col-8 {
        flex: 0 0 66.66%;
        max-width: 66.66%
    }
    .col-9 {
        flex: 0 0 75%;
        max-width: 75%
    }
    .col-10 {
        flex: 0 0 83.33%;
        max-width: 83.33%
    }
    .col-11 {
        flex: 0 0 92.66%;
        max-width: 92.66%
    }
    .col-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }
}


/*Chi tiết*/

.body {
    display: flex;
    margin: 0 auto;
    width: 80%;
}

.body .imgs {
    width: 30%;
    height: 20%;
}

.body .imgs img {
    width: 100%;
}

.body .chitiet {
    width: 40%;
    margin-top: 75px;
    margin-left: 25px;
}


/*Tin tức*/

.body_new {
    display: flex;
    margin: 0 auto;
    width: 80%;
}

.body_new .img_new {
    width: 50%;
    height: 30%;
}

.body_new .img_new img {
    width: 50%;
}

.body_new .tintuc {
    width: 50%;
    margin-top: 15px;
    margin-left: 25px;
}
</style>
