import axiosClient from "@/api";

class AuthService {
  //로컬스토리지에 유저 추가
  login(id: string, password: string) {
    return axiosClient
      .post("/login", {
        id,
        password,
      })
      .then((response) => {
        //response 응답에 accessToken이 존재하면
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  //로컬스토리지에서 유저삭제
  logout() {
    localStorage.removeItem("user");
  }
  //API 서버에 signup POST
  register(id: string, name: string, email: string, password: string) {
    return axiosClient.post("/signup", {
      id,
      name,
      email,
      password,
    });
  }
  //로컬스토리지에 저장된 유저 확인해서 객체로 불러옴
  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    return null;
  }
}
export default new AuthService();
