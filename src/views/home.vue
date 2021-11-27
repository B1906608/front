<template>
<div class="banner">
        <div class="grid wide">
            <div class="row">
                <div class="col col-c-12 col-12">
                    <div class="banner-content">
                        <div class="banner-img">
                            <img src="http://baochinhphu.vn/Uploaded/nguyenthikimlien/2018_05_02/b503ae41ddf217eb13c3e4757362181a_thuoc3.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <div class="main">
        <div class="grid wide">
            <div class="row">
                <div class="col col-12 col-c-12">
                    <div class="category">
                        <p class="category_name"> SẢN PHẨM HOT</p>
                    </div>
                </div>
            </div>
            <div class="row product_SPBC">
                <div v-for="(s,k) in sphot" :key='k' class="col col-3 col-c-3">
                        <a class="home-product-item">
                            <div class="home-product-item__img" :style="'background-image: url('+s.hinh+');'">
                            </div>
                            <h4 class="home-product-item__name">{{s.ten}}</h4>
                            <div>

                                <a href="#" @click.prevent="$router.push({name:'SanPham', params:{id:s.id}})" class="home-product-item-button">
                                    Xem chi tiết
                                </a>
                            </div>
                        </a>
                    </div>
            </div>
            <div class="seemore">
                <ul class="pagination">
                    <li class="pagination-item">
                        <a href="" class="pagination-item-link">
                            <i class="fa fa-angle-left"></i>
                        </a>
                    </li>
                    <li class="pagination-item pagination-item-active"><a class="pagination-item-link" href="">1</a></li>
                    <li class="pagination-item "><a href=" " class="pagination-item-link ">2</a></li>
                    <li class="pagination-item "><a href=" " class="pagination-item-link ">3</a></li>
                    <li class="pagination-item "><a href=" " class="pagination-item-link ">4</a></li>
                    <li class="pagination-item "><a href=" " class="pagination-item-link ">5</a></li>
                    <li class="pagination-item ">
                        <a href=" " class="pagination-item-link ">
                            <i class="fa fa-angle-right "></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="row ">
                <div class="col col-12 col-c-12 ">
                    <div class="category ">
                        <p class="category_name ">MỸ PHẨM</p>
                    </div>
                </div>
            </div>
            <div class="row product_MP ">
                    <div v-for="(s,k) in mypham" :key='k' class="col col-3 col-c-3">
                        <a class="home-product-item">
                            <div class="home-product-item__img" :style="'background-image: url('+s.hinh+');'">
                            </div>
                            <h4 class="home-product-item__name">{{s.ten}}</h4>
                            <div>
                                <a href="#" class="home-product-item-button">
                                    Xem chi tiết
                                </a>
                            </div>
                        </a>
                    </div>
            </div>
            <div class="seemore ">
                <ul class="pagination ">
                    <li class="pagination-item ">
                        <a href=" " class="pagination-item-link ">
                            <i class="fa fa-angle-left "></i>
                        </a>
                    </li>
                    <li class="pagination-item pagination-item-active ">
                        <a class="pagination-item-link " href=" ">1</a></li>
                    <li class=" pagination-item "><a href=" " class="pagination-item-link ">2</a></li>
                    <li class="pagination-item "><a href=" " class="pagination-item-link ">3</a></li>
                    <li class="pagination-item "><a href=" " class="pagination-item-link ">4</a></li>
                    <li class="pagination-item "><a href=" " class="pagination-item-link ">5</a></li>
                    <li class="pagination-item ">
                        <a href=" " class="pagination-item-link ">
                            <i class="fa fa-angle-right "></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="row ">
                <div class="col col-12 col-c-12 ">
                    <div class="category ">
                        <p class="category_name ">THỰC PHẨM CHỨC NĂNG</p>
                    </div>
                </div>
            </div>
            <div class="row product_TPCN ">
                    <div v-for="(s,k) in tpchucnang" :key='k' class="col col-3 col-c-3">
                        <a class="home-product-item">
                            <div class="home-product-item__img" :style="'background-image: url('+s.hinh+');'">
                            </div>
                            <h4 class="home-product-item__name">{{s.ten}}</h4>
                            <div>
                                <a href="#" class="home-product-item-button">
                                    Xem chi tiết
                                </a>
                            </div>
                        </a>
                    </div>
            </div>
            <div class="seemore ">
                <ul class="pagination ">
                    <li class="pagination-item ">
                        <a href=" " class="pagination-item-link ">
                            <i class="fa fa-angle-left "></i>
                        </a>
                    </li>
                    <li class="pagination-item pagination-item-active ">
                        <a class="pagination-item-link " href=" ">1</a></li>
                    <li class=" pagination-item "><a href=" " class="pagination-item-link ">2</a></li>
                    <li class="pagination-item "><a href=" " class="pagination-item-link ">3</a></li>
                    <li class="pagination-item "><a href=" " class="pagination-item-link ">4</a></li>
                    <li class="pagination-item "><a href=" " class="pagination-item-link ">5</a></li>
                    <li class="pagination-item ">
                        <a href=" " class="pagination-item-link ">
                            <i class="fa fa-angle-right "></i>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            sphot: [],
            mypham: [],
            tpchucnang:[]
        }
    },
    props:['sanphams'],
    methods:{
        tachSanPham(){
            this.sphot = this.sanphams.slice(0,4)
            this.mypham = this.sanphams.slice(4,8)
            this.tpchucnang = this.sanphams.slice(8,12)
        }
    },
    mounted(){
        this.tachSanPham()
        console.log(this.sphot)
        console.log(this.mypham)
        console.log(this.tpchucnang)
    }
}
</script>

<style>

</style>