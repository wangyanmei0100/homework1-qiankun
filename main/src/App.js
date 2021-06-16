import { registerMicroApps, start, loadMicroApp } from 'qiankun';
import './App.less';

function clickApp(app) {
  return window.history.pushState(null, null,`./${app}`);
}
function App() {
  // registerMicroApps([
  //   {
  //     name: 'app1', // app name registered
  //     entry: '//localhost:7100',
  //     container: '#subApp1',
  //     activeRule: '/app1',
  //   },
  //   {
  //     name: 'app2', // app name registered
  //     entry: '//localhost:7102',
  //     container: '#subApp2',
  //     activeRule: '/app1',
  //   }
  // ]);
  
  // start();
  loadMicroApp(
    {
      name: 'app1', // app name registered
      entry: '//localhost:7100',
      container: '#subApp1',
      activeRule: '/app1',
    },
    {
      name: 'app2', // app name registered
      entry: '//localhost:7102',
      container: '#subApp2',
      activeRule: '/app1',
    }
  );
  
  return (
    <div className="App">
      <div className="mainapp">
        <div className="mainapp-main">
          <ul className="mainapp-sidemenu">
            <li onClick={() => clickApp('app1')}>app1</li>
            <li onClick={() => clickApp('app2')}>app2</li>
          </ul>
          <main id="subApp1"></main>
          <main id="subApp2"></main>
        </div>
      </div>
    </div>
  );
}

export default App;
