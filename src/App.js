import { useState, useContext } from 'react'
import Property from './components/Property'
import Content from './components/Content'
import data from './data/props.json'

function App() {

  const [element, setElement] = useState({});

  const selectItem = (e) => {
    const selectedItem = data.filter(item => item.id == e.currentTarget.id);
    setElement(selectedItem[0]);
  }

  return (
    <div className="container">
      <h1>CSS Helper</h1>
      <div className="props-grid">
        {data && data.map(item => (
          <div key={item.id} id={item.id} onClick={selectItem}>
            <Property id={item.id} name={item.name}></Property>
          </div>
        ))}
      </div>
      <Content data={element}></Content>
    </div>
  );
}

export default App;
