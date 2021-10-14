import React from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
function App() {
    const [todoItems, setTodoItems] = React.useState([
        { todo: "Mow the lawn", complete: false },
        { todo: "Do Laundry", complete: false },
        { todo: "Make Dinner", complete: false },
    ]);

  // https://medium.com/@hayden.anderl33/build-a-full-crud-to-do-list-using-react-hooks-7a61ed09fcab
    const createTodoItem = (todo) => {
        const newTodoItems = [...todoItems, { todo, complete: false }];
        setTodoItems(newTodoItems);
    };
    const deleteTodoItem = (index) => {
        const newTodoItems = [...todoItems];
        newTodoItems.splice(index, 1);
        setTodoItems(newTodoItems);
    };
    const completeTodoItem = (index) => {
        const newTodoItems = [...todoItems];
        newTodoItems[index].complete === false
            ? (newTodoItems[index].complete = true)
            : (newTodoItems[index].complete = false);
        setTodoItems(newTodoItems);
    };

    return (
        <div className="app">
            <TodoInput createTodoItem={createTodoItem} />
            {todoItems.map((item, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    item={item}
                    deleteTodoItem={deleteTodoItem}
                    completeTodoItem={completeTodoItem}
                />
            ))}
        </div>
    );
}
export default App;
