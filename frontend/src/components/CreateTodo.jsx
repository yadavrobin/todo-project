import { useState } from "react";

export function CreateTodo({ setTodos }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input
                id="title"
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />

            <input
                id="desc"
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
            />
            <br />

            <button
                style={{ padding: 10, margin: 10 }}
                onClick={() => {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({ title, description }),
                        headers: {
                            "Content-type": "application/json",
                        },
                    })
                        .then(async (res) => {
                            const json = await res.json();
                            alert("Todo added");

                            // Update the todos in the parent component
                            setTodos((prevTodos) => [
                                ...prevTodos,
                                { title, description, completed: false }
                            ]);
                        });
                }}
            >
                Add a todo
            </button>
        </div>
    );
}
