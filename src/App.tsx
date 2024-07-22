import loginBg from './assets/login.svg';
import LoginForm from './components/login-form';

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
      <div className="hidden md:flex md:justify-center md:align-middle px-2">
        <img className='max-w-xl self-center' src={loginBg} alt="login background" />
      </div>
      <div className="self-center px-8 ">
        <div className="text-2xl text-center mb-8 font-bold">PLEASE LOGIN TO YOUR ACCOUNT</div>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
