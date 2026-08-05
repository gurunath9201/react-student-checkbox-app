import React, { useState } from "react";

const StudentForm = () => {
  const [form, setForm] = useState({
    name: "",
    games: [],
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setForm({
        ...form,
        games: [...form.games, value],
      });
    } else {
      setForm({
        ...form,
        games: form.games.filter((game) => game !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStudents([...students, form]);

    setForm({
      name: "",
      games: [],
    });
  };

  return (
    <div className="max-w-4xl mx-auto">

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
              className="w-full border rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <div className="mb-5">

            <label className="font-semibold block mb-2">
              Select Games
            </label>

            <div className="grid grid-cols-2 gap-3">

              <label>
                <input
                  type="checkbox"
                  value="Cricket"
                  checked={form.games.includes("Cricket")}
                  onChange={handleCheckbox}
                  className="mr-2"
                />
                Cricket
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Football"
                  checked={form.games.includes("Football")}
                  onChange={handleCheckbox}
                  className="mr-2"
                />
                Football
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Hockey"
                  checked={form.games.includes("Hockey")}
                  onChange={handleCheckbox}
                  className="mr-2"
                />
                Hockey
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Tennis"
                  checked={form.games.includes("Tennis")}
                  onChange={handleCheckbox}
                  className="mr-2"
                />
                Tennis
              </label>

            </div>

          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Add Student
          </button>

        </form>

      </div>

      {students.length > 0 && (

        <div className="mt-8 bg-white shadow-lg rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Student List
          </h2>

          <table className="w-full border-collapse border">

            <thead>

              <tr className="bg-blue-600 text-white">

                <th className="border p-3">ID</th>
                <th className="border p-3">Name</th>
                <th className="border p-3">Games</th>

              </tr>

            </thead>

            <tbody>

              {students.map((student, index) => (

                <tr key={index} className="text-center hover:bg-gray-100">

                  <td className="border p-2">
                    {index + 1}
                  </td>

                  <td className="border p-2">
                    {student.name}
                  </td>

                  <td className="border p-2">
                    {student.games.join(", ")}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
};

export default StudentForm;