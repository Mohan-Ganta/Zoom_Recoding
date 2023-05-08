import { ZoomMtg } from "@zoomus/websdk";

ZoomMtg.init({
  leaveUrl: "/",
  success: (success) => {
    ZoomMtg.join({
      sdkKey: sdkKey,
      signature: 1,
      meetingNumber: meetingNumber,
      passWord: passWord,
      userName: userName,
      zak: zakToken,
      success: (success) => {
        console.log(success);
      },
      error: (error) => {
        console.log(error);
      },
    });
  },
  error: (error) => {
    console.log(error);
  },
});

ZoomMtg.init({
  leaveUrl: "/",
  success: (success) => {
    ZoomMtg.join({
      sdkKey: sdkKey,
      signature: 0, // role in SDK signature needs to be 0
      meetingNumber: meetingNumber,
      passWord: passWord,
      userName: userName,
      success: (success) => {
        console.log(success);
      },
      error: (error) => {
        console.log(error);
      },
    });
  },
  error: (error) => {
    console.log(error);
  },
});
