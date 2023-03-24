
function search(query){
    const url=`https://imdb-api.com/API/SearchMovie/k_41ziqzeq/string=${query}`
    fetch(url)
    .then((response) => response.json())
    .then((data) =>{
   const ok=data.results;
        renderresult(ok);
        document.getElementById("errormessage").innerHTML="";
    })
    .catch((error)=>{
        document.getElementById("errormessage").innerHTML=error;
        renderresult([]);
    })
}


function renderresult(ok){
    const list=document.getElementById("searchBar");
    ok.forEach(result =>{
     const moviet=
		`<div class="movies">
			
			<li><button><img src="${result.image}"></button> </li>
			<li><p> ${result.description}</p></li>
			<li>name ${result.title}</li>
			</div>`;
			
		document.querySelector('#movies').innerHTML+=moviet

//         var div =document.createElement('div');
//         const elements=document.createElement("li");
//         elements.innerText =result.title;
//         div.setAttribute('class','gridDiv');
//         var img=document.createElement('img');
//        img.setAttribute('src', result.image);
//        img.setAttribute('class', 'gridDivImg');
//         list.appendChild(elements);
//         list.appendChild(img);
// document.querySelector('#movieGrid').append(list)
// document.querySelector('#movieGrid').append(list)

    });
}
let serachtimeout =0;
window.onload = () =>{
    const newElements = document.getElementById("movieName");
    newElements.onkeyup=(event)=>{
if(newElements.value.length===0){
    return;
}

        clearTimeout(serachtimeout);
        serachtimeout = setTimeout(() =>{
    search(newElements.value);

},250);
        
   
};
}



	// const urlMostPolular = 'https://imdb-api.com/en/API/ComingSoon/k_u8b9g55h'; 
  
	// fetch(urlMostPolular) 
	//   .then((response) => response.json()) 
	//   .then((data) => { 
	// 	console.log(data); 
	 
	// 	for (let i = 0; i < 36; i++) { 
	// 	  let card = <div class="col-lg-2 col-md-3 col-sm-4 col-6"> 
	// 		<a href=""> 
	// 		  <div class="card cards border-0"> 
	// 			<img 
	// 			  src="${data.items[i].image}" 
	// 			  class="img-fluid rounded-3" 
	// 			  alt="" 
	// 			  width="97%" 
	// 			/> 
	// 		  </div> 
	// 		</a> 
	// 		<p class="fw-bold m-0 mt-1 ms-1" style="font-size: small"> 
	// 		  ${data.items[i].title} 
	// 		</p> 
	// 		<p class="text-muted"> 
	// 		  ${data.items[i].year}  
	// 		  <span class="badge bg-secondary float-end">${data.items[i]}</span> 
	// 		</p> 
	// 	  </div>; 
	 
	// 	  document.getElementById(movies).innerHTML += movies; 
	// 	} })

	function fetchData(){	
fetch('https://imdb-api.com/en/API/ComingSoon/k_u8b9g55h')
	.then(response =>{
if(!response.ok){
	throw Error("Error");
}
	return response.json();
	})
	.then(data=>{
		console.log(data);
		for(let i=0;i<=10;i++){
		const moviedis =
		 `<div class="movies">
			
	<li onclick="fun(this.value)">
	<button value="${data.items[i].id}"><img src="${data.items[i].image}"></button> </li>
	<li><p> ${data.items[i].description}</p></li>
	<li>name ${data.items[i].title}</li>
	</div>`;
		
		
		
		document.querySelector('#movieGrid').innerHTML+=moviedis
	}
	})
	
	}
fetchData();


function fun(id){
	fetch('https://imdb-api.com/en/API/Title/k_12345678/tt1375666')
	
	.then(response =>{
		if(!response.ok){
			throw Error("Error");
		}
			return response.json();
			})
			.then(data=>{
				console.log(data);
				const moviedis =
		 `<div class="movies">
			
			<li><button><img src="${data.items.image}"></button> </li>
			<li><p> ${data.items.description}</p></li>
			<li>name ${data.items.title}</li>
			</div>`;
			
		document.querySelector('#ab').innerHTML+=moviedis
				
})
}
// 	if(Selection){
// 		window.location.href="description.html";
// 	}
// }

	// function displayda(){
	// fetch(('https://www.omdbapi.com/?s=after&apikey=78c91bbf'))
	// .then(response =>{
	// 	response.json()
	// 	.then(result => {
	// 			 console.log(totalResult)
				
	// 			 const one = `<div class="movies">
	// 			 <li onclick="fun()"><img src="${result.Poster}"> </li>
	// 			 <li>name ${result.Type}</li>
	// 			<li>name ${result.Title}</li>
	// 			</div>`
	// 			document.querySelector('.movies').innerHTML+=one;
				
				
				
				 


// })

// })
	
// } displayda();
// `var div=document.createElement('div');
// div.setAttribute('class','gridDiv');
// var img=document.createElement('img');
// img.setAttribute('class','gridDivImg');
// img.setAttribute('src', ${result.Poster});
// var name=document.createElement('h3');
// name.setAttribute('class','divMovieName');
// name.innerText=${result.Title};
// var type=document.createElement('p');
// type.setAttribute('class','movieType');
// type.innerText='Type : '+${result.Type};
// var year=document.createElement('p');
// year.setAttribute('class','movieYear');
// year.innerText='Release Date : '+${result.Released};
// var genre=document.createElement('p');
// genre.setAttribute('class','movieGenre');
// genre.innerText='Genre : '+${result.Genre};
// var rating=document.createElement('p');
// rating.setAttribute('class','movieRating');
// rating.innerText='Imdb Rating : '+${result.imdbRating};`




				// const one =data.results
				// .map(string =>{
					// return `<div class="movies">
					// <li onclick="fun()"><img src="${string.image}"> </li>
					// <li>name ${string.description}</li>
					// <li>name ${string.title}</li>
					// </div>`;
				// })
				// .join("");
				// console.log(one);
				// document.querySelector('.movies')
				// .insertAdjacentHTML("afterbegin",one);





// function adddata(){
// fetch(('https://www.omdbapi.com/?s='+movies+'&apikey=78c91bbf'))	
// .then(response =>{
	// if(!response.ok){
		// throw Error("Error");
	// }
		// return response.json();
		// })
		// .then(data=>{
			// console.log(data.results);
			// const one =data.results
			// .map(string =>{
				// return `<div class="movies">
				// <li onclick="fun()"><img src="${string.image}"> </li>
				// <li>name ${string.description}</li>
				// <li>name ${string.title}</li>
				// </div>`;
			// })
			// .join("");
			// console.log(one);
			// document.querySelector('.movies')
			// .insertAdjacentHTML("afterbegin",one);
	// 
		// })
		// .catch(err => console.error(err));
// }
	// adddata();
	// function fetchData(){	
// fetch('https://imdb-api.com/API/SearchTitle/k_yczh1x7l/string')
	// .then(response =>{
// if(!response.ok){
	// throw Error("Error");
// }
	// return response.json();
	// })
	// .then(data=>{
		// console.log(data.results);
		// const one =data.results
		// .map(string =>{
			// return `<div class="movies">
			// <li onclick="fun()"><img src="${string.image}"> </li>
			// <li>name ${string.description}</li>
			// <li>name ${string.title}</li>
			// </div>`;
		// })
		// .join("");
		// console.log(one);
		// document.querySelector('.movies')
		// .insertAdjacentHTML("afterbegin",one);
// 
	// })
	// .catch(err => console.error(err));
// }
// fetchData();
// 
// function fun(){
	// if(Selection){
		// window.location.href="description.html";
	// }
	// 

