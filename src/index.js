import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app/app";
import { Provider } from "react-redux";
import store from "./store";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import BookstoreService from "./services/bookstore-service";
import { BookServiceProvider } from "./components/bookstore-service-context/bookstore-service-context";

const bookstoreService = new BookstoreService();

reactDom.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookServiceProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
)