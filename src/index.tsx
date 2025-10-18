import { render } from 'preact';
import './index.css';
import { Login } from './login';
function App() {

	return <Login />
}
render(<App />, document.getElementById('app'));

let theme = localStorage["theme"];
if (theme) {
	document.documentElement.classList.add('theme-light');
}