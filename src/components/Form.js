import { useState } from "react";
import FoodItemsTable from "./FoodItemsTable";
export default function Form() {
  const [prediction, setPrediction] = useState(false);
  const [macro, setMacro] = useState({
    calories: 0,
    protein: 0,
    fat: 0,
    carbohydrates: 0,
  });

  async function get_pred(e) {
    e.preventDefault();
    const res = await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify({ msg: "hello" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resjson = await res.json();
    setMacro(resjson.macro);
    console.log("This is: ", resjson);
    setPrediction(resjson.prediction);
  }
  return (
    <>
      <div class="min-h-screen flex items-center justify-center">
        <form class="bg-gray-800 rounded-lg w-96" onSubmit={get_pred}>
          <h2 class="text-2xl font-semibold text-center mb-4">Upload Image</h2>
          <div class="mb-4">
            <label for="image-upload" class="block text-sm text-gray-400 mb-2">
              Choose an image
            </label>
            <input
              type="file"
              id="image-upload"
              name="image"
              accept="image/*"
              class="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            class="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Upload
          </button>
        </form>
      </div>
      {prediction && (
        <h1 className="text-center font-bold text-green-500">
          The Model Predicts: {prediction}
        </h1>
      )}
      {prediction && <FoodItemsTable info={macro} pred={prediction} />}
    </>
  );
}
