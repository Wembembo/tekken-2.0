import React from "react";
import characters from "../data/characterList";

function Dropdown(props){
    return (
        <div className="Dropdown">
            <select class="Dropdown" id="playerOneSelection">
                <option value="" disabled="disabled" selected="selected">Select Player 1</option>
                <option value="Alisa">Alisa Bosconovitch</option>
                <option value="Anna">Anna Williams</option>
                <option value="Armour">Armour King</option>
                <option value="Asuka">Asuka</option>
                <option value="Azucena">Azucena</option>
                <option value="Bryan">Bryan Fury</option>
                <option value="Claudio">Claudio</option>
                <option value="Clive">Clive Rosfield</option>
                <option value="Devil">Devil Jin</option>
                <option value="Dragunov">Dragunov</option>
                <option value="Eddy">Eddy Gordo</option>
                <option value="Fahkumram">Fahkumram</option>
                <option value="Feng">Feng Wei</option>
                <option value="Heihachi">Heihachi Mishima</option>
                <option value="Hwoarang">Hwoarang</option>
                <option value="Jack">Jack-8</option>
                <option value="Jin">Jin Kazama</option>
                <option value="Jun">Jun Kazama</option>
                <option value="Kazuya">Kazuya Mishima</option>
                <option value="King">King</option>
                <option value="Kuma">Kuma</option>
                <option value="Lars">Lars Alexanderson</option>
                <option value="Law">Law</option>
                <option value="Lee">Lee</option>
                <option value="Leo">Leo</option>
                <option value="Leroy">Leroy Smith</option>
                <option value="Lidia">Lidia Sobieska</option>
                <option value="Lili">Lili</option>
                <option value="Nina">Nina Williams</option>
                <option value="Panda">Panda</option>
                <option value="Paul">Paul Phoenix</option>
                <option value="Raven">Raven</option>
                <option value="Reina">Reina Mishima</option>
                <option value="Shaheen">Shaheen</option>
                <option value="Steve">Steve Fox</option>
                <option value="Victor">Victor Chevalier</option>
                <option value="Xiaoyu">Ling Xiaoyu</option>
                <option value="Yoshimitsu">Yoshimitsu</option>
                <option value="Zafina">Zafina</option>
            </select>
            <select class="Dropdown" id="playerTwoSelection">
                <option value="" disabled="disabled" selected="selected">Select Player 2</option>
                <option value="Alisa">Alisa Bosconovitch</option>
                <option value="Anna">Anna Williams</option>
                <option value="Armour">Armour King</option>
                <option value="Asuka">Asuka</option>
                <option value="Azucena">Azucena</option>
                <option value="Bryan">Bryan Fury</option>
                <option value="Claudio">Claudio</option>
                <option value="Clive">Clive Rosfield</option>
                <option value="Devil">Devil Jin</option>
                <option value="Dragunov">Dragunov</option>
                <option value="Eddy">Eddy Gordo</option>
                <option value="Fahkumram">Fahkumram</option>
                <option value="Feng">Feng Wei</option>
                <option value="Heihachi">Heihachi Mishima</option>
                <option value="Hwoarang">Hwoarang</option>
                <option value="Jack">Jack-8</option>
                <option value="Jin">Jin Kazama</option>
                <option value="Jun">Jun Kazama</option>
                <option value="Kazuya">Kazuya Mishima</option>
                <option value="King">King</option>
                <option value="Kuma">Kuma</option>
                <option value="Lars">Lars Alexanderson</option>
                <option value="Law">Law</option>
                <option value="Lee">Lee</option>
                <option value="Leo">Leo</option>
                <option value="Leroy">Leroy Smith</option>
                <option value="Lidia">Lidia Sobieska</option>
                <option value="Lili">Lili</option>
                <option value="Nina">Nina Williams</option>
                <option value="Panda">Panda</option>
                <option value="Paul">Paul Phoenix</option>
                <option value="Raven">Raven</option>
                <option value="Reina">Reina Mishima</option>
                <option value="Shaheen">Shaheen</option>
                <option value="Steve">Steve Fox</option>
                <option value="Victor">Victor Chevalier</option>
                <option value="Xiaoyu">Ling Xiaoyu</option>
                <option value="Yoshimitsu">Yoshimitsu</option>
                <option value="Zafina">Zafina</option>
            </select>
        </div>
    );
};

export default Dropdown;