$(function() {
  $("#register-form").submit(event => {
    event.preventDefault();
    $("#register-button").attr("disabled", true);
    var registerWorkshops = firebase
      .functions()
      .httpsCallable("registerWorkshops");
    var regData = {};
    regData.fullName = $("#full-name").val();
    regData.email = $("#email").val();
    regData.college = $("#college").val();
    regData.collegeLocation = $("#college-location").val();
    regData.phoneNumber = $("#phone-number").val();
    regData.referralCode = $("#referral-code").val() || "";
    regData.workshopsRegistered = [];
    for (let i = 1; ; ++i) {
      const checkbox = $(`#workshop-checkbox-${i}`);
      if (checkbox.length === 0) break;
      if (checkbox.is(":checked")) {
        const checkboxLabel = $(`label[for="workshop-checkbox-${i}"]`)
          .text()
          .split("(")[0];
        regData.workshopsRegistered.push(checkboxLabel);
      }
    }
    regData.accomodation = $(`input[name="accomodation"]:checked`).val();
    const date = new Date();
    regData.timeStamp =
      date.toLocaleDateString() + " " + date.toLocaleTimeString();

    registerWorkshops(regData).then(res => {
      if (res.data) {
        console.error(err);
        toastr.error("Server error : Check network and try again later.");
      } else {
        toastr.success("Successfully Registered");
        $("#register-button").removeAttr("disabled");
        $("#register-form")[0].reset();
      }
    });
  });
});
