import React, { useState } from "react";

const StudentForm = () => {

  const initialFields = {
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
    City: "",
    State: "",
    Country: "",
    ZipCode: "",
  };

  const [form, setForm] = useState({
    name: "",
    games: [],
    fields: initialFields,
  });


  const fields = [
    "Name",
    "Email",
    "Phone",
    "Address",
    "City",
    "State",
    "Country",
    "ZipCode",
  ];


  const games = [
    "Cricket",
    "Football",
    "Hockey",
    "Tennis",
    "Chess",
    "Basketball",
    "Volleyball",
    "Badminton",
    "Ludo",
    "Carrom",
  ];


  const [students, setStudents] = useState([]);


  const handleChange = (e) => {

    const { name, value } = e.target;


    if(name === "name") {

      setForm({
        ...form,
        name:value
      });

    } else {

      setForm({
        ...form,
        fields:{
          ...form.fields,
          [name]:value
        }
      });

    }

  };


  const handleCheckbox = (e) => {

    const {value, checked} = e.target;


    if(checked){

      setForm({
        ...form,
        games:[
          ...form.games,
          value
        ]
      });

    }else{

      setForm({
        ...form,
        games:form.games.filter((game)=>game!==value)
      });

    }

  };


  const handleSubmit = (e)=>{

    e.preventDefault();


    setStudents([
      ...students,
      form
    ]);


    setForm({
      name:"",
      games:[],
      fields:initialFields
    });

  };


  return (

    <div className="max-w-5xl mx-auto">


      <div className="bg-white shadow-lg rounded-xl p-6">


        <h2 className="text-2xl font-bold text-center mb-6">
          Student Form
        </h2>



        <form onSubmit={handleSubmit}>


          <div className="mb-5">

            <label className="font-semibold">
              Student Name
            </label>


            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2 mt-2"
            />

          </div>




          <div className="grid grid-cols-2 gap-4">


          {
            fields.map((f)=>(

              <div key={f}>

                <label className="font-semibold">
                  {f}
                </label>


                <input
                  type="text"
                  name={f}
                  value={form.fields[f]}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 mt-1"
                />

              </div>

            ))
          }


          </div>




          <div className="mt-5">


            <label className="font-semibold block mb-2">
              Select Games
            </label>



            <div className="grid grid-cols-2 gap-3">


            {
              games.map((g)=>(

                <div key={g}>


                  <input
                    type="checkbox"
                    value={g}
                    checked={form.games.includes(g)}
                    onChange={handleCheckbox}
                  />


                  <label className="ml-2">
                    {g}
                  </label>


                </div>

              ))
            }


            </div>


          </div>



          <button
            type="submit"
            className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Add Student
          </button>



        </form>


      </div>





      {
        students.length > 0 &&


        <div className="mt-8 bg-white shadow-lg rounded-xl p-6">


          <h2 className="text-2xl font-bold mb-4">
            Student List
          </h2>



          <table className="w-full border">


          <thead>

            <tr className="bg-blue-600 text-white">

              <th className="border p-2">
                ID
              </th>

              <th className="border p-2">
                Name
              </th>

              <th className="border p-2">
                Email
              </th>

              <th className="border p-2">
                Games
              </th>

            </tr>

          </thead>



          <tbody>


          {
            students.map((student,index)=>(


              <tr key={index} className="text-center">


                <td className="border p-2">
                  {index+1}
                </td>


                <td className="border p-2">
                  {student.name}
                </td>


                <td className="border p-2">
                  {student.fields.Email}
                </td>


                <td className="border p-2">
                  {student.games.join(", ")}
                </td>


              </tr>


            ))
          }


          </tbody>


          </table>


        </div>

      }
    </div>

  );
};


export default StudentForm;