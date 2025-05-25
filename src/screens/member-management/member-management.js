import React from "react";
import "./member-management.scss";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import AddNewMember from "./add-new-member-dialog/add-new-member-dialog";
import { Link } from "react-router-dom";
import EditMember from "./edit-member-dialog/edit-member-dialog";

const columns = [
  { headerName: "ID", field: "id" },
  { headerName: "Member Name", field: "memberName" },
  { headerName: "Gender", field: "gender" },
  { headerName: "Email ID", field: "EmailID" },
  { headerName: "ContactNo", field: "ContactNo" },
  { headerName: "Height", field: "height" },
  { headerName: "Weight", field: "weight" },
  { headerName: "Blood Group", field: "BloodGroup" },
  { headerName: "Referred By", field: "ReferredBy" },
];

// Data rows
const rows = [
  {
    id: "12014",
    memberName: <span className="block">Ankit J</span>,
    gender: "Male",
    EmailID: "ankit@gmail.com",
    ContactNo: "9881900112",
    height: "160 CM",
    weight: "60 KG",
    BloodGroup: "B+",
    ReferredBy: "xyz",
    action: (
      <div>
        <Link to={{}}>
          <i class="fa fa-pencil action-btn" aria-hidden="true"></i>
        </Link>
      </div>
    ),
  },
  {
    id: "12014",
    memberName: <span className="block">Dinesh</span>,
    gender: "Male",
    EmailID: "dinesh@gmail.com",
    ContactNo: "9881900112",
    height: "155 CM",
    weight: "60 KG",
    BloodGroup: "B+",
    ReferredBy: "Abhi",
    action: (
      <div>
        <Link to={{}}>
          <i class="fa fa-pencil action-btn" aria-hidden="true"></i>
        </Link>
      </div>
    ),
  },
];

const MemberManagement = () => {
  const [openAdd, setOpen] = React.useState(false);
  const AddNewMembers = () => {
    setOpen(true);
  };

  const [openEdit, setOpenEdit] = React.useState(false);
  const EditMembers = () => {
    setOpenEdit(true);
  };
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
  });

  return (
    <>
      <section className="wrapper ">
        {/* <div className="block">
          <div className="col-12 col-sm-7 col-md-6 col-lg-6 float-start dn-lg-6">
            <span>Dashboard Overview</span>
          </div>
        </div> */}
        <div className="member-management">
          <div className="block p-0">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-start">
                <div className="block mb-10 v-venter">
                  <div className="float-start">
                    <h5 className="m-0 fs-16">Add New Member(s)</h5>
                  </div>
                  <div className="float-end">
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => AddNewMembers()}
                    >
                      Add New Member
                    </button>
                  </div>
                </div>
                <div className="card card-dashboard">
                  <div className="block alert alert-info">No Data Found</div>
                  <div className="member-table block">
                    <TableContainer component={Paper}>
                      <Table
                        sx={{ minWidth: 650 }}
                        stickyHeader
                        aria-label="simple table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Member Name</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Email ID</TableCell>
                            <TableCell>Contact No</TableCell>
                            <TableCell>Height</TableCell>
                            <TableCell>Weight</TableCell>
                            <TableCell>Referred By</TableCell>
                            <TableCell>Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell>{row.id}</TableCell>
                              <TableCell>{row.memberName}</TableCell>
                              <TableCell>{row.gender}</TableCell>
                              <TableCell>{row.EmailID}</TableCell>
                              <TableCell>{row.ContactNo}</TableCell>
                              <TableCell>{row.height}</TableCell>
                              <TableCell>{row.weight}</TableCell>
                              <TableCell>{row.ReferredBy}</TableCell>
                              <TableCell>
                                <i
                                  class="fa fa-pencil action-btn"
                                  aria-hidden="true"
                                  onClick={() => EditMembers()}
                                ></i>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {openAdd && (
          <Dialog open={openAdd} TransitionComponent={Transition} keepMounted>
            <DialogContent>
              <AddNewMember setOpen={setOpen} />
            </DialogContent>
          </Dialog>
        )}
        {openEdit && (
          <Dialog open={openEdit} TransitionComponent={Transition} keepMounted>
            <DialogContent>
              <EditMember setOpen={setOpenEdit} />
            </DialogContent>
          </Dialog>
        )}
      </section>
    </>
  );
};

export default MemberManagement;
