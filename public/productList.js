$(() => {
  $('#vendorButton').click(() => {
     window.location = window.location.href ;
    // window.location = "http://localhost:8089";
})
$('#productButton').click(() => {
   window.location = window.location.href + "/product.html";
  // window.location = "http://localhost:8089/product.html";
})
$('#userLogin').click(() => {
    window.location = window.location.href + "/user.html";
    // window.location = "http://localhost:8089/user.html";
})
  function refreshTable() {
    $.get('../addProduct', (data) => {
      $('#productTable').empty()
       if(data===null||data===undefined)
       {}
       else{
        $('#productTable').append( `<tr class="thead-dark">
         <th scope="col" class="thead-dark">Name</th>
         <th scope="col" class="thead-dark">price</th>
         <th scope="col"  class="thead-dark">Quantity</th>
         <th scope="col" class="thead-dark">vendorName</th>
         <th scope="col" class="thead-dark">Delete</th>
       </tr>`)
       }
      for (let product of data) {
        let x = document.createElement("tr");
        let n = document.createElement("td");
        n.setAttribute('scope',"row")
        n.textContent = product.name
        let p = document.createElement("td");
        p.setAttribute('scope',"row")
        p.textContent = product.price
        let q = document.createElement("td");
        q.setAttribute('scope',"row")
        q.textContent = product.quantity
        let vend = document.createElement("td");
        vend.setAttribute('scope',"row")
        vend.textContent = product.todo.name
        let del = document.createElement("td");
        del.setAttribute('scope',"row")
        button = document.createElement('input')
        button.setAttribute('type', 'button')
        button.setAttribute('value', 'X')
        button.setAttribute('id', product.id)
        button.setAttribute("style", "background-color: red;")
        del.append(button)
        x.append(n)
        x.append(p)
        x.append(q)
        x.append(vend)
        x.append(del)
        $('#productTable').append(x)
        $('#' + product.id).click(() => {
          console.log(product.id)
          // //$.removeData('/todos')
          $.post(`/addProduct/${product.id}`, (data) => {
          })
          refreshTable()
        })
      }
    })
  }
  refreshTable()
  $.get('/todos', (data) => {
    const list = document.querySelector("#vendorList")
    for (let vendor of data) {
      let option = document.createElement('option')
      option.setAttribute('value', vendor.id)
      option.textContent = vendor.name
      list.appendChild(option)
    }
  })
  $('#addproduct').click(() => {
    $.post(
      '../addProduct',
      {
        name: $('#productname').val(),
        quantity: $('#quantity').val(),
        price: $('#price').val(),
        todoId: $('#vendorList').val()
      },
      (data) => {
        if (data.success) {
          refreshTable()
        } else {
          alert('Some error occurred')
        }
      }
    )
  })

})
