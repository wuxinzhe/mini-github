import { SearchRepository } from "../decorator/search";

export class SearchService {

    @SearchRepository
    public searchRepository(): any {
        return { q: 'vue+in:name+Javascript+in:language', sort: 'stars', order: 'desc' }
    }
}