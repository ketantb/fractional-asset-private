import React, { useState } from "react";
import "../listings/Listings.css";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiTwotoneEdit } from "react-icons/ai";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "../../../helpers/axios";

const SellRow = ({ data, getData }) => {
  // handle modal
  const [open, setOpen] = useState(false);
  const handleDeleteOpenModal = () => {
    console.log(open);
    setOpen(true);
  };
  const handleDeleteCloseModal = () => {
    setOpen(false);
  };

  //handle Yes
  const handleYes = async (id) => {
    console.log(id);
    toast.loading("Deleting data...");
    handleDeleteCloseModal();
    try {
      const response = await axios.delete(`/delete/${id}`);
      console.log(response);
      toast.dismiss();
      toast.success("Deleted successfully");
      getData();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <tr className="sell-row">
      <td data-label="Posted-on">{data.postedOn}</td>
      <td data-label="Type">{data.productType}</td>
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
          <AiTwotoneEdit className="view-edit-icon" />
        </div>
      </td>

      <>
        <Modal open={open} onClose={handleDeleteCloseModal} center>
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
