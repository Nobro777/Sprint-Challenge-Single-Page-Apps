import React, { useState } from "react";

export default function SearchForm(props) {

  const [form, setForm] = useState();

  const handleChanges = elem => {
    setForm(elem.target.value);
  }
  
  const submitHandler = elem => {
    elem.preventDefault();
    const filtered = props.characters.filter(char => {
      return char.name.toLowerCase().indexOf(form.toLowerCase()) !== -1;
    });
  console.log(filtered);
  props.search(filtered);
  }

  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <input onChange={handleChanges} id='character' name='character' type='text' placeholder='Search...'></input>
      <button>Search!</button>
      </form>
    </section>
  );
}
