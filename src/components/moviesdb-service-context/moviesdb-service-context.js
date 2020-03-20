import React from "react";

const {
    Provider: MoviesDbServiceProvider,
    Consumer: MoviesDbServiceConsumer
} = React.createContext();

export {
    MoviesDbServiceProvider,
    MoviesDbServiceConsumer
}