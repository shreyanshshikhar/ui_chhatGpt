import React, { useState } from 'react';
import './App.css';
import { sendMsgToOpenAI } from './openai';

function App() {
    const [input, setInput] = useState("");
    const handleSend = async() => {
        const res = await sendMsgToOpenAI(input);
        console.log(res);
    }
    return ( <
        div className = "App" >
        <
        div className = "sideBar" >
        <
        div className = "upperSide" >
        <
        div className = 'upperSideTop' >
        <
        img src = "https://freelogopng.com/images/all_img/1681039084chatgpt-icon.png"
        height = "35px"
        alt = "Logo"
        className = 'logo' /
        >
        <
        span className = 'brand font-bold' > Shreyansh GPT < /span> <
        button className = "midbtn" > +New Chat < /button> <
        div className = "upperSideBottom" >
        <
        button className = "query" > ✉️What is programming ? < /button> <
        button className = "query" > ➡️How to use API ? < /button> < /
        div > <
        /div> < /
        div > <
        div className = "lowerSide" >
        <
        div className = 'listItems' > 🏡Home < /div> <
        div className = 'listItems' > 📩Saved < /div> <
        div className = 'listItems' > ⬆️Upgrade to pro < /div> < /
        div > <
        /div>

        <
        div className = 'main' >
        <
        div className = 'chats' >
        <
        div className = 'chat' >
        <
        img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlt0cyNia3XvKb74VfkDxKz4JZGKCJ1GE7OIIog0j2g&s"
        alt = "User Avatar"
        className = 'chatImg' / > < p className = 'txt' > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <
            /p> < /
        div > <
        div className = 'chat  bot' >
        <
        img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJSW9BdLHwJYhYHjrOkPrhObrjGxZPtvkGDkCjSRal2F4dpgHCodj2yJ2BEBbi3E42V8&usqp=CAU"
        alt = "User Avatar"
        className = "chatImg" / > < p className = 'txt' > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <
            /p> < /
        div > < /
        div > <
        div className = 'chatFooter' >
        <
        div className = 'inp' >
        <
        input type = 'text'
        placeholder = 'Message shreyansh gpt...'
        value = { input }
        onChange = {
            (e) => setInput(e.target.value)
        }
        / > <
        button className = "send"
        onclick = { handleSend } > ▶️ < /button> < /
        div > < p > Shreyansh GPT can make mistakes.Consider checking important information.

        <
        /p> < /
        div > < /
        div > <
        /div>
    );
}

export default App;