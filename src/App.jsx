import React from "react";
import StudentForm from "./StudentForm";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Welcome to My Checkbox App
      </h1>

      <StudentForm />
    </div>
  );
};

export default App;