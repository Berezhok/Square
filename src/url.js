let allUrl = [];
let allTitle = [];
const mass = fetch("https://jsonplaceholder.typicode.com/photos")
.then((response) => response.json())
.then((result)=>{
    const rowData = result.map( el =>{
            allUrl.push(el.url)
            allTitle.push(el.title)
       })
    })
   
export default allUrl;
  