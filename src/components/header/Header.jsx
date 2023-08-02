import "./Header.css"
import { useState, useEffect } from "react"

function Header() {
    const [var1, setVar1] = useState("")
    const [openMobileMenu, setOpenMobileMenu] = useState("false")

    const [todos, setTodos] = useState(() => {
        if (localStorage.getItem("todos") == null) {
          return []
        } else {
          return JSON.parse(localStorage.getItem("todos"))
        }
    })

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
      }, [todos])


    function hamburgerHandler() {
        setOpenMobileMenu(!openMobileMenu)
    }

    function buttonHandle() {
        setTodos(currentTodos => {
          return [
            ...currentTodos,
              var1
          ]
        })

        setVar1("")
    }

    return (
        <>
            <div className="header">
                <div 
                className="hamburger"
                onClick={hamburgerHandler}
                >
                    {openMobileMenu ? "X" : "☰"}
                </div>
                {openMobileMenu && (
                    <nav className="nav-list">
                    <ul className="list">
                        <a href="#"><li>Live</li></a>
                        <a href="#"><li>Plans</li></a>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Log in</li></a>
                        <a href="#"><li>Sign up</li></a>
                   </ul>
                   </nav>
                )}
            </div>
            <div className="todoList">
                <input
                    value={var1}
                    onChange={e => setVar1(e.target.value)}
                    type="text"
                    id="item"
                    />
                <button
                    className="add-todo-button"
                    onClick={buttonHandle}
                    >add todo</button>
                <div className="todo">
                    {todos.map(todo => {
                    return (
                    <p
                    className="todo-element"
                    key={crypto.randomUUID()}>{ todo }</p>
                    )
                })}
                </div>
            </div>
        </>
    )
}

export default Header