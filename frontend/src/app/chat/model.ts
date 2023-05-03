export interface Message {
    user_id: Number,
    nom_utilisateur: string
    projet_id: Number,
    chat_message: String,
    chat_id: Number
  }
  
  export interface User {
    nom_utilisateur: string,
    prenom_utilisateur: string,
    id_utilisateur: number
  }