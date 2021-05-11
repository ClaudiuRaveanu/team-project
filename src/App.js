
import React from 'react';
//import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import DashboardScreen from './Screens/Dashboard';
import BooksView from './Screens/BooksView';
import Book_a_book from './Screens/Book_a_book';
import AddBook from './Screens/AddBook';
import AddReview from './Screens/AddReview';
import ViewWishlist from './Screens/ViewWishlist';
import ViewBook from './Screens/ViewBook';

export function getCurrentDate(separator='') {
    let myCurrentDate = new Date();
    let date = myCurrentDate.getDate();
    let month = myCurrentDate.getMonth() + 1;
    let year = myCurrentDate.getFullYear();

    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}

function App() {
return (
    <Router>
        <Switch>
            <Route exact path="/">
                <DashboardScreen/>
            </Route>
            <Route path="/book-a-book">
                <Book_a_book/>
            </Route>
            <Route path='/add-book'>
                <AddBook />
            </Route>
            <Route path="/register">
                <RegisterScreen/>
            </Route>
            <Route path="/signin">
                <LoginScreen/>
            </Route>
            <Route path="/view-books">
                <BooksView/>
            </Route>
            <Route path="/add-review">
                <AddReview/>
            </Route>
            <Route path="/wishlist">
                <ViewWishlist/>
            </Route>
            <Route path="/view-book">
                <ViewBook />
            </Route>
        </Switch>
    </Router>
    );
}

export default App;
