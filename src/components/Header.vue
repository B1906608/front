<template>
  <header class="header">
        <div class="grid wide">
            <div class="row">
                <div class="col col-c-12 col-12">
                    <div class="header_main">
                        <div class="header_logo">
                            <a href="/" style="display: flex;">
                                <img class="header_logo-img" src="logo.png" alt="">

                                <h2 style="color: black;">PHARMACY ONLINE</h2>
                            </a>

                        </div>
                        <div class="header_search">
                            <input class="header_search-input" type="text" placeholder="Tìm kiếm sản phẩm">
                            <button type="button" class="header_search-btn">
                                    <i class="fa fa-search header_search-btn-icon"></i>
                                </button>
                        </div>
                    </div>
                    <div class="header_megamenu">
                        <div class="header_megamenu_name">
                            <ul>
                                <router-link to='/tintuc'>
                                <li><a href="#">TIN TỨC</a></li>
                                </router-link>
                                <router-link to='/cuahang'>
                                <li><a href="#">DANH SÁCH CỬA HÀNG</a></li>
                                </router-link>
                                <li>TƯ VẤN SỨC KHỎE</li>
                                <li>CHỦ ĐỀ SỨC KHỎE</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>