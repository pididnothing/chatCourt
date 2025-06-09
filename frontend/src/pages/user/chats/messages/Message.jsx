import React from 'react'

function Message(msg) {
    const user = localStorage.getItem('chat-user');
    const uid = JSON.parse(user)._id;
    const time = new Date(msg.msg.updatedAt);
    const courtRoom = msg.courtRoom;
    const getTimeDifference = (date) => {
        const now = new Date();
        const diffInMs = now - date;
        const diffInMinutes = Math.floor(diffInMs / 60000);
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);
        const diffInWeeks = Math.floor(diffInDays / 7);
        const diffInMonths = Math.floor(diffInDays / 30);
        const diffInYears = Math.floor(diffInDays / 365);

        if (diffInMinutes < 60) {
            return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
        } else if (diffInHours < 24) {
            return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
        } else if (diffInDays < 7) {
            return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
        } else if (diffInWeeks < 4) {
            return `${diffInWeeks} week${diffInWeeks !== 1 ? 's' : ''} ago`;
        } else if (diffInMonths < 12) {
            return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
        } else {
            return `${diffInYears} year${diffInYears !== 1 ? 's' : ''} ago`;
        }
    };
    const getRoleClass = () => {
        if (senderIsJudge) {
            return 'bg-yellow-200';
        } else if (senderIsProsecution) {
            return 'bg-red-200';
        } else if (senderIsDefence) {
            return 'bg-blue-200';
        }
        return 'bg-gray-200';
    };
    const isSender = uid === msg.msg.senderId;
    const senderIsProsecution = (courtRoom.prosLawyer && courtRoom.prosLawyer.includes(msg.msg.senderId._id)) ||
        (courtRoom.prosClient && courtRoom.prosClient.includes(msg.msg.senderId._id));
    const senderIsDefence = (courtRoom.defLawyer && courtRoom.defLawyer.includes(msg.msg.senderId._id)) ||
        (courtRoom.defClient && courtRoom.defClient.includes(msg.msg.senderId._id));
    const senderIsJudge = courtRoom.judge && courtRoom.judge.includes(msg.msg.senderId._id);
    const isProsecution = (courtRoom.prosLawyer && courtRoom.prosLawyer.includes(uid)) ||
        (courtRoom.prosClient && courtRoom.prosClient.includes(uid));
    const isDefence = (courtRoom.defLawyer && courtRoom.defLawyer.includes(uid)) ||
        (courtRoom.defClient && courtRoom.defClient.includes(uid));
    const isJudge = courtRoom.judge && courtRoom.judge.includes(uid);

    return (
        <div className={`chat ${senderIsJudge ? 'justify-self-center' : isSender || (isProsecution && senderIsProsecution) || (isDefence && senderIsDefence) || (isJudge && senderIsDefence) ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-header">
                {msg.msg.senderId.username}
                <time className="text-xs opacity-50">{getTimeDifference(time)}</time>
            </div>
            <div className={`chat-bubble ${getRoleClass()} break-words whitespace-pre-line max-w-md`}>
                {msg.msg.content}
            </div>
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