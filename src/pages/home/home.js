import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
// import Lists from '../lists/list';
import homeImg from '../../images/b2.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <span>this is homepage;一般不用img，多用back-img</span>  
                <img src={homeImg} alt="" />
                <div>在vscode中使用git，默认vscode已经集成了git工具</div>
            </div>
        )
    }
}