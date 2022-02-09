import React from 'react';

const Index = () => {
    return (
        <>
            <div className="center">
                <h1>Welcome!</h1>
                <h2>The best tracks are collected here!</h2>
            </div>

            <style jsx>
                {`
                    .center {
                        margin-top: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                `}
            </style>
        </>
    );
};

export default Index;