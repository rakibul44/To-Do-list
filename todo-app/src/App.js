import './App.css';


function App(){
    return (
        <div classname='App'>
            <h1>My Todos</h1>

            <div classname='todo-warapper'>
             <div classname='todo-input'>
                <div classname='todo-item'>
                    <label>Title</label>
                    <input type='text' placeholder='What is in your mind'></input>
                </div>
                <div classname='todo-item'>
                    <label>Description</label>
                    <input type='text' placeholder='What is in your mind'></input>
                </div>
                <div classname='todo-item'>
                    {/* <label>Title</label> */}
                    {/* <input type='submit' classname=''></input> */}
                    <button type='btn' classname='primaryBtn'>Add</button>
                </div>

                <div classname='btn-area'>

                    <button>ToDo list</button>
                    <button>Completed</button>
                </div>
             </div>
            </div>
        </div>
       
    );
}

export default App;