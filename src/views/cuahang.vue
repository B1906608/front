<template>
  <main>
            <div class="grid wide">
                <h1>Danh sách cửa hàng</h1>
                <ul>
                    <li v-for="nhathuoc in nhathuocs" :key='nhathuoc.id'>
                        <h2>{{nhathuoc.ten}}</h2>
                    </li>
                    
                </ul>
            </div>
        </main>
</template>

<script>
import cuahangService from '../services/cuahang.service'
export default {
    data(){
        return {
            nhathuocs: null
        }
    },
    methods:{
        async layTatCaCuaHang(){
            const [error, response] = await this.handle(
                cuahangService.getAll()
            )
            if(error){
                console.log("loi lay cua hang")
            }else{
                this.nhathuocs = response.data
            }
        }
    },
    mounted(){
        this.layTatCaCuaHang()
    }
}
</script>

<style>

</style>