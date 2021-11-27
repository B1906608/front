import http from "../common/http";

class CuaHangService {
    getAll() { return http.get("/cuahang"); }
}

export default new CuaHangService();