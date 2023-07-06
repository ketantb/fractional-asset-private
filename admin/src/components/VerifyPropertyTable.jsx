import { Link } from "react-router-dom";

const Table = ({ data }) => {
  return (
    <main className="absolute w-full h-full shadow-md font-sans">
      <table className="w-[90%] text-xs text-left text-gray-400 mx-auto">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400 sticky top-0 font-serif">
          <tr>
            <th scope="col" className="pl-9 py-3">
              Unique Id
            </th>
            <th scope="col" className="py-3">
              Posted On
            </th>
            <th scope="col" className="py-3">
              Seller Type
            </th>
            <th scope="col" className="py-3">
              Seller Name
            </th>
            <th scope="col" className="py-3 ">
              Property Type
            </th>
            <th scope="col" className=" py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, j) => (
            <tr
              key={i._id}
              className={`border-b border-gray-700 capitalize font-montserrat ${
                j % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
              }`}
            >
              <th
                scope="row"
                className={`text-xs pl-9 font-normal text-gray-400 ${
                  j % 2 === 0 ? "py-3" : "py-2.5"
                }`}
              >
                {i.uniqueId || "---"}
              </th>
              <td className={`text-xs ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.postedOn || "---"}
              </td>
              <td className={`text-xs ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.sellerType || "---"}
              </td>
              <td className={`text-xs ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.sellerName || "---"}
              </td>
              <td className={`text-xs ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.propertyType || "---"}
              </td>
              <td className={`text-center ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                <Link
                  to={`/home/view/${i._id}`}
                  className="font-medium text-blue-500 hover:underline"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Table;
