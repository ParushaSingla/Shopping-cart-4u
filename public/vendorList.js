$(() => {
  function refreshList() {
    console.log('refreshing list')
    $.get('/todos', (data) => {
      $('#tasklist').empty()
      console.log('dataaaaaa ' + data)
      for (let todo of data) {
        button = document.createElement('input')
        button.setAttribute('type', 'button')
        button.setAttribute('id', todo.name)
        button.setAttribute('value', 'X')
        button.setAttribute("style", "background-color: red;")
        li = document.createElement('li')
        li.setAttribute('class', "list-group-item")
        li.append(todo.name)
        li.append(" ")
        li.append(button)

        $('#tasklist').append(
          // `<li> ${todo.name} <button id="deletetask"> delete </button></li>`
          li
        )
        $('#' + todo.name).click(() => {
          console.log(todo.id)
          //$.removeData('/todos')
          $.post('/todos/' + todo.id)
          refreshList()
        })
      }
    })
  }

  refreshList()
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
  $('#addtask').click(() => {
    $.post(
      '/todos',
      {
        name: $('#taskname').val()
      },
      (data) => {
        if (data.success) {
          refreshList()
        } else {
          alert('Some error occurred')
        }
      }
    )
  })

})