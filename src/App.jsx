import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(true)
  const [className, setclassName] = useState('option-list')
  useEffect(() => {
    if(open){
      setclassName('option-list')
    }else{
      setclassName('open')
    }
  }, [open])
  const [data] = useState([
    'Mercedes',
    'Tesla',
    'Volvo',
  ])
  const [filter, setFilter] = useState('Select')
  return (
    <section className="select">
      <div className="select-title"onClick={() => setOpen(!open)}>{filter}</div>
      <ul className={className}>
        {data.map((f, i) =>{
          return(
            <li className="option" key={i} onClick={e => setFilter(e.target.textContent, setOpen(!open))}>{f}</li>
          )
        })}
      </ul>
    </section>
  );
}

export default App;
