let searchImages = async (value) => {
	try {
	  let res =
	    await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=wbpnJnLlrwV6oNE14ZWpSeR-WAfFsKTFWmef8Nt5ZJI
		    `);
	  let data = await res.json();
	  console.log(data.results);
	 append(data.results)
	} catch (err) {
	  console.log(err);
	}
   
   function append(data){
	   document.querySelector("#map").innerHTML=null;
	   data.map(function(e){
   
		   let div= document.createElement("div")
		   div.setAttribute("id","box")
		   let img= document.createElement("img")
		   img.setAttribute("id","image")
		   img.src=e.urls.small
		   let h3= document.createElement("h3")
		   h3.innerText=e.alt_description
   
		   div.append(img,h3)
		   document.querySelector("#map").append(div)
	   })
   }
   };
   export default searchImages
   