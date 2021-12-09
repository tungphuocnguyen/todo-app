import firebase from '../configs/firebase'


export const DB = () => {
  return firebase.firestore();
}
export const Addtodo =(todoItem) => {
    firebase.firestore().collection('todos').add(todoItem)
};
export const Deletetodo = (Id) =>{
  firebase.firestore().collection('todos').doc(Id).delete()
}
export const Updatetodo = (todo) => {
  firebase.firestore().collection('todos').doc(todo.id).update(todo)
}
  
