import "./styles.css";

const onClickAdd = () => {
  const addInput = document.getElementById("add-input");
  const inputTodo = addInput.value;
  addInput.value = "";

  if (inputTodo === "") {
    alert("入力してよお🤫");
    return;
  }

  createImcompleteTask(inputTodo);
};

const addBtn = document.getElementById("add-button");
addBtn.addEventListener("click", (event) => {
  onClickAdd();
});

const deleteElement = (targetBtn) => {
  targetBtn.parentNode.parentNode.removeChild(targetBtn.parentNode);
};

const createImcompleteTask = (text) => {
  const list = document.getElementById("imcomplete-list");
  const div = document.createElement("div");
  div.classList.add("list-row");

  const li = document.createElement("li");
  li.innerText = text;
  li.classList.add("li-todo");

  list.appendChild(div);
  div.appendChild(li);

  const completeBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  completeBtn.innerText = "完了😀";
  completeBtn.classList.add("create-btn");
  completeBtn.addEventListener("click", (event) => {
    const targetRow = completeBtn.parentNode;
    // const todoText = targetRow.querySelector(".li-todo").innerText;
    const todoText = targetRow.firstElementChild.innerText;

    const compDiv = document.querySelector(".complete");

    const targetDiv = compDiv.querySelector("#complete-list");

    const div = document.createElement("div");
    div.classList.add("list-row");

    const li = document.createElement("li");
    li.innerText = todoText;
    li.classList.add("li-todo");
    targetDiv.appendChild(div);
    div.appendChild(li);

    deleteElement(completeBtn);
    console.log("↓🙉");

    console.log(completeBtn.parentNode);

    //
    const returnBtn = document.createElement("button");
    returnBtn.innerText = "戻す";
    returnBtn.addEventListener("click", () => {
      createImcompleteTask(
        returnBtn.parentElement.querySelector(".li-todo").innerText
      );
      deleteElement(returnBtn);
    });
    div.appendChild(returnBtn);
  });

  deleteBtn.innerText = "削除🙉";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", (event) => {
    deleteElement(deleteBtn);
  });

  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);
};
