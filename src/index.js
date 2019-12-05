import '@lwc/synthetic-shadow';
import { buildCustomElementConstructor } from 'lwc';
import MyApp from 'my/app';
import LoginForm from 'login/form';

customElements.define('my-app', buildCustomElementConstructor(MyApp));
customElements.define('login-form', buildCustomElementConstructor(LoginForm));
