import React from "react";

function Header(){
    return (
        <header className="Header">
            <h1>Tekken 8 Quick Matchup Guide</h1>
            <p class="header_subtitle">A quick referencing tool for matchups, aimed at beginners and commentators</p>
            <p>The information here is subject to change depending on the latest patch. I'll be trying to keep on top of everything, but this will need some time to update as patches are released. </p>
            <p>You can find the latest patch notes <a href="https://www.tekken-official.jp/tekken_news/?p=1500">here</a>. Version 2.02.00 is the current version of the game</p>        
        </header>
    );
}

export default Header;