function getDataAndLogPayload() {
  var payload = {};

  payload.citizenship = document.getElementById("citizenship").value;
  payload.phonePrefix = document.getElementById("phonePrefix").value;
  payload.phoneNumber = document.getElementById("phoneNumber").value;
  payload.emailAddress = document.getElementById("emailAddress").value;

  payload.addressCitizenship =
    document.getElementById("addressCitizenship").value;

  payload.businessType = document.getElementById("businessType").value;
  payload.companyName = document.getElementById("companyName").value;
  payload.tinNumber = document.getElementById("tinNumber").value;
  payload.registrationDate = document.getElementById("registrationDate").value;
  payload.businessAddress = document.getElementById("businessAddress").value;

  payload.importationPurpose =
    document.getElementById("importationPurpose").value;

  payload.productCategory = document.getElementById("productCategory").value;

  console.log("Form " + " Payload:", payload);
}
