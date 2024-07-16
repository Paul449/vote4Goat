import React, { useState, useEffect } from "react";
import "../index.css";
import List from "../List";
import { getInitialData, genNextData } from "../data";
//shows players ranking
const PlayerList = function(){
    const [data, setData] = useState(getInitialData());
    const doSwitch = () => {
      setData((d) => {
        [d[0], d[1]] = [d[1], d[0]];
        d[0].score += 1000;
        d[1].score += 2000;
        return [...d];
      });
    };
    useEffect(() => {
      // const timer = setInterval(() => setData(genNextData()), 1000);
      // return () => clearInterval(timer);
    }, []);
    return(
        <div className="PlayerList">
            <p>LeaderBoard</p>
            <button onClick={doSwitch}>switch</button>
            <List data={data} />
        </div>
    )
};

export default PlayerList;