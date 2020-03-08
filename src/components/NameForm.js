import React, { useState } from 'react';

function NameForm() {
  const [ name, setName ] = useState("David");
  const [ age, setAge ] = useState(100);

  return (
    <form className="NameForm box">
      <p>{name} is {age}</p>
      <p>
        <label>Name</label>
        <input value={name} onChange={e => setName(e.target.value)}/>
      </p>    
      <p>
        <label>Age</label>
        <input value={age} onChange={e => setAge(e.target.value)}/>
      </p>
    </form>
  );
}

export default NameForm;