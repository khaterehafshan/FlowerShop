import {useState} from "react";

function Login({setUser, setAuthModal}) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const login = () => {
    setError("");

    if (!email || !pass) {
      setError("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email (example@mail.com).");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === pass);

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      setUser(user);
      setAuthModal(null);
    } else {
      setError("Email or password incorrect.");
    }
  };

  return (
    <div className="auth-modal">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      {error && <p className="auth-error">{error}</p>}

      <button onClick={login}>Log In</button>

      <p>
        Don't have an account?{" "}
        <span className="modal-link" onClick={() => setAuthModal("signup")}>
          Sign up
        </span>
      </p>
    </div>
  );
}

export default Login;
