import "./App.css";
import PostLayout from "./layouts/PostLayout";
import UserLayout from "./layouts/UserLayout";

function App() {
  
  return (
    <div className="App">
      {/* <PostLayout/> */}
      <div style={{marginTop:'20px'}}>
      <UserLayout/>
      </div>
      
    </div>
  );
}

export default App;
