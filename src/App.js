import React from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./components/Todo";

class App extends React.Component{

state = {
  todos: []
};

add = (todo) => {
  this.setState((prevState) => {
    return [...prevState.todos, todo]
  });
  this.state.todos.push(todo);
}

delete = (id) => {
 this.setState(prevState => {
   return prevState.todos.filter((todo, index) => {
      return index !== id;
    });
 });
}

 render (){
   return (
    <div>
    <Header />
    <Input onAdd={ this.add}/>
    {this.state.todos.map((todo, index) => {
    return ( 
      <Todo key={index} name={todo} id={index} onDelete={this.delete}/>); 
    })
    }
  </div>
   );
 }

}
export default App;
