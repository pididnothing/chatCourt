# 🏛️ chatCourt — A Text-Based Court Simulation Platform
![image](https://github.com/user-attachments/assets/fe56c39f-b1bd-4dbb-8d04-a728e354f52c)

chatCourt is a text-driven simulation platform that replicates court proceedings in a controlled digital environment. Designed for role-play, educational practice, and legal procedure demonstrations, it allows users to assume roles such as Judge, Prosecutor, Defense Attorney, Clients and Jury — all while adhering to realistic courtroom rules and flows.
While many rules of proceedings and methods of enforcing them remain to be integrated into the framework, the current framework can be used well for informal debates to be structured.

---

## 📌 Features
### 🗣️ **Real-time Text-based Debates**

### 🎭**Roles and Colour Coding**
- Messages sent by users of different roles are coloured differently.  
    ![image](https://github.com/user-attachments/assets/3cdbc956-5ce4-4b5b-8985-01fd3dbd49fc)
  - Judges - Yellow
  - Defence - Blue
  - Prosecution - Red
  - Jury - Green

### 🔒 **Role-based Access Control To Chats**  
    
- The judge can control who can send messages at anytime during proceedings using Court States:
  
  ![image](https://github.com/user-attachments/assets/9b91e1bf-4e64-41c4-b180-d2c1dfd204ef)
  - *Open*: Any participant can send messages
  - *Prosecution*: Only Prosecution Attornerys can send messages.
  - *Defense*: Only Defense Attorneys can send messages.
  - *Jury*: Only members of the Jury can send messages.
  - *Judge*: Only the judge can send messages.
  - *Closed*: The Case is considered closed and nobody is allowed to message. State can still be changed by the judge.

### ⚖️ **Courtroom Procedure Simulation**: objections, jury discussion, verdict declaration  
  - *Objections*: The in-line command "./objection" can be used to object to a statement of the opposition when they have access to the court. Eg. a defense attorney may object to a statement made by the prosecution attorney while the court is still in the *Prosecution* state. This automatically changes the court's state to *Judge*, providing thej udge with the opportunity to handle the objection.  
    ![image](https://github.com/user-attachments/assets/2e3123a7-7bdc-4c51-a93b-68467c7baca9)

  - *Verdict*: The in-line command "./verdict" can be used by the judge to pass the verdict. This automatically changes the state of the court to *Closed*.  
    ![image](https://github.com/user-attachments/assets/dd70a015-96b0-49f1-8b78-dadf8debabe0)  
    [in-line commands must be typed at the start of a message.]
  - *Jury Secrecy*: Messages sent by members of the jury are only visible to other members of the jury and to the judge.  
    ![image](https://github.com/user-attachments/assets/223b4313-3f56-459a-ad59-180e13c4be96)
     *View for Jury and Judge users*  
    
    ![image](https://github.com/user-attachments/assets/2a920084-1203-4114-a227-09605c2e3ecf)
     *View for Other Users*
### 🔍Search and Filter
  - Search for Courts and filter out *Closed* Courts

### 🌐 **Web-based Interface (React / Vite / Node / Express / MongoDB)**

---

## 📦 Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT + Role-based Access Control
- **Real-time Communication**: Socket.io
