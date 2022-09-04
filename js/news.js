// console.log('news')

const loadNews = async()=>{
const url = `https://openapi.programming-hero.com/api/news/categories`


const res = await fetch(url) 
const data = await res.json()
  return data.data.news_category
}

 const setAllNews = async()=>{
    const data = await loadNews()
const menu = document.getElementById("news-menu")
//   console.log(data)
const uniqueArray = []
for(const news of data ){
    //  console.log(uniqueArray.indexOf(news.category_name))
if (uniqueArray.indexOf( news.category_name) === -1){
uniqueArray.push(news.category_name)
const li = document.createElement('li')
li.innerHTML =`
<a class="ms-5" onclick = "allCategories('${news.category_id}')">${news.category_name}</a>

`
menu.appendChild(li)
}

}

     }


   setAllNews() 


const allCategories = async(category_id)=>{
const url =`https://openapi.programming-hero.com/api/news/category/${category_id}`
const res = await fetch(url)
const data = await res.json()
displayCategories(data.data)

}

//  allCategories()
 

const displayCategories = categories=>{

const categoriesContainer = document.getElementById("category-field")
categoriesContainer.innerHTML = ``
categories.forEach(category => {
    const categoriesDiv = document.createElement("div")
categoriesDiv.classList.add('col')
categoriesDiv.innerHTML =`
<div class="card mb-3 container" style="max-width:full;">
        
         <div class="row g-0">
          <div class="col-md-4">
            <img src="${category.image_url}" class="img-fluid rounded-start h-" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${category.title}</h5>
              <p class="card-text">${category.details.slice(0,250)} </p>
              <img src="${category.author.img}" class="rounded-circle img-fluid w-25 h-25">
              <p>${category.author.name}</p>
              <p>${category.author.published_date}</p>
            </div>
          </div>
        </div> 
      </div>

`
categoriesContainer.appendChild(categoriesDiv)
    
});


}







