function getDataAndLogPayload() {

    let citizenship = document.querySelector('select[name="citizenship"]').value;
    let phoneNumberPrefix = document.querySelector('select[name="phonePrefix"]').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let emailAddress = document.getElementById('emailAddress').value;
    let province = document.getElementById('province').value;
    let addressCitizenship = document.querySelector('select[name="addressCitizenship"]').value;

    let payload = {
      citizenship: citizenship,
      phoneNumberPrefix: phoneNumberPrefix,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
      province: province,
      addressCitizenship: addressCitizenship
    };
  

    console.log('Payload:', payload);
  

  }
  




  



  
  