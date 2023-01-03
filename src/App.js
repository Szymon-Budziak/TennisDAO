import { useAddress, ConnectWallet } from "@thirdweb-dev/react";

const App = () => {
  const address = useAddress();
  console.log("👋 Address:", address);

  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to Tennis DAO</h1>
        <div className="btn-hero">
          <ConnectWallet></ConnectWallet>
        </div>
      </div>
    );
  } else {
    return (
      <div className="landing">
        <h1>👀 wallet connected, now what!</h1>
      </div>
    );
  }
};

export default App;
