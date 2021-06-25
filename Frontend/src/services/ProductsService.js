import GenericService from "./GenericService";
class gameService extends GenericService {
  constructor() {
    super();
  }
  addgame = (data) => this.post("game", data);
  deletegame = (_id) => this.delete("game/" + _id);
  updategame = (_id, data) => this.put("game/" + _id, data);
  getgame = (page = 1, perPage = 10) =>
    this.get("game?page=" + page + "&perPage=" + perPage);
  getSinglegame = (id) => this.get("game/" + id);
}

let gameService = new gameService();
export default gameService;
