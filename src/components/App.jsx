import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [buttonText, setButtonText] = useState([]);

  function setButton(createText, event) {
    setButtonText((previous) => {
      return [...previous, createText];
    });
    event.preventDefault();
  }

  function deleteItem(id) {
    setButtonText((previous) => {
      return previous.filter((text, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onClicked={setButton} />
      {buttonText.map((text, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={text.title}
            content={text.content}
            onClicked={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
