$(() => {
    $('#viewCart').click(() => {
        window.location.href = "../CartPage.html";
    })
    $('#login').click(() => {
        $("#productList").empty()
        let name = $('#username').val()
        $.get(`/user/${name}`, (data) => {
            if (jQuery.isEmptyObject(data))
                alert("not valid")
            else {
                window.localStorage.setItem('userId', data[0].id)
                createList(data)
                let viewCartBtn = document.createElement("input");
                let body = document.querySelector("#productList")
                viewCartBtn.setAttribute("type", "button");
                viewCartBtn.setAttribute("value", "Show Cart");
                viewCartBtn.setAttribute("class", "btn btn-primary");
                viewCartBtn.addEventListener("click", () => {
                    window.location = "http://localhost:8089//CartPage.html";
                })
                body.appendChild(viewCartBtn);
                console.log(data)
            }
        })
    })
    function createList(user) {

        $.get('../addProduct', (data) => {

            for (let product of data) {
                button = document.createElement('input')
                button.setAttribute('type', 'button')
                button.setAttribute('id', product.id)
                button.setAttribute('value', 'AddToCart')
                button.setAttribute('class', "btn btn-primary")
                var newDiv = document.createElement("div");
                br1 = document.createElement("br")
                br2 = document.createElement("br")
                br3 = document.createElement("br")
                br4 = document.createElement("br")
                newDiv.setAttribute("class", "col-4 card mx-2 p-4 ")


                newDiv.append(`Product Name::   ` + product.name)
                newDiv.append(br1)
                newDiv.append(`Product Quantity::   ` + product.quantity)
                newDiv.append(br2)
                newDiv.append(`Vendor name::   ` + product.todo.name)
                newDiv.append(br3)
                newDiv.append(`Product Price::   ` + product.price)
                newDiv.append(br4)
                newDiv.append(button)
                $("#productList").append(newDiv)


                $('#' + product.id).click(() => {
                    $.post(`/addToCart/${product.id}_${user[0].id}`)
                    alert("Added To Your Cart SuccessFully")
                })
            }
        })

    }




})