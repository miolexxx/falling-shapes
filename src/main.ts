import './style.css';
import { App } from './app/app';


function run() {
    // create 'App' instance and init it
    const app = new App();
    app.init();
}

// wait when page is fully loaded including all scripts and styles
window.addEventListener('load', (_) => run());
