export default class CommunityService {
  static instance: CommunityService | null = null;
  static communityEndpoint = "http://localhost:9000/v1/my-doc/users";
  static newsEndpoint = "http://localhost:9000/v1/my-doc/news";

  static getInstance() {
    if (CommunityService.instance == null) {
      CommunityService.instance = new CommunityService();
    }

    return this.instance;
  }

  getCommunity() {
    return fetch(CommunityService.communityEndpoint);
  }

  async getNews(ids: string[]) {
    const requestString = ids.map((id) => `${id},`);
    return fetch(
      `${CommunityService.newsEndpoint}?ids=${requestString}&sort=desc`
    );
  }
}
