import './App.css';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/bmp">替换图片例子</Link></li>
        <li><Link to="/text">替换文本例子</Link></li>
        <li><Link to="/newYear">API相关例子</Link></li>
      </ul>
    </div>
  );
}

export default App;
