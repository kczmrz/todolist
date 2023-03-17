import './index.css';
import ToDoList from './Components/ToDoList';
import { Footer, Navbar } from './Components';


function App() {
  return (
   <div className="flex flex-col h-screen justify-between overflow-x-hidden">
      <nav><Navbar/></nav>

      <main className="mb-auto"> 
        <ToDoList/>
      </main>

      <br/>

      <footer>
         <Footer/>
      </footer>
   </div>
  );
}

export default App;
