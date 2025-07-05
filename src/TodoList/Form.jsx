import { useState } from "react";
import { InputText } from "./InputText.jsx";

export const Form = () => {
  const [tasks, setTasks] = useState([]);

  function addTask(taskName) {
    setTasks((prevTasks) => [...prevTasks, taskName]);
  }

  console.log(tasks);

  return (
    <div className="sub-container container_form" id="form">
      <h1 className="tittle-Text">TodoList - React</h1>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <InputText addTask={addTask} />
      </form>
      <div className="sub-container task_container" id="task_container">
        {tasks.map((task, index) => (
          <article key={index} className="task">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-circle"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            </svg>

            <p className="task_p">{task}</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-star"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg>
          </article>
        ))}
      </div>
    </div>
  );
};
