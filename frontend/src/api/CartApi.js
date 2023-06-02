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
}export async function CartInsert(){
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
    var data = await fetch("api/cart/insert", requestOptions)
        .then(response => response.text())
        .then(result =>  JSON.parse(result))
        .catch(error => error);
    return data;
}