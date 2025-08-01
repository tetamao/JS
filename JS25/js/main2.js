// workflow function

const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  // console.log(jsonUserData);
  //   return jsonUserData;
  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });

  //   console.log(userEmailArray);
  postToWebPage(userEmailArray);
};

const postToWebPage = (data) => {
  console.log(data);
};

getAllUserEmails();
