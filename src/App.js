import './App.css';
import{useState} from "react";

function App() {
    const [name,setName] = useState('');
  return (
      <main>
        <h1>$400<span>.00</span></h1>
        <form>
            <div className="basics">
             <input type="text"
                    value={name}
                    onChange={ev => setName(ev.target.value)}
                    placeholder={'+200 new samsung tv'}/>
             <input type="datetime-local"/>
            </div>
            <div className='description'>
             <input type="text" placeholder={'description'}/>
            </div>

            <button type="submit">Add new transaction</button>

            <div className="transactions">
             <div className="transaction">
                <div className="left">
                    <div className="name">New Samsung TV</div>
                    <div className="description">It was time for a new TV</div>
                </div>

                <div className="right">
                    <div className="price red">-$500</div>
                    <div className="datetime-local">2022-12-23 15:43</div>
                </div>
             </div>

                 <div className="transaction">
                <div className="left">
                    <div className="name">Big Job new website</div>
                    <div className="description">It was time for a new TV</div>
                </div>

                <div className="right">
                    <div className="price green">+$400</div>
                    <div className="datetime-local">2022-12-23 15:43</div>
                </div>
                 </div>

                 <div className="transaction">
                <div className="left">
                    <div className="name">iPhone</div>
                    <div className="description">It was time for a new TV</div>
                </div>

                <div className="right">
                    <div className="price red">-$900</div>
                    <div className="datetime-local">2022-12-23 15:43</div>
                </div>
                 </div>

             </div>

        </form>
      </main>
  );
}

export default App;
