import React, {Component} from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div data-testid="nav-1">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Conference Planner</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/research/registration">RESEARCH REGISTRATION</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/research-payment/create">RESEARCH PAYMENT</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/admin/research">ADMIN RESEARCHES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/workshop/my">ALL WORKSHOPS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/workshop/registration">WORKSHOP REGISTRATION</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/workshop-attendee">ATTENDEE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/workshop-attendee/registration">ATTENDEE REGISTRATION</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/workshop-payment">ALL ATTENDEE PAYMENTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/workshop-payment/create">ATTENDEE PAYMENT</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/admin/workshop">ADMIN WORKSHOPS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/admin/attendee-workshop">ADMIN ATTENDEE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/admin/attendee-payments">ADMIN PAYMENTS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;