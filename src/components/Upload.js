import React, { useState } from 'react';
import ProgresBar from './ProgresBar';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Unesite odgovarajući fajl (png ili jpg)');
    }
  };

  return (
    <form id="Galerija">
      <div>
        <h2>Pogledajte naše najnovije radove</h2>
      </div>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgresBar file={file} setFile={setFile} /> }
      </div>
    </form>
  );
}

export default Upload;