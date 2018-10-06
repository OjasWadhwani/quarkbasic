$(function () {
    
    $("#btn_reg").click((event) => {

        var regData = {};
        regData.nameOfPerson = $("#FullName").val();
        regData.nameOfCollege = $("#CollegeName").val();
        regData.placeOfCollege = $("#CollegePlace").val();
        regData.emailOfPerson = $("#Email").val();
        regData.phoneNoOfPerson = $("#PhoneNumber").val();
        regData.referralCode = $("#ReferralCode").val();;
        regData.eventsRegistered = [];    
        for (let index = 0; index < 24; index++) {
            // console.log($("#evntchk-"+index).is(':checked'));
            if( $("#evntchk-"+index).is(':checked') === true) {
                regData.eventsRegistered.push($("#label-evntchk-"+index).text());
            }            
        }
        console.log(regData);
        const REGISTRATION_PATH = "/main/registrations/";
        var dbRef = firebase.database().ref(REGISTRATION_PATH);
        var newKey = dbRef.push().key;
        dbRef.child(newKey).set(regData).then(function (error) {
            if(error)
               toastr.error(error);
            else{
                toastr.success("Success");
                if (alert('Successfully Registered!')) {}
				else window.location.reload();
            }
        });

    });


});