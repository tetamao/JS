// let soup = "Chicken Noodle Soup";
// let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";
// console.log(response);

let soup = "Chicken Noodle Soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned
  ? "Sorry, no soup for you."
  : soup
  ? `Yes, we have ${soup} today.`
  : "sorry, no soup today.";
console.log(soupAccess);
