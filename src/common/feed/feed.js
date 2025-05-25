import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./feed.scss";
import $ from "jquery";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import CheckInDialog from "../../screens/check-in-dialog/check-in-dialog";
const Feed = () => {
  // fot tabs

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [notification, setNotification] = useState([
    {
      dept: "OPD",
      name: "Fox Robbie",
      age: "45",
      location: "USA",
      height: "120",
      weight: "50",
      bloodGroup: "O-",
    },
    {
      dept: "IPD",
      name: "John jessy",
      age: "15",
      location: "London",
      height: "188",
      weight: "50",
      bloodGroup: "A+",
    },
    {
      dept: "IPD",
      name: "Charles Robbie",
      age: "30",
      location: "New York, USA",
      height: "150",
      weight: "90",
      bloodGroup: "O+",
    },
    {
      dept: "OPD",
      name: "Charles Robbie",
      age: "30",
      location: "New York, USA",
      height: "150",
      weight: "90",
      bloodGroup: "O+",
    },
    {
      dept: "OPD",
      name: "John jessy",
      age: "15",
      location: "London",
      height: "188",
      weight: "50",
      bloodGroup: "A+",
    },
  ]);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const renderCard = (dept) => {
    return notification.map(
      (i, index) =>
        dept === i.dept && (
          <div key={index} className="feed-block">
            <div className="feed-thumb">
              <h4 className="title primary-title block m-0">{i.name} </h4>
              <div className="block text-muted caption">
                <span className="caption-muted">{i.age} years old</span>
                <span className="caption-loc">
                  <i className="fa fa-map-marker mr-5" aria-hidden="true"></i>
                  {i.location}
                </span>
              </div>
              <button
                className="btn btn-primary btn-radius btn-sm block-center mt-5"
                onClick={handleClickOpen}
              >
                Check In
              </button>
              <div className="block feed-column">
                <div className="float-start feed-grid">
                  <span className="block">Blood</span>
                  <h4 className="block m-0">{i.bloodGroup}</h4>
                </div>
                <div className="float-start feed-grid">
                  <span className="block">Height</span>
                  <h4 className="block m-0">{i.height}cm</h4>
                </div>
                <div className="float-start feed-grid">
                  <span className="block">Weight</span>
                  <h4 className="block m-0">{i.weight}kg</h4>
                </div>
              </div>
            </div>
          </div>
        )
    );
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  // function a11yProps(index) {
  //   return {
  //     id: `vertical-tab-${index}`,
  //     "aria-controls": `vertical-tabpanel-${index}`,
  //   };
  // }
  const [isOpen, setIsOpen] = useState(false);

  // const ToggFeed = () => {
  //   isOpen === true ? setIsOpen(false) : setIsOpen(true);
  //   $(".wrapper").toggleClass("wrapper-feed-fwh");
  //   $("body").toggleClass("body-fwh");
  // };
  return (
    <>
      <div
        className={`feed-header ${isOpen == true ? "feed-toggle-head" : ""}`}
      >
        <i className="fa fa-bell-o feed-icon" aria-hidden="true"></i>
        <i className="fa fa-cog feed-icon" aria-hidden="true"></i>
        <div className="avatar">
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
        </div>
      </div>
      <div
        className={`block feed-content ${isOpen == true ? "feed-toggle" : ""}`}
      >
        <div className="block mt-10">
          <h4 className="title block">
            <span className="float-start">Upcoming</span>{" "}
            <span className="note-count">6</span>
          </h4>
          <span className="divider"></span>
        </div>
        <div className="block">
          <Tabs
            className="border-bottom"
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="OPD" />
            <Tab label="Ward" />
            <Tab label="OT" />
            <Tab label="Recovery" />
            <Tab label="TeleMedicine" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <section className="feed-body thin-scroll">
              {renderCard("OPD")}
            </section>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <section className="feed-body thin-scroll">
              {renderCard("IPD")}
            </section>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <section className="feed-body thin-scroll">
              {renderCard("OPD")}
            </section>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <section className="feed-body thin-scroll">
              {renderCard("OPD")}
            </section>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <section className="feed-body thin-scroll">
              {renderCard("OPD")}
            </section>
          </TabPanel>
        </div>
        {open && (
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogContent>
              <CheckInDialog setOpen={setOpen} />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </>
  );
};

export default Feed;
