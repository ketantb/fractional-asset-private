import { PiClockCountdownFill } from "react-icons/pi";

const SiteVisitTable = ({ data }) => {
  return (
    <main className="absolute w-full h-full shadow-md font-sans">
      <table className="w-[100%] text-xs text-left text-gray-400 mx-auto">
        <thead className="text-sm uppercase bg-gray-700 text-gray-400 sticky top-0 font-serif">
          <tr>
            <th scope="col" className="w-[12.5%] pl-9 py-3">
              Visit Status
            </th>
            <th scope="col" className="w-[12.5%] pl-9 py-3">
              Visit Date
            </th>
            <th scope="col" className="w-[12.5%] pl-9 py-3">
              Visit Time
            </th>
            <th scope="col" className="w-[12.5%] pl-9 py-3">
              Visitor Name
            </th>
            <th scope="col" className="w-[12.5%] pl-9 py-3">
              Visitor Phn No
            </th>
            <th scope="col" className="w-[12.5%] pl-9 py-3">
              Property Type
            </th>
            <th scope="col" className="w-[12.5%] py-3">
              Seller Name
            </th>
            <th scope="col" className="w-[12.5%] py-3">
              Seller Phn no
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, j) => (
            <tr
              key={i._id}
              className={`border-b border-gray-700 capitalize ${
                j % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
              }`}
            >
              <th
                scope="row"
                className={`text-sm pl-9 font-normal text-gray-400 ${
                  j % 2 === 0 ? "py-3" : "py-2.5"
                }`}
              >
                {i.siteVisitStatus === "pending" ? (
                  <p>
                    <span>Pending...</span>
                    <PiClockCountdownFill />
                    <span></span>
                  </p>
                ) : null}
                {i.siteVisitStatus || "---"}
              </th>
              <td className={`text-sm ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.date || "---"}
              </td>
              <td className={`text-sm ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.time || "---"}
              </td>
              <td className={`text-sm ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.name || "---"}
              </td>
              <td className={`text-sm ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.contact || "---"}
              </td>
              <td className={`text-sm ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.propertyType || "---"}
              </td>
              <td className={`text-sm ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.sellerName || "---"}
              </td>
              <td className={`text-sm ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.sellercontact || "---"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default SiteVisitTable;
