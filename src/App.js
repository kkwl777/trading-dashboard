import logo from './logo.svg';
import './App.css';
import TradingViewWidget from "react-tradingview-widget";
import IFcomm from "./iframe";

function App() {
  return (
    <div className="App" >
         
      <div > 
        <IFcomm />

      <TradingViewWidget
        symbol={'BTCPERP'}
        width={'100%'}
        height={'500px'}
        theme={'dark'}
        timezone={"America/Toronto"}
        hide_side_toolbar={false}
        calander={true}
        watchlist= {[
          "BINANCE:BTCPERP",

          "BINANCE:ETHPERP",
          "BINANCE:ETHBTC",

          "FTX:SOLPERP",
          "BINANCE:AVAXPERP",
          "BINANCE:LUNAPERP",
          "BINANCE:LINKPERP",

        ]}
      />
      </div>
    </div>
  );
}

export default App;
