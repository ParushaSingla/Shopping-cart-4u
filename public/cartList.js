$(() => {
  let userId=window.localStorage.getItem('userId')
      $.get(`/addToCart/${userId}`, (data) => {
      let sum=0;
        for(let item of data)
        {
          createTableRows(item)
          sum+=item.quantity*item.Producttodo.price
        } 
        console.log(sum)
        $('#itemsAddedToCart').append(
          `
          <tr><td><b><font color="red">Sum Of Total Item In Cart</font><b></td><td>${sum}</td></tr>
          `
        )
        function createTableRows(item) {
          $('#itemsAddedToCart').append(
          `<tr>
          <td>${item.Producttodo.name}</td>
         <td>${item.Producttodo.todo.name}</td>
          <td>${item.quantity}</td>
          <td>${item.Producttodo.price}</td>
          <td>${item.quantity*item.Producttodo.price}</td>
          </tr>`
          )
          } 
      })
    }
      

 

      
      )


 
