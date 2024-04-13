import LoginForm from "../mycomponents/LoginForm";

function Login() {
  return <LoginForm route="/api/token/" method="login"/>;
}

export default Login;
