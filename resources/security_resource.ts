import { Drash } from "../deps.ts";

export default class SecurityResource extends Drash.Http.Resource {
  static paths = ["/security/:id?"];
  // shallow list of all securites available on the exchange
  // GET /security/ ["TSLA", "AMZN"]
  // GET /security/TSLA {"name": "TSLA", "lastSalePrice": 1}
  public GET() {
    const id = this.request.getPathParam("id");

    if (id) {
      this.response.body = this.getDetail(id);
    } else {
      this.response.body = this.getAll();
    }

    return this.response;
  }

  private getDetail(id: string) {
    return id + "!!!!";
  }

  private getAll() {
    return ["TSLA", "ETC"];
  }

  public POST() {
    this.response.body = { message: "POST method not implemented." };
    return this.response;
  }

  public DELETE() {
    this.response.body = { message: "DELETE method not implemented." };
    return this.response;
  }

  public PUT() {
    this.response.body = { message: "PUT method not implemented." };
    return this.response;
  }
}
