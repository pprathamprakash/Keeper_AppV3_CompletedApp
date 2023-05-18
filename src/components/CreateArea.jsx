import React, { useState } from "react";

function CreateArea(props) {
  const [createText, setCreateText] = useState({
    title: "",
    content: ""
  });

  function setCreate(event) {
    const { name, value } = event.target;
    setCreateText((previous) => {
      return { ...previous, [name]: value };
    });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          props.onClicked(createText, event);
          setCreateText({ title: "", content: "" });
        }}
      >
        <input
          onChange={setCreate}
          name="title"
          placeholder="Title"
          value={createText.title}
        />
        <textarea
          onChange={setCreate}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={createText.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
