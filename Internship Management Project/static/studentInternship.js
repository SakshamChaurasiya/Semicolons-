// Example internship data
const internship = {
    companyName: "Tech Solutions Inc.",
    companyAddress: "123 Innovation Street, Suite 400",
    externalMentor: "Mr. John Doe",
    city: "San Francisco",
    startDate: "2024-01-15",
    endDate: "2024-06-15",
    stipend: "$2000 per month"
  };
  
  // Populate the internship info dynamically
  document.getElementById("companyName").textContent = internship.companyName;
  document.getElementById("companyAddress").textContent = internship.companyAddress;
  document.getElementById("externalMentor").textContent = internship.externalMentor;
  document.getElementById("city").textContent = internship.city;
  document.getElementById("startDate").textContent = internship.startDate;
  document.getElementById("endDate").textContent = internship.endDate;
  document.getElementById("stipend").textContent = internship.stipend;
  