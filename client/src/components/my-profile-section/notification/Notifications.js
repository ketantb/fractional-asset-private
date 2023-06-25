import React, { useEffect, useState } from "react";
import "./Notifications.css";
import axios from "../../../helpers/axios";
import PreLoader from "../../../pre-loaders/PreLoader";

const Notifications = () => {
  const [allEnquiryData, setAllEnquiryData] = useState([]);
  const token = localStorage.getItem("token");
  // get all enquiries for specific seller
  const getData = async () => {
    try {
      const response = await axios.get("/get-enquiries", {
        headers: {
          authorization: token,
        },
      });
      console.log(response.data.allEnquiries);
      setAllEnquiryData(response.data.allEnquiries);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (!allEnquiryData) {
    return <PreLoader />;
  }
  return (
    <div className="notification-wrapper">
      <div className="row1">
        <h4>Enquiries</h4>
        <p>({allEnquiryData.length})</p>
      </div>
      <div className="row2">
        <table>
          <thead>
            <tr>
              <th scope="col">Property Type</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {allEnquiryData.map((enquiry, i) => {
              return (
                <tr key={i + 1}>
                  <td data-label="Property Type">
                    {enquiry.propertyType ? (
                      enquiry.propertyType
                    ) : (
                      <p>not provided</p>
                    )}
                  </td>
                  <td data-label="Name">
                    {enquiry.name ? enquiry.name : <p>not provided</p>}
                  </td>
                  <td data-label="Email">
                    {enquiry.email ? enquiry.email : <p>not provided</p>}
                  </td>
                  <td data-label="Contact">
                    {enquiry.contact ? enquiry.contact : <p>not provided</p>}
                  </td>
                  <td data-label="Message">
                    <div
                      style={{
                        overflow: "hidden",
                      }}
                    >
                      {enquiry.message ? (
                        <p>{enquiry.message}</p>
                      ) : (
                        <p>not provided</p>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notifications;
