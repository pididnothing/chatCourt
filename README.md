# 🏛️ chatCourt — A Text-Based Court Simulation Platform

chatCourt is a text-driven simulation platform that replicates court proceedings in a controlled digital environment. Designed for role-play, educational practice, and legal procedure demonstrations, it allows users to assume roles such as Judge, Prosecutor, Defense Attorney, Clients and Jury — all while adhering to realistic courtroom rules and flows.
While many rules of proceedings and methods of enforcing them remain to be integrated into the framework, the current framework can be used well for informal debates to be structured.

---

## 📌 Features

- 🎭 **Role-based Access Control To Chats** (Judge, Jury, Attorneys, Clients)
- - The judge can control who can send messages at anytime during proceedings using Court States:
  - *Open*: Any participant can send messages
  - *Prosecution*: Only Prosecution Attornerys can send messages.
  - *Defense*: Only Defense Attorneys can send messages.
  - *Jury*: Only members of the Jury can send messages.
  - *Judge*: Only the judge can send messages.
  - *Closed*: The Case is considered closed and nobody is allowed to message. State can still be changed by the judge.
- 🗣️ **Real-time Text-based Debates**
- ⚖️ **Courtroom Procedure Simulation**: objections, jury discussion, verdict declaration
- - *Objections*: The in-line command "./objection" can be used to object to a statement of the opposition when they have access to the court. Eg. a defense attorney may object to a statement made by the prosecution attorney while the court is still in the *Prosecution* state. This automatically changes the court's state to *Judge*, providing thej udge with the opportunity to handle the objection.
  - *Verdict*: The in-line command "./verdict" can be used by the judge to pass the verdict. This automatically changes the state of the court to *Closed*.
  - [in-line commands must be typed at the start of a message.]
  - *Jury Secrecy*: Messages sent by members o the jury are only visible to other members of the jury and to the judge.
- 🌐 **Web-based Interface (React / Vite / Node / Express / MongoDB)**

---

## 📦 Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT + Role-based Access Control
- **Real-time Communication**: Socket.io *(if applicable)*
