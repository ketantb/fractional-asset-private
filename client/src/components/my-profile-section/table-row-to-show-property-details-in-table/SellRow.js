import React, { useState } from "react";
import "../listings/Listings.css";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiTwotoneEdit } from "react-icons/ai";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { toast } from "react-hot-toast";
import axios from "../../../helpers/axios";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { AiOutlineWarning } from "react-icons/ai";

const SellRow = ({ data, getData }) => {
  const navigate = useNavigate();
  // handle modal
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleDeleteOpenModal = () => {
    setOpenDeleteModal(true);
  };
  const handleDeleteCloseModal = () => {
    setOpenDeleteModal(false);
  };

  //handle Yes for delete
  const handleYes = async (id) => {
    console.log(id);
    toast.loading("Deleting data...");
    handleDeleteCloseModal();
    try {
      const response = await axios.delete(`/delete/${id}`);
      console.log(response);
      toast.dismiss();
      getData();
      toast.success("Deleted successfully");
    } catch (err) {
      console.log(err);
    }
  };

  //handle edit
  const handleEdit = (id, type) => {
    console.log(id);
    if (type === "apartment") {
      navigate(`/apartment-edit/${id}`);
    } else if (type === "resort") {
      navigate(`/resort-edit/${id}`);
    } else if (type === "car") {
      navigate(`/car-edit/${id}`);
    } else if (type === "villa") {
      navigate(`/villa-edit/${id}`);
    } else if (type === "shop") {
      navigate(`/shop-edit/${id}`);
    }
  };

  return (
    <tr className="sell-row">
      {data.isVerified ? (
        <th data-label="status">
          <TiTick style={{ color: "green" }} />
          <span style={{ color: "green" }}>Verified</span>
        </th>
      ) : (
        <th data-label="status">
          <AiOutlineWarning style={{ color: "#E5A805" }} />
          <span style={{ color: "#E5A805" }}>Under screening...</span>
        </th>
      )}
      <td data-label="Posted-on">{data.postedOn}</td>
      <td data-label="Type">{data.propertyType}</td>
      <td data-label="Total Shares">{data.totalShares}</td>
      <td data-label="Price per Share">{data.perSharePrice}</td>
      {data.availableShares === 0 ? (
        <td style={{ color: "red" }}>ALL SOLD OUT</td>
      ) : (
        <td data-label="Available Shares">{data.availableShares}</td>
      )}
      <td data-label="Action">
        <div>
          <RiDeleteBin6Fill
            className="deleteicon"
            onClick={handleDeleteOpenModal}
          />
        </div>
        <div>
          <AiTwotoneEdit
            className="view-edit-icon"
            onClick={() => handleEdit(data._id, data.propertyType)}
          />
        </div>
      </td>
      <>
        <Modal open={openDeleteModal} onClose={handleDeleteCloseModal} center>
          <div className="deleteModalWrap">
            <h6>Are you sure want to delete this data?</h6>
            <div className="buttons-wrap">
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleYes(data._id);
                }}
              >
                Yes
              </button>
              <button
                className="btn btn-danger"
                onClick={handleDeleteCloseModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </>
    </tr>
  );
};

export default SellRow;
