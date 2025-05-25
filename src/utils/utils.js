const emailRegX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

export const validateEmail = (data) => {
  return emailRegX.test(data);
};

export const validatePassword = (password) => {
  return passwordRegX.test(password);
};

export const validateNumber = (e) => {
  return (e.target.value = e.target.value.replace(/[^0-9]/g, ""));
};

export const getStatusClass = (status) => {
  switch (status) {
    case "Pending":
      return "status-badge status-warning";
    case "Approved":
      return "status-badge status-primary";
    case "Completed":
      return "status-badge status-success";
    case "Cancelled":
      return "status-badge status-danger";
    case "Consultation":
      return "status-badge status-warning";
    case "Check-Out":
      return "status-badge status-success";
    case "Check-In":
      return "status-badge status-danger";

    default:
      break;
  }
};
