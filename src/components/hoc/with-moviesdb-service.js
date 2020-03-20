import React from "react";
import { MoviesDbServiceConsumer } from '../moviesdb-service-context';

const withMoviesDbService = () => (Wrapped) => {
    return (props) => {
        return (
            <MoviesDbServiceConsumer>
                {
                    (moviesDbService) => {
                        return (
                            <Wrapped {...props} moviesDbService={moviesDbService} />
                        )
                    }
                }
            </MoviesDbServiceConsumer>
        )
    }
};

export default withMoviesDbService;