$(function () {
    
    $("#btn_reg").click((event) => {
        $("#btn_reg").attr("disabled",true);
        var registerUser = firebase.functions().httpsCallable('registerUser');
        var regData = {};
        regData.nameOfPerson = $("#FullName").val();
        regData.nameOfCollege = $("#CollegeName").val();
        regData.placeOfCollege = $("#CollegePlace").val();
        regData.emailOfPerson = $("#Email").val();
        regData.phoneNoOfPerson = $("#PhoneNumber").val();
        regData.referralCode = $("#ReferralCode").val();
        regData.eventsRegistered = [];    
        for (let index = 0; index < 25; index++) {
            if( $("#evntchk-"+index).is(':checked') === true) {
                regData.eventsRegistered.push($("#label-evntchk-"+index).text());
            }            
        }
        if(regData.nameOfPerson==""||regData.nameOfCollege==""
            ||regData.placeOfCollege==""||regData.emailOfPerson==""
            ||regData.phoneNoOfPerson=="") {
                toastr.error("Fill all mandatory fields. Only referral Code is optional");
                return;
            }
        registerUser(regData).then((res) => {
            if(res.data) {
                console.error(err);
                toastr.error("Server error : Check network and try again later.");
            } else {
                on();
                toastr.success("Successfully Registered");
                // setTimeout(() => {
                //     window.location.reload();
                // }, 1000);
            }
        });
    });
});