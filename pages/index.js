export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 p-6">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-center mb-6">
          <img src="/logo.png" alt="CheapLeaps Logo" className="h-14 mr-2" />
          <h1 className="text-3xl font-bold text-blue-900">CheapLeaps</h1>
        </div>

        <div className="flex justify-around mb-4 text-blue-900 font-medium">
          <button className="border-b-2 border-blue-900 pb-1">Round Trip</button>
          <button className="pb-1">One Way</button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium">Depart From</label>
            <input type="text" placeholder="London, GB" className="w-full border border-gray-300 rounded p-2 mt-1" />
          </div>
          <div>
            <label className="text-sm font-medium">Your Destination</label>
            <input type="text" placeholder="Narita International (NRT)" className="w-full border border-gray-300 rounded p-2 mt-1" />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="text-sm font-medium">Depart Date</label>
              <input type="date" className="w-full border border-gray-300 rounded p-2 mt-1" />
            </div>
            <div className="w-1/2">
              <label className="text-sm font-medium">Return Date</label>
              <input type="date" className="w-full border border-gray-300 rounded p-2 mt-1" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">1 Traveler</label>
            <select className="w-full border border-gray-300 rounded p-2 mt-1">
              <option>1 Traveler</option>
              <option>2 Travelers</option>
              <option>3 Travelers</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white rounded p-3 font-semibold mt-2 hover:bg-green-600">
            Find Flights
          </button>
        </form>
      </div>
    </div>
  );
}
