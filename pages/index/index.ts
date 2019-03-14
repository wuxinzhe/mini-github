import { SearchService } from "../../service/SearchService";

const searchService = new SearchService()

Page({
  data: {
  },

  onLoad() {
    searchService.searchRepository().then((res: any) => console.log(res))
  },

  onSearchConfirm(e: any) {
    console.log(e)
  }
})
