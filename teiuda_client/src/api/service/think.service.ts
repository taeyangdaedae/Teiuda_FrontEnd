import { IThinkBase, IThinkCreate } from "@/types/think.type";
import authHeader from "./auth-header";
import axiosClient from "@/api";
class ThinkService {
  getToday() {
    // 오늘의 생각 데이터 가져오기
    return axiosClient.get("/today", {
      headers: authHeader(),
    });
  }
  getOne() {
    // 내 특정일자 생각 데이터 가져오기
    return axiosClient.get("/", {
      params: {
        date: new Date().toISOString().slice(2, 10).replace(/-/g, "/"),
      },
      headers: authHeader(),
    });
  }
  create(data: IThinkCreate) {
    // BE에서 accessToken decode 후 해당 user의 오늘자 생각 데이터 등록
    return axiosClient.post("/register", data, {
      headers: authHeader(),
    });
  }
  updateSharedState() {
    return axiosClient.patch("/shared", {
      // BE에서 accesToken decode 후 해당 user의 오늘자 생각 데이터 shared 상태 변경 로직 수행
      headers: authHeader(),
    });
  }
}
export default new ThinkService();
