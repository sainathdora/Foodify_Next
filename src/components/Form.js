export default function Form() {
  return (
    <>
      <div class="min-h-screen flex items-center justify-center">
        <form class="bg-gray-800 p-8 rounded-lg w-96">
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
    </>
  );
}
