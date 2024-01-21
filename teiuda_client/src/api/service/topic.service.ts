import ITopicData from "@/types/topic.type";
import authHeader from "./auth-header";
import axiosClient from "@/api";

class TopicService {
  getTodayTopic() {
    return axiosClient.get("/today", {
      headers: authHeader(),
    });
  }
}
export default new TopicService();
