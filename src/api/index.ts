import request from "./request";
import apiList from "./apiList";
import qs from "qs";

function getApiObj(url, data = {}) {
  let apiArray = url.split(".");
  let api = apiList;
  apiArray.forEach((v) => {
    api = api[v];
  });
  return api;
}

const URL_PREFIX = "/fingernft";
export default function api(url, data = {}) {
  var api: any = getApiObj(url);

  var post: any = {
    url: URL_PREFIX + api.url,
    method: api.method,
  };
  if (url == "storage.upload" || url === "storage.multiupload") {
    post.headers = { "Content-Type": "multipart/form-data" };
    post.data = data;
  } else if (url == "log.info") {
    post.url = api.url;
    post.data = data;
  } else {
    var method = api.method.toLowerCase();
    if (method == "post") {
      post.data = qs.stringify(data);
    } else {
      post.post = data;
    }
  }
  if (url == "oauth.authorize") {
    post.url = api.url;
  }
  return request(post);
}
