import { registerMicroApps, start } from 'qiankun';
import './App.less';

function clickReact16() {
  return window.history.pushState(null, null,'./react16');
}
function App() {
  registerMicroApps([
    {
      name: 'react app', // app name registered
      entry: '//localhost:7100',
      container: '#subapp-container',
      activeRule: '/react16',
    }
  ]);
  
  start();
  
  return (
    <div className="App">
      <div className="mainapp">
        <div className="mainapp-main">
          <ul className="mainapp-sidemenu">
            <li onClick={() => clickReact16()}>React16</li>
          </ul>
          <main id="subapp-container"></main>
        </div>
      </div>
    </div>
  );
}

export default App;
