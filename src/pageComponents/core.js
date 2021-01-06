import React from 'react';
//export class so it can be used in different locations
export class Core extends React.Component {

    render() {
        return (
            <div>
                <h1>This is the core Component</h1>
                <h1>Hello World</h1>
                <h2>it is {new Date().toLocaleTimeString()}.</h2>
                <h2>it is {new Date().toLocaleDateString()}.</h2>
            </div>
        );
    }

}