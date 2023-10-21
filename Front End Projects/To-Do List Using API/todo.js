//This is the variable which will have the object returned of the IIFE with certain specific part of the code which we want to make public and to be used/shared to the other script files.
var todoListApp =
  //Convert the whole code to IIFE Degign Pattern
  //Helps avoid conflict with other JS files by creating a separate Execution context, out of which the variable/and members of the JS file are not accessible to the outer environment.
  (function () {
    let tasks = [];
    const tasksList = document.getElementById("list");
    const addTaskInput = document.getElementById("add");
    const tasksCounter = document.getElementById("tasks-counter");

    console.log("Working");
    var a = 10;
    //This funciton will fetch the data(todo) from the API
    async function fetchApi() {
      //currently it is only a GET request
      // fetch('https://jsonplaceholder.typicode.com/todos')
      // .then(function (response) {
      //     return response.json();
      // }).then(function (data) {
      //     // console.log(data);
      //     tasks = data.slice(10,40);
      //     renderList();
      // }).catch(function (error) {
      //     console.log(error);
      // });

      //Await Async Syntax
      //Use Async before the fetchApi function for await to work
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        tasks = data.slice(10, 40);
        renderList();
      } catch (error) {
        console.log(error);
      }
    }

    function addToDOM(task) {
      const li = document.createElement("li");
      li.innerHTML = `<input type="checkbox" class="custom-checkbox" id="${
        task.id
      }" ${task.completed ? "checked" : ""}>
        <label for="${task.id}">${task.title}</label>
        <img src="./assets/images/bin.png" class="delete" data-id="${
          task.id
        }" />`;
      tasksList.append(li);
    }

    function renderList() {
      //Clear all the conent inside the ul tag
      tasksList.innerHTML = "";

      //Each time we will render the lists, we will essentially recreate the lists from scratch, by adding tasks to the DOM
      //add each task to the DOM
      for (let i = 0; i < tasks.length; i++) {
        addToDOM(tasks[i]);
      }

      tasksCounter.innerHTML = tasks.length;
    }

    //This function will toggle the 'done' property of the task
    function toggleTask(taskId) {
      const newTask = tasks.filter((task) => {
        return task.id === Number(taskId);
      });

      if (newTask.length > 0) {
        newTask[0].completed = !newTask[0].completed;
        renderList();
        showNotification("Task toggling Successful");
        return;
      }
      showNotification("Could Not Toggle the Task");
    }

    function deleteTask(taskId) {
      const newTasks = tasks.filter((task) => {
        return task.id !== Number(taskId);
      });

      tasks = newTasks;
      renderList();
      showNotification("Task Deleted Successfully");
    }

    function addTask(task) {
      if (task) {
        tasks.push(task);
        renderList();
        showNotification("Task Added Successfully!");
        return;
      } else {
        showNotification("Task can not be added!");
      }
    }

    function showNotification(text) {
      alert(text);
    }

    //Input Field Task Handler
    function handleInputKeyPress(e) {
      if (e.key === "Enter") {
        const text = e.target.value;

        //Checking !text for a falsy statement, which includes undefined, null, 0, an empty string "", false,
        if (!text) {
          alert("Task Text Can't be Empty");
          return;
        }

        // //send the current text content to show notification function.
        // showNotification(text);

        //Create an array for the task
        const task = {
          title: text,
          id: Date.now(),
          completed: false,
        };
        e.target.value = "";

        addTask(task);
      }
    }

    function handleClick(e) {
      const target = e.target;

      if (target.className === "custom-checkbox") {
        const taskId = target.id;
        toggleTask(taskId);
        return;
      } else if (target.className === "delete") {
        const taskId = target.dataset.id;
        deleteTask(taskId);
        return;
      }
    }

    //Function to intitialize eventListners
    function initializeListeners() {
      //Api Data Fetch
      console.log(fetchApi());

      //Input Field Task Event Listener
      addTaskInput.addEventListener("keyup", handleInputKeyPress);

      //Cick Event Listener
      document.addEventListener("click", handleClick);
    }

    return {
      initialize: initializeListeners(),
      a,
    };
  })();
