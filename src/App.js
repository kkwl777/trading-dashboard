import logo from './logo.svg';
import './App.css';
import TradingViewWidget from "react-tradingview-widget";
import IFcomm from "./iframe";

function App() {
  return (
    <div className="App" >
         
      <div > 
        

      <TradingViewWidget
        symbol={'BTCPERP'}
        width={'100%'}
        height={'500px'}
        theme={'dark'}
        timezone={"America/Toronto"}
        hide_side_toolbar={false}
        
        calandar={true}
        details={true}
        hotlist={true}
        withdateranges={true}
        
        watchlist= {[
          "AMEX:SPY",
          "AMEX:IWM",
     
          "BINANCE:BTCPERP",
          "TSXV:HIVE",
          "BINANCE:ETHPERP",
          "DERIBIT:ETHPERP",

          "BINANCE:ETHBTC",
          "CRYPTOCAP:TOTAL",
          "CRYPTOCAP:TOTAL2",
          
          "FTX:SOLPERP",
          "BINANCE:AVAXPERP",
          "BINANCE:LUNAPERP",
          "BINANCE:LINKPERP",

        ]}
      />

<IFcomm />
      </div>
    </div>
  );
}

export default App;
