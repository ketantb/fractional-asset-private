import React, { useState } from "react";
import "../listings/Listings.css";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiTwotoneEdit } from "react-icons/ai";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Link } from "react-router-dom";
import Edit from "../../modal/edit/Edit";
import { toast } from "react-hot-toast";
import axios from "../../../helpers/axios";
import CarEdit from "../../modal/edit/Edit";

const RentRow = ({ data, getData }) => {
  // handle delete modal
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };
  const handleDeleteCloseModal = () => {
    setOpenDeleteModal(false);
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

  // handle edit modal
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };
  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  //edit modal render
  let editModalRender;
  if (data.productType === "car") {
    editModalRender = <CarEdit data={data} />;
  }

  return (
    <tr className="rent-row">
      <td data-label="posted-on">{data.postedOn}</td>
      <td data-label="Type">{data.propertyType}</td>
      <td data-label="Rental Price">{data.rentPrice}</td>
      <td data-label="Action">
        <div>
          <RiDeleteBin6Fill
            className="deleteicon"
            onClick={handleOpenDeleteModal}
          />
        </div>
        <div>
          <AiTwotoneEdit
            className="view-edit-icon"
            onClick={handleOpenEditModal}
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
      <>
        <Modal open={openEditModal} onClose={handleCloseEditModal} center>
          {editModalRender}
        </Modal>
      </>
    </tr>
  );
};

export default RentRow;
