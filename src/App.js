import './App.css';

function App() {
  return (
      <main>
        <h1>$400<span>.00</span></h1>
        <form>
            <div>
             <input type="text" placeholder={'+200 new samsung tv'}/>
             <input type="datetime-local"/>
            </div>
            <div className='description'>
             <input type="text" placeholder={'description'}/>
            </div>
            <button type="submit">Add new transaction</button>

            <div className={"transaction"}>
                <div className={"left"}>
                    <div className={"name"}>New Samsung TV</div>
                    <div className={"description"}>It was time for a new TV</div>
                </div>

                <div className={"right"}>
                    <div className={"price"}>$500</div>
                    <div className={"datetime"}>2022-12-20023 15:43</div>
                </div>

                <div className={"left"}>
                    <div className={"name"}>New Samsung TV</div>
                    <div className={"description"}>It was time for a new TV</div>
                </div>

                <div className={"right"}>
                    <div className={"price"}>$500</div>
                    <div className={"datetime"}>2022-12-20023 15:43</div>
                </div>

                <div className={"left"}>
                    <div className={"name"}>New Samsung TV</div>
                    <div className={"description"}>It was time for a new TV</div>
                </div>

                <div className={"right"}>
                    <div className={"price"}>$500</div>
                    <div className={"datetime"}>2022-12-20023 15:43</div>
                </div>

            </div>

        </form>
      </main>
  );
}

export default App;
