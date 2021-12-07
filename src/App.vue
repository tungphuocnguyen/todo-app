
<template>
    <div class="app" >
          <todo-input @addTodo="addTodo" ></todo-input>
          <todo-list
          @setStatus="setStatus"
          >
          <todo-item
          @updateTodo="updateTodo"
          @deleteTodo="deleteTodo"
          @checkItem="checkItem" 
          v-for="item in items" 
          :key="item.id" 
          :item="item"
          :status="status"
          />
          </todo-list>
    </div>
 
</template>

<script>
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import firebase from 'firebase'

export default {
  data() {
    return{
      items : [],
      status : null,
    }
  },
  mounted(){
    this.db.collection('todos').onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if(change.type == 'added'){
          this.items.push({
            id: change.doc.id,
            ...change.doc.data(),
          });
        }else if (change.type == 'removed'){
          this.items = this.items.filter(item => item.id !== change.doc.id)
        }else if (change.type == 'modified'){
          this.items = this.items.map(item => {
            if(item.id === change.doc.id){
              return {...change.doc.data(), id: change.doc.id}
            }
            return item;
          })

        }

      })
    })
  },
  computed: {
    itemsLength() {
      return this.items.length;
    },
    getId() {
      if(this.itemsLength){
        return this.items[this.itemsLength - 1].id + 1;
      }
      return 1;

    },
    db() {
        return firebase.firestore();
    }


  },
  

  methods: {
    addTodo(todo){
      let todoItem = {
        todo,
        completed : false,
      }
      this.db.collection('todos').add(todoItem)
    },
    checkItem(Id) {
     let item = this.items.find(item => item.id === Id);
     item.completed = !item.completed;
     this.updateTodo({
       completed: item.completed,
       todo : item.todo,
      })
    },
    deleteTodo(Id) {
      this.db.collection('todos').doc(Id).delete()
    },
    updateTodo(todo){
      this.db.collection('todos').doc(todo.id).update(todo)

    },
    setStatus(val) {
      this.status = val;

    }
  },

  components: {
    TodoInput,
    TodoItem,
    TodoList,
  }
}

</script>

<style>
  .app{
    margin: 50px auto;
    width: 500px;
    padding: 20px;
    border: 1px solid #EEE;
  }
</style>
