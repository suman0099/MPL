import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MPL from "./components/Mpl";

class App extends React.Component {
    state = {
        username: "USERNAME12345",
        cash: "20",
        referralCode: "ABCD12",
        description: "invited you to play Mobile Premier League!"
    };
    render() {
        const { username, cash, referralCode, description } = this.state;
        return (
            <MPL
                username={username}
                cash={cash}
                referralCode={referralCode}
                description={description}
            />
        );
    }
}

export default App;
