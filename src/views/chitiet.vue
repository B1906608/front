<template>
  <main v-if="sanpham!=''">
        <div class="body">
            <div class="imgs">
                <img :src="sanpham.hinh">
            </div>
            <div class="chitiet">
                <h1>{{sanpham.ten}}</h1>
                <h3>Nhà cung cấp: {{sanpham.nhacungcap}}</h3>
                <!-- <h3>Trạng thái: Có sẵn</h3> -->
                <h2>{{sanpham.gia}} VNĐ</h2>
                <h3>Số lượng: 01 x Hộp x 25 bộ</h3>
            </div>
        </div>


        <div class="grid wide">
            <h1>{{sanpham.ten}}</h1>
            <h3>Humasis Covid-19 Ag Test - Thiết Bị Chẩn Đoán In Vitro Xét Nghiệm Vi Rút Sars-Cov-2 là một trong 16 loại kit test nhanh Covid-19 được Bộ Y Tế cấp phép và được sử dụng rộng rãi trong cộng đồng, nhờ ưu điểm độ nhạy và tính ổn định cao.
            </h3>
            <h3>Bộ xét nghiệm nhanh kháng nguyên Humasis COVID-19 Ag là một xét nghiệm sắc ký miễn dịch định tính một bước để phát hiện SARS-CoV-2 Nucleocapsid và RBD từ gạc mũi (dịch tỵ hầu) trong 15 phút.
            </h3>
            <h1>THÔNG TIN CHI TIẾT SẢN PHẨM</h1>
            <h2>THÀNH PHẦN</h2>
            <ul>
                <h3>Thành phần {{sanpham.ten}} bao gồm:</h3>
                <li v-for="(tp,k) in sanpham.thanhphan" :key="k">{{tp}}</li>
                
            </ul>
    
            <h2>ĐỐI TƯỢNG SỬ DỤNG</h2>
            <h3>{{sanpham.doituong}}</h3>
            <h2>CÔNG DỤNG</h2>
            <h3>{{sanpham.congdung}}</h3>
            <h2>BAO QUAN</h2>
            <h3>{{sanpham.congdung}}</h3>
            <h2>HƯỚNG DẪN SỬ DỤNG</h2>
            <h2>LƯU Ý</h2>
            <li v-for="ly in sanpham.luuy" :key='ly'>{{ly}}</li>
        </div>
    </main>
</template>

<script>
import sanphamService from '../services/sanpham.service'
export default {
    data(){
        return {
            sanpham: ''
        }
    },
    methods: {
        async layMotSanPham(id){
            const [error, response] = await this.handle(
                sanphamService.get(id)
            )
            if(error){
                console.log("loi lay san pham")
            }else{
                this.sanpham = response.data[0]
                console.log(this.sanpham)
            }
        }
    },
    mounted(){
        this.layMotSanPham(this.$route.params.id)
    }
}
</script>

<style>

</style>