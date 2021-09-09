import TodoItem from "../TodoItem/TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchTodos} from "../../store/action";

function Main() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    const todos = useSelector((state) => state.todo.todos)

    return (
        <div>
            <section>
                {
                    todos.map((item) => <TodoItem key={item.id} task={item.task}/>)
                }
            </section>
        </div>
    );
}

export default Main;