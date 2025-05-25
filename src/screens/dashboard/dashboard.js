import React from "react";
import "./dashboard.scss";
import round1 from "../../assets/images/round1.png";
import round2 from "../../assets/images/round2.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const gymCard = [
  {
    title: "Today's Members",
    value: "15",
    img: round1,
    id: 1,
  },
  {
    title: "Monthly Members",
    value: "140",
    img: round2,
    id: 2,
  },
  {
    title: "Payment Received",
    value: "50",
    img: round1,
    id: 3,
  },
  {
    title: "Active Trainer(s)",
    value: "4",
    img: round1,
    id: 4,
  },
];

function createData(id, name, inTime, outTime, trainerName, dueDate) {
  return { id, name, inTime, outTime, trainerName, dueDate };
}

const rows = [
  createData("12014", "Ankit J", "8.00", "9.00", "Butlor wills", "08-04-2025"),
  createData("13020", "Abhilash", "8.00", "9.00", "Sanju", "08-04-2025"),
  createData("15214", "Dinesh", "8.00", "9.00", "wills", "12-04-2025"),
  createData("10025", "Mayur", "8.00", "9.00", "Amit", "10-02-2025"),
  createData("2205", "Rohit", "8.00", "9.00", "John wills", "05-04-2025"),
];

const Dashboard = () => {
  const gymAppointmentCount = () => {
    return gymCard.map((i, index) => (
      <div
        key={index}
        className="col-12 col-sm-6 col-md-3 md-3 col-lg-3 dn-col-50 float-start space-lg-bottom"
      >
        <div className="card card-dashboard">
          <div className="circle">
            <img src={i.img} />
          </div>
          <div className="block">
            <h4 className="fw-600">
              {i.value}
              <span className="counts">{i.temp}</span>
            </h4>
            <span>{i.title}</span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <section className="wrapper">
        <div className="block">
          <div className="col-12 col-sm-7 col-md-6 col-lg-6 float-start dn-lg-6">
            <span>Dashboard Overview</span>
          </div>
        </div>
        <div className="dashboard-view">
          <div className="block p-0">
            <div className="row"> {gymAppointmentCount()}</div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-start">
                <div className="block mb-5">
                  <div className="float-start">
                    <span className="fw-600">Today's</span>
                    <span className="fw-600">March</span>
                    <span> active member(s):</span>
                    <span className="fw-600 ml-5">15</span>
                  </div>
                  <div className="float-end">
                    <input type="date" className="form-control"></input>
                  </div>
                </div>
                <div className="card card-dashboard">
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>ID</TableCell>
                          <TableCell>Member Name</TableCell>
                          <TableCell>In Time</TableCell>
                          <TableCell>Out Time</TableCell>
                          <TableCell>Trainer Name</TableCell>
                          <TableCell>Due Date</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.inTime}</TableCell>
                            <TableCell>{row.outTime}</TableCell>
                            <TableCell>{row.trainerName}</TableCell>
                            <TableCell>{row.dueDate}</TableCell>
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
      </section>
    </>
  );
};

export default Dashboard;
