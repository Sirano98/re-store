import React from "react";
import { BookServiceConsumer } from "../bookstore-service-context/bookstore-service-context";

const withBookStoreService = () => (Wrapped) => {

return (props) => {
    return (
        <BookServiceConsumer>
            {
                (withBookStoreService) => {
                    return(
                        <Wrapped {...props} 
                        withBookStoreService={withBookStoreService}/>
                    )
                }
            }
        </BookServiceConsumer>
    );
}

};

export default withBookStoreService;