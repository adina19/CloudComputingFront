import React from 'react';
import {LANGUAGES_ARRAY} from '../util/constants';
import axios from 'axios';
import MessagesList from './MessagesList';



const handleMessageSend = async (e) => {
    const button= e.target;
    const language = button.value;
   // const senderName=document.getElementById('senderName').value;
   // const receiverMail=document.getElementById('receiverMail').value;
    const messageContent=document.getElementById('messageContent').value;

    try{
        const response=await axios.post(
            `${process.env.REACT_APP_API_URL}/utils/translateStore`, 
                 {
                    messageContent,
                    language
                }
           
             );

           
            // if(response.status===200){
            //     alert();

            // }
        

    }
    catch(error){
        alert('Something went wrong');

        console.log(error);
    }
}

const reload=async (e) => {
    const button= e.target;

    try{
       
        window.location.reload(false);

    }
    catch(error){
        alert('Something went wrong');

        console.log(error);
    }
}

function MessagesSubmit(){
    return (
        <div id='MessagesSubmit'>
            <h2 className='text-2xl font-bold mb-4'>What do you want to translate? </h2>
            <form className="w-full max-w-lg">
                {/* <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="senderName">
                            Your name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="senderName" type="text" placeholder="John" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="receiverMail">
                            Receiver mail
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="receiverMail" type="text" placeholder="jane@mail.com" />
                    </div>
                </div> */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="messageContent">
                            Your text below
                        </label>
                        <textarea
                            rows={4}
                            name="comment"
                            id="messageContent"
                            className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-800 rounded-md p-5"
                            placeholder={'Write something here...'} />
                    </div>
                </div>
            </form>

        {
            LANGUAGES_ARRAY.map((language,index )=> 
                <button
                key={index}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 capitalize"
                value={language}
                onClick={handleMessageSend}
               
                >
                    {language.toLowerCase()}
                </button>
                )
        }
<div>
        <button
        className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded m-2 capitalize"
        onClick={reload}
        >Translate</button>
</div>
        </div>
        
    );
   
}

export default MessagesSubmit;