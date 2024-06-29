import React, { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateEmail() {
    let regEmail = /^[a-zA-Z0-9]+@gmail\.[A-Za-z]+$/;
    if (!regEmail.test(email)) {
      return false;
    }
    return true;
  }

  function containsNumber(str) {
    return /\d/.test(str);
  }

  function validatePassword(password) {
    const pass = String(password);
    console.log(pass);
    const first = pass[0];

    if (pass.length === 0) {
      return "Password required";
    } else if (!pass.includes("_")) {
      return "At lease in a place should have underscore _";
    } else if (!containsNumber(pass)) {
      return "At least in any place should have digit";
    } else if (first !== first.toUpperCase()) {
      return "First character should be UpperCase";
    }
    return "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    const emailCheck = validateEmail(email);
    if (!emailCheck) {
      alert("Email is not valid");
      return;
    }

    const passCheckResult = validatePassword(password);
    console.log(passCheckResult);
    if (passCheckResult !== "") {
      alert(passCheckResult);
      return;
    }

    alert(`Your data email is : ${email}  your pass : ${password}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <section>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </section>
        <section>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </section>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
