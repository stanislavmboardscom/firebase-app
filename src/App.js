import "./App.css";
import { useState } from "react";
import { useAuth } from "./useAuth";

function App() {
  const { user, signIn, signOut } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    return (
      <div>
        <div>Logged in {user.email}</div>

        <br />

        <button onClick={() => window.open("/openedTab", "_blank")}>
          Open new tab same domain
        </button>
        <br />

        <button
          onClick={() => window.open("https://app.boards.com/", "_blank")}
        >
          Open new tab https://app.boards.com/
        </button>
        <br />

        <button onClick={signOut}>Logout</button>
      </div>
    );
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn({ email, password, remember: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type={"text"}
          placeholder={"email"}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type={"password"}
          placeholder={"password"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type={"submit"}>Login</button>
      </form>
    </div>
  );
}

export default App;
