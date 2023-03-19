import React from "react";
import "../css/App.css";
import "../css/Output.css";
export default function Helloworld() {
  // return (
  //   <div className="bg-violet-500">
  //     <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
  //       Find Friends
  //     </button>
  //   </div>
  // );

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
}
