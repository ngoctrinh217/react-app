
export async function getCart(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    var data = await fetch("api/cart", requestOptions)
        .then(response => response.text())
        .then(result =>  JSON.parse(result))
        .catch(error => error);
    return data;
}