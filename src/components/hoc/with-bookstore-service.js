import React from "react";
import { BookServiceConsumer } from "../bookstore-service-context/bookstore-service-context";

const withBookStoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <BookServiceConsumer>
                {
                    (bookstoreService) => {
                        return (
                            <Wrapped {...props}
                                bookstoreService={bookstoreService} />
                        )
                    }
                }
            </BookServiceConsumer>
        );
    }

};

export default withBookStoreService;