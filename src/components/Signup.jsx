import { useState } from "react";

function Signup({ setUser, setAuthModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const signup = () => {
    setError("");

    if (!name || !email || !pass) {
      setError("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email (example@mail.com).");
      return;
    }

    if (pass.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    let users = [];
    try {
      users = JSON.parse(localStorage.getItem("users")) || [];
    } catch {
      localStorage.removeItem("users");
    }

    if (users.some((u) => u.email === email)) {
      setError("Email already exists. Please log in.");
      setAuthModal("login");
      return;
    }

    const newUser = { name, email, password: pass };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    setUser(newUser);
    setAuthModal(null);
  };

  return (
    <div className="auth-modal">
      <h2>Create Account</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
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

      <button onClick={signup}>Sign Up</button>

      <p>
        Already have an account?{" "}
        <span className="modal-link" onClick={() => setAuthModal("login")}>
          Log in
        </span>
      </p>
    </div>
  );
}

export default Signup;
