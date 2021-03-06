import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// UI Components
import Home from "../home/home";
import NavBar from "../home/navBar";
import Footer from "../home/footer";
import Register from "../register/register";
import ResearchRegistration from "../researcher/ResearchRegistration/researchRegistration";
import ViewResearchRegistration from "../researcher/ResearchRegistration/viewResearchRegistration";
import AttendeeResearchPayment from "../researcher/researchPayment/researchPayment";
import ViewResearchPayment from "../researcher/researchPayment/viewResearchPayment";
import Researcher from "../researcher/ResearchRegistration/viewResearchRegistration";
import Reviewer from "../reviewer/reviewer";
import Editor from "../editor/editor";
import ViewResearches from "../admin/research/viewResearches";
import ViewResearcherResearchPayments from "../admin/researcher/viewResearcherResearchPayments";
import ViewWorkShop from "../workShop/viewWorkShop";
import ViewApprovedWorkShops from "../workShop/viewApprovedWorkShops";
import CreateWorkShop from "../workShop/createWorkShop";
import AttendeeWorkshopRegistration from "../attendee/workshopRegistration/attendeeWorkshopRegistration";
import ViewAttendeeRegistration from "../attendee/workshopRegistration/viewAttendeeRegistration";
import AttendeeWorkShopPayment from "../attendee/payment/attendeeWorkShopPayment";
import ViewPayment from "../attendee/payment/viewPayment";
import ViewWorkShops from "../admin/workShop/viewWorkShops";
import ViewAttendee from "../admin/attendee/viewAttendee";
import ViewAttendeeWorkShopPayments from "../admin/attendee/viewAttendeeWorkShopPayments";

function PageRoutes() {
    return (
        <div>
            <Router>
                <NavBar />
                <section className="content">
                    <Switch>
                        <Route path="/reviewer" component={Reviewer}/>
                        <Route path="/researcher" component={Researcher}/>
                        <Route path="/editor" component={Editor}/>
                        <Route path="/admin/researcher-payments" component={ViewResearcherResearchPayments}/>
                        <Route path="/admin/research" component={ViewResearches}/>
                        <Route path="/research-payment/create" component={AttendeeResearchPayment}/>
                        <Route path="/research-payment" component={ViewResearchPayment}/>
                        <Route path="/research/registration" component={ResearchRegistration}/>
                        <Route path="/research-researcher" component={ViewResearchRegistration}/>
                        <Route path="/admin/attendee-payments" component={ViewAttendeeWorkShopPayments}/>
                        <Route path="/admin/attendee-workshop" component={ViewAttendee}/>
                        <Route path="/admin/workshop" component={ViewWorkShops}/>
                        <Route path="/workshop-payment/create" component={AttendeeWorkShopPayment}/>
                        <Route path="/workshop-payment" component={ViewPayment}/>
                        <Route path="/workshop-attendee/registration" component={AttendeeWorkshopRegistration}/>
                        <Route path="/workshop-attendee" component={ViewAttendeeRegistration}/>
                        <Route path="/workshop/registration" component={CreateWorkShop}/>
                        <Route path="/workshop/my" component={ViewWorkShop}/>
                        <Route path="/workshop" component={ViewApprovedWorkShops}/>
                        <Route path="/registration" component={Register}/>
                        <Route path="/" component={Home} exact/>
                    </Switch>
                </section>
                <Footer/>
            </Router>
        </div>
    );
}

export default PageRoutes;
