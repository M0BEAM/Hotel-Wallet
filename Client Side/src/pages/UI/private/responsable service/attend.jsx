import SideBar from "../../../../components/UI/responsable_service/rsSideBar"

const Attend = () => {
  const data = [
    {
      clientName: "Client Name 1",
      logoSrc: "https://example.com/client-logo1.jpg",
      budget: "$2,500 USD",
      dateTime: "2024-03-31 09:00 AM"
    },

    // Add more objects for additional rows
  ];
  return (
    <SideBar>
      <section className="relative  bg-blueGray-50">
        <div className="w-full mb-12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-pink-900 text-white">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-lg text-white">Card Tables</h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Clients</th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Budget</th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Date and Time</th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map over the data array and generate table rows */}
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex flex-col items-center">
                          <img src={item.logoSrc} alt="Client Logo" className="h-12 w-12 bg-white rounded-full border mb-2" />
                          <span className="font-bold text-white">{item.clientName}</span>
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{item.budget}</td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{item.dateTime}</td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1">Validate</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {data.length === 0 && (
          <footer className="relative pt-8 pb-6 mt-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    nothing
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )}
      </section>
    </SideBar>
  );
}

export default Attend;