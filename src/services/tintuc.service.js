import http from "../common/http";

class TinTucService {
    getAll() { return http.get("/tintuc"); }
}

export default new TinTucService();