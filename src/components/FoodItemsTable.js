export default function FoodItemsTable({ info, pred }) {
  return (
    <>
      <table className="min-w-full table-auto mt-4">
        <thead>
          <tr className="border-b-2 border-gray-300">
            <th className="px-4 py-2 text-left">Food Item</th>
            <th className="px-4 py-2 text-left">Calories (kcal)</th>
            <th className="px-4 py-2 text-left">Protein (g)</th>
            <th className="px-4 py-2 text-left">Carbohydrates (g)</th>
            <th className="px-4 py-2 text-left">Fat (g)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">{pred}</td>
            <td className="px-4 py-2">{123}</td>
            <td className="px-4 py-2">{89}</td>
            <td className="px-4 py-2">{400}</td>
            <td className="px-4 py-2">{67}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
