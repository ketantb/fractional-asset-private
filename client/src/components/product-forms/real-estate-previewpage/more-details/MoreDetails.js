import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

import "./MoreDetails.css";

const MoreDetails = ({ propertyData, additionalRooms, approvals }) => {
    const [viewAllDetails, setViewAllDetails] = useState(false);

    return (
        <section className="more-details">
            <h1>More Details</h1>
            <div className="info">
                <div>
                    <p>Name</p>
                    <p>{propertyData.apartmentName || "---"}</p>
                </div>
                <div>
                    <p>Super Area</p>
                    <p>{propertyData.carpetArea || "---"}</p>
                </div>
                <div>
                    <p>Carpet Area</p>
                    <p>{propertyData.carpetArea || "---"}</p>
                </div>
                <div>
                    <p>Furnishing</p>
                    <p>{propertyData.furnishing || "---"}</p>
                </div>
            </div>
            {viewAllDetails && (
                <p
                    onClick={() => setViewAllDetails(!viewAllDetails)}
                    className="view-button"
                >
                    <span>Hide Details</span>
                    <span>
                        <MdKeyboardArrowUp style={{ fontSize: "larger" }} />
                    </span>
                </p>
            )}
            {!viewAllDetails && (
                <p
                    onClick={() => setViewAllDetails(!viewAllDetails)}
                    className="view-button"
                >
                    <span>View All Details</span>
                    <span>
                        <MdKeyboardArrowDown style={{ fontSize: "larger" }} />
                    </span>
                </p>
            )}
            {viewAllDetails && (
                <div className="info">
                    <div>
                        <p>Bedrooms</p>
                        <p>{propertyData.bedroom || "---"}</p>
                    </div>
                    <div>
                        <p>Bathrooms</p>
                        <p>{propertyData.bathroom || "---"}</p>
                    </div>
                    <div>
                        <p>Total Floors</p>
                        <p>{propertyData.totalFloors || "---"}</p>
                    </div>
                    <div>
                        <p>Total Floors</p>
                        <p>{propertyData.totalFloors || "---"}</p>
                    </div>
                    <div>
                        <p>House Floor</p>
                        <p>{propertyData.floorNo || "---"}</p>
                    </div>
                    <div>
                        <p>Facing</p>
                        <p>{propertyData.facing || "---"}</p>
                    </div>
                    <div>
                        <p>Overlooking</p>
                        <p>{propertyData.overlooking || "---"}</p>
                    </div>
                    <div>
                        <p>Flooring Type</p>
                        <p>{propertyData.flooringType || "---"}</p>
                    </div>
                    <div>
                        <p>Total Balconies</p>
                        <p>{propertyData.totalBalconies || "---"}</p>
                    </div>
                    <div>
                        <p>Total Lifts</p>
                        <p>{propertyData.totalLifts || "---"}</p>
                    </div>
                    <div>
                        <p>Water Availability</p>
                        <p>{propertyData.waterAvailability || "---"}</p>
                    </div>
                    {
                        additionalRooms.length > 0 ?
                            <div>
                                <p>Additional Rooms</p>
                                <ul className="array-ul">
                                    {additionalRooms.map((el) => {
                                        return (
                                            <li>{el}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            : null
                    }
                    <div>
                        <p>Possession Status</p>
                        <p>{propertyData.possessionStatus || "---"}</p>
                    </div>
                    <div>
                        <p>Ownership Type </p>
                        <p>{propertyData.typeOfOwnership || "---"}</p>
                    </div>
                    {
                        approvals.length > 0 ?
                            <div>
                                <p>Approvals</p>
                                <ul className="array-ul">
                                    {approvals.map((el) => {
                                        return (
                                            <li>{el}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            : null
                    }
                </div>
            )}
            <p className="description">
                <span>Description:</span> This Designer Builder floor apartment is
                beautifully designed and comes with high end and rich specifications.
            </p>
            {/* <button className="contact-button">Contact Agent</button> */}
        </section>
    );
};

export default MoreDetails;