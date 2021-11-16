import './App.css';
import Header from './Components/Header/Header'
import FundTransfer from './Components/FundTransfer/FundTransfer';
import FundTransferData from './Components/FundTransferData/FundTransferData'

function App() {
  return (
    <div className="App">
      <Header />
      <FundTransfer />
      <FundTransferData />
    </div>
  );
}

export default App;
