//https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=wbpnJnLlrwV6oNE14ZWpSeR-WAfFsKTFWmef8Nt5ZJI

import navbar from "../component/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

import "../styles/navbar.css"

let search = (e) => {
  if (e.key === "Enter") {
    let value = document.querySelector("#query").value;
    searchImages(value);
  }
};
document.getElementById("query").addEventListener("keydown", search);
//----------------------------------------------------------
import searchImages from "./fetch.js";

//--------------------------------------------------------------------
let categories = document.querySelector("#categories").children;

for (let el of categories) {
  el.addEventListener("click", cSearch);
}
function cSearch() {
  console.log(this.id);
  searchImages(this.id);
}
//---------------------------------------------------------------
let order_by = document.querySelector("#order_by").children;
for (let el of order_by) {
  el.addEventListener("click", cSearch);
}
//--------------------------------------------------------------------
let orientation = document.querySelector("#orientation").children;
for (let el of orientation) {
  el.addEventListener("click", cSearch);
}
