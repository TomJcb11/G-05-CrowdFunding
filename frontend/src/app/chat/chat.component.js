// //affiche les utilisateurs

// function fonction(){
//     fetch('http://localhost:8080/api/users')
//       .then(response => response.json())
//     .then(data => {
//       const liste = document.getElementById('choix_utilisateurs');
//       liste.addEventListener.onchange = fonction;
//         data.forEach(utilisteur => {
//           const option = document.createElement('option');
//           option.textContent = utilisteur.nom_utilisateur;
//           option.value = utilisteur.id_utilisateur;  
//           console.log(item)       
//            liste.appendChild(option);
//         });
//      })
//      .catch(error => console.error(error));
//       };
//      fonction();

// //affiche les messages

// function message(){
//   fetch('http://localhost:8080/api/chats')
//   .then(response => response.json())
// .then(data => {
//   const message = document.getElementById('message-list');
//   message.addEventListener.onchange = fonction;
//     data.forEach(item => {
//       const option = document.createElement('p');
//       option.textContent =  item.chat_id ;      
//       message.appendChild(option);  
//     });
//  })
//  .catch(error => console.error(error));
// }
// message();

