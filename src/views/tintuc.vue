<template>
  <main>
            <div class="grid wide">
                <h1>BẢNG TIN</h1>
                <div v-for="(t,k) in tintucs" :key="k" class="body_new">
                    <div class="img_new">
                        <img :src="t.hinh">
                    </div>
                    <div class="tintuc">
                        <h1>{{t.tieude}}</h1>
                        <p>{{t.ngay}}</p>
                        <p>t.noidung</p>
                        <a href="tintuc.html">
                            <h3>Xem thêm
                                <i class="fa fa-arrow-right"></i>
                            </h3>
                        </a>
                    </div>
                </div>
            </div>
        </main>
</template>

<script>
import tintucService from '../services/tintuc.service'
export default {
    data(){
        return {
            tintucs:null
        }
    },
    methods: {
        async layAllTinTuc(){
            const [error, response] = await this.handle(
                tintucService.getAll()
            )
            if(error){
                console.log("loi lay tin tuc")
            }else{
                this.tintucs = response.data
                console.log(this.tintucs)
            }
        }
    },
    mounted(){
        this.layAllTinTuc()
    }
}
</script>

<style>

</style>