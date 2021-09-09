import {Button, Input} from "../../Styles";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, setInput} from "../../store/action";

function Header(props) {
    const input = useSelector((state) => state.todo.input)

    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(setInput(e.target.value))
    }
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
        <div>
            <form onSubmit={submit}>
                <Input value={input} onChange={handleChange} type={"text"} placeholder="todo"/>
                <Button type="submit" >Save </Button>
            </form>
        </div>
    );
}

export default Header;