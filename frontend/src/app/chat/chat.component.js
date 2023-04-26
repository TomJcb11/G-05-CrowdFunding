let utilisteur = {};

let message_lier = [];
let autre = []

//affiche les utilisateurs

function fonction(){
    fetch('http://localhost:8080/api/users')
      .then(response => response.json())
    .then(data => {
      
      //
        //évite la redondance
      //

      const liste = document.getElementById('choix_utilisateurs');
      liste.addEventListener.onchange = fonction;
        data.forEach(item => {
          const option = document.createElement('option');
          option.textContent += item.nom_utilisateur + " " + item.prenom_utilisateur  ;
          option.value = item.id_utilisateurs;         
           liste.appendChild(option); 



        });
     })
     .catch(error => console.error(error));
      };
     fonction();

//affiche les messages

function message(){
  fetch('http://localhost:8080/api/chats')
  .then(response => response.json())
.then(data => {
  const message = document.getElementById('message-list');
  message.addEventListener.onchange = fonction;
    data.forEach(item => {
      const option = document.createElement('p');
      option.textContent = item.nom_utilisateur + " " + item.prenom_utilisateur + " : " + item.chat_message ;      
      message.appendChild(option);  
    });
 })
 .catch(error => console.error(error));
}
message();

