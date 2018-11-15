import React, { Component } from "react";
import {
    Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import Home from './home';
import Lists from '../lists/list';
import Detail from '../lists/detail';
import Counter from '../counter/counter';
import '../../css/home.scss';

export default class Homes extends Component {
    render() {
        const match = this.props.match;
        return (
            <div className="clearFix comParts">
                <ul className="navBox clearFix">
                    <li><Link to="/">登陆</Link></li>
                    <li><Link to="/home">首页??</Link></li>
                    <li><Link to="/home/list">列表页</Link></li>
                    <li><Link to="/home/detail">详情</Link></li>
                    <li><Link to="/home/count">交易</Link></li>
                </ul>
                <div className="leftNavs">左侧菜单树</div>
                <div className="rightConts">
                    <Switch>
                        <Route exact path={`${match.url}`} component={Home} />
                        <Route path={`${match.url}/list`} component={Lists} />
                        <Route path={`${match.url}/detail`} component={Detail} />
                        <Route path={`${match.url}/count`} component={Counter} />
                    </Switch>
                </div>
                <Counter></Counter>

            </div>
        )
    }
}