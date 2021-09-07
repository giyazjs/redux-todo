import './App.css'
import TodoItem from "./components/TodoItem/TodoItem";
import {Button, Input} from "./Styles";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, setInput, setTodos} from "./store/action";
import {useEffect} from "react";


function App() {
    const input = useSelector((state) => state.todo.input)
    const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()
    console.log(todos)
    const handleChange = (e) => {
        dispatch(setInput(e.target.value))
    }

    useEffect(() => {
        fetch("https://60f11cb438ecdf0017b0fa27.mockapi.io/task")
            .then((res) => res.json())
            .then((data) => {
                dispatch(setTodos((data)))
            })
    }, [])

    const submit = (e) => {
        e.preventDefault();
        fetch("https://60f11cb438ecdf0017b0fa27.mockapi.io/task", {
            method: "POST",
            body: {
                status: false,
                task: input
            }
        })
            .then((res) => res.json())
            .then((data) => {
                dispatch(setInput(""))
                dispatch(addTodo(data))
            })
    }

    return (
        <div className="App">
            <form onSubmit={submit}>
                <Input value={input} onChange={handleChange} type={"text"} placeholder="todo"/>
                <Button type="submit" >Save </Button>
            </form>
            <section>
                {
                    todos.map((item) => <TodoItem key={item.id} task={item.task}/>)
                }
            </section>
        </div>
    );
}

export default App;
