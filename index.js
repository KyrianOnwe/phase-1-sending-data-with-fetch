// Add your code here
function submitData(name, email){
    const formData = {
        "name" : `${name}`,
        "email" : `${email}`,
      };

      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      };
      return fetch("http://localhost:3000/users", configurationObject)
        .then(function(response){
            return response.json();
        })
        .then(function(object){
            console.log(object.id);
            let card = document.createElement('li')
            card.className = 'card'
            card.innerHTML = `div class="content"><h4>${object.id}</h4></div>`

            document.querySelector("body").appendChild(card)
        
        })
        .catch(function (error) {
            let card = document.createElement('li')
            card.className = 'card'
            card.innerHTML = `div class="content"><h4>${error.message}</h4></div>`

            document.querySelector("body").appendChild(card)
        }
      
        

        )

        }
