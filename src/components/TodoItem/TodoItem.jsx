import {TodoItemWrapper} from "./TodoStyles";

function TodoItem(props) {
    return (
        <div>
            <TodoItemWrapper>
                <div>{props.task}</div>
                <div className="btnWrapper">
                    <button>edit</button>
                    <button>save</button>
                    <button>delete</button>
                </div>
            </TodoItemWrapper>
        </div>
    );
}

export default TodoItem;
