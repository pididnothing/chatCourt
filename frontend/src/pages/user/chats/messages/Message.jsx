import React from 'react'

function Message() {
    return (
        <div className="chat chat-start">
            <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">2 hours ago</time>
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>
            <div className="chat-footer opacity-50">Seen</div>
        </div>
    )
}

//Starter Code
// function Message() {
//     return (
//         <div className="chat chat-start">
//             <div className="chat-header">
//                 Obi-Wan Kenobi
//                 <time className="text-xs opacity-50">2 hours ago</time>
//             </div>
//             <div className="chat-bubble">You were the Chosen One!</div>
//             <div className="chat-footer opacity-50">Seen</div>
//         </div>
//     )
// }

export default Message