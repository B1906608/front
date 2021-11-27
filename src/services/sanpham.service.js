import http from "../common/http";

class SanPhamService {
    getAll() { return http.get("/sanpham"); }
    get(id) { return http.get(`/sanpham/${id}`); }
}

export default new SanPhamService();