import React from "react";
import Header from './Header';
import MessagesList from "./MessagesList";
import MessagesSubmit from "./MessagesSubmit"


function MainPage(props){


    return (
        <div id="MainPage">
            <Header title = {'Translation App'}/>
            <h1 className='mt-10 text-blue-600 text-3xl font-bold'></h1>
            <div className="flex max-w-7xl m-auto px-14 py-24">
                <div className="w-1/2 pr-5">
                    
                <MessagesSubmit>
                        
                        </MessagesSubmit>
                </div>
                <div className="w-1/2 pl-5">
                
                        <MessagesList>

                    </MessagesList>
                </div>
            </div>


        </div>
    );
}

export default MainPage;