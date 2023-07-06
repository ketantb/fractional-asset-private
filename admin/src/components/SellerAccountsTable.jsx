const SellerAccountsTable = ({ data }) => {
  return (
    <main className="absolute w-full h-full shadow-md font-sans">
      <table className="w-[90%] text-xs text-left text-gray-400 mx-auto">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400 sticky top-0 font-serif">
          <tr>
            <th scope="col" className="pl-16 py-3">
              SR.NO
            </th>
            <th scope="col" className="py-3">
              Name
            </th>
            <th scope="col" className="py-3">
              Email
            </th>
            <th scope="col" className="text-center py-3">
              Contact
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, j) => (
            <tr
              key={i._id}
              className={`font-montserrat border-b border-gray-700 capitalize ${
                j % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
              }`}
            >
              <th
                scope="row"
                className={`text-xs pl-16 font-normal text-gray-400 ${
                  j % 2 === 0 ? "py-3" : "py-2.5"
                }`}
              >
                {j + 1}
              </th>
              <td className={`text-xs ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.name || "---"}
              </td>
              <td className={`text-xs ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.email || "---"}
              </td>
              <td
                className={`text-center text-xs ${
                  j % 2 === 0 ? "py-3" : "py-2.5"
                }`}
              >
                {i.contact || "---"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default SellerAccountsTable;
