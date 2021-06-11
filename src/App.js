import { useState } from 'react'
import Property from './components/Property'
import Content from './components/Content'
import useContentfull from './helpers/useContentfull'

function App() {

  const [element, setElement] = useState([]);
  const [selected, setSelected] = useState('');

  const {data} = useContentfull();

  const selectItem = (e) => {
    const selectedItem = data.filter(item => item.fields.slug === e.currentTarget.id);
    setElement(selectedItem[0].fields);
    setSelected('show');
  }

  const closePopup = () => {
    setSelected('');
  }

  return (
    <div className="container">
      <h1>CSS Helper</h1>
      <div className="props-grid">
        {data && data.map(item => (
          <div key={item.fields.slug} id={item.fields.slug} onClick={selectItem}>
            <Property id={item.fields.slug} name={item.fields.title}></Property>
          </div>
        ))}
      </div>
      <Content data={element} selected={selected} close={closePopup}></Content>
    </div>
  );
}

export default App;
