import React from 'react';
import { Link} from 'react-router-dom';
import historys from '../../components/actions/history';
import '../../css/first.scss';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.goSubs = this.goSubs.bind(this);
    }
    goSubs(e){
        if(e.which !== 13) return;
        // alert('ok');
        // document.getElementById('goHome').click();
        this.props.history.push('/home');
        // historys.push('/home/list');//不好用啊
    }
    // bundClick(e){
    //     e.preventDefault();
    //     return false;
    // }
    render() {
        return (
            <div className="logins">
                <input type="text" placeholder="输入值回车即登陆" onKeyUp={this.goSubs} />
                <Link id="goHome" to="/home"></Link>
                {/* <a id="goHome" href="/home" onClick={this.bundClick}>去主页</a> */}
            </div>
        )
    }
}

export default Login;