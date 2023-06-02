export async function getProductData(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    var data = await fetch("api/product", requestOptions)
        .then(response => response.text())
        .then(result =>  JSON.parse(result))
        .catch(error => error);
    return data;
    }
    export async function getProductDataId(id){
      // var requestOptions = {
      //     method: 'GET',
      //     redirect: 'follow'
      //   };
        
      //  fetch(`api/product?_id=${id}`, requestOptions)
      //     .then(response => response.text())
      //     .then(result =>  {
      //       console.log(JSON.parse(result))
      //     })
      //     .catch(error => error);


          var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
         var data = await fetch(`http://localhost:3000/api/product?_id=` + id, requestOptions)
           .then(response => response.text())
           .then(result => (JSON.parse(result))
           )
           .catch(error => error);
        return data;
      }
 