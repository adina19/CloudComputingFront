import axios from 'axios';
import React, {useState, useEffect} from 'react';

/* const messages=[
    {
        entryID: 1,
        senderName: 'John Doe',
        senderMail: 'john@mail.com',
        messageContent: 'Hello, how are you?'
    },
    {
        entryID: 2,
        senderName: 'John Doe',
        senderMail: 'john@mail.com',
        messageContent: 'Hello, how are you?'
    },
    {
        entryID: 3,
        senderName: 'John Doe',
        senderMail: 'john@mail.com',
        messageContent: 'Hello, how are you?'
    }
]; */


function MessagesList(props){

    const [results, setMessages] = useState([]);

    useEffect (()=>{
        const fetchData = async () => {
           // const result=await axios.get('http://localhost:8080/utils/translation');
            const result = await axios.get(`${process.env.REACT_APP_API_URL}/utils/translation`);

            if(result.data.results){
                let messagesArray=result.data.results[result.data.results.length-1];
                //messagesArray.reverse();
                console.log(messagesArray);
                setMessages(messagesArray);
            }

        };
        fetchData();
    }, []);


    return (
        <div id="MessagesList">
             <h2 className='text-2xl font-bold mb-4'>Your text means:</h2>
             <ul>
        {
           // results.length ? 
           // results.map(result => 
                <li key={results.id}>
                    <p>
                        {/* <span className='text-bold'> {result.language} </span> */}
                        <span className='text-gray-600 text-bold'>{ ` ${results.translatedText}` }</span>
                    </p>
                </li>
           // )
          //  :<li>No messages yet</li>
        }
             </ul>
        </div>
    );
}


export default MessagesList;