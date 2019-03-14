"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SearchService_1 = require("../../service/SearchService");
var searchService = new SearchService_1.SearchService();
Page({
    data: {},
    onLoad: function () {
        searchService.searchRepository().then(function (res) { return console.log(res); });
    },
    onSearchConfirm: function (e) {
        console.log(e);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQUE0RDtBQUU1RCxJQUFNLGFBQWEsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQTtBQUV6QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUUsRUFDTDtJQUVELE1BQU07UUFDSixhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUE7SUFDdkUsQ0FBQztJQUVELGVBQWUsWUFBQyxDQUFNO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDaEIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9TZWFyY2hTZXJ2aWNlXCI7XG5cbmNvbnN0IHNlYXJjaFNlcnZpY2UgPSBuZXcgU2VhcmNoU2VydmljZSgpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gIH0sXG5cbiAgb25Mb2FkKCkge1xuICAgIHNlYXJjaFNlcnZpY2Uuc2VhcmNoUmVwb3NpdG9yeSgpLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICB9LFxuXG4gIG9uU2VhcmNoQ29uZmlybShlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICB9XG59KVxuIl19