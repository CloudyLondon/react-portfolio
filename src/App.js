// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav
      // categories={categories}
      // setCurrentCategory={setCurrentCategory}
      // currentCategory={currentCategory}
      // contactSelected={contactSelected}
      // setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <Header></Header>
        <Project></Project>
        <Resume></Resume>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
