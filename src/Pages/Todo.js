import { useState } from "react"

const Todo = () => {
    const [todos, settodos] = useState([])
    const [inputValue, setInputValue] = useState('')

    const addTodo = () => {
        settodos([...todos, {todoTitle: inputValue, createdAt: Date.now()}])
    }

    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={addTodo}>Add Todo</button>

            <ul>
                {
                    todos.map((todoItem) => {
                        return <li>
                            <input type="checkbox" />
                            {todoItem.todoTitle} - {todoItem.createdAt}
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default Todo