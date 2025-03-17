// Global variable for customerName
var customerName = 'bob';

// Function to upper case the customer name
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Fix the setBestCustomer function to correctly set the global bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Implicitly creates a global bestCustomer variable
}

// Function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Overwrites the global bestCustomer variable
}

// Constant in global scope for leastFavoriteCustomer
const leastFavoriteCustomer = 'John Doe';

// Function that tries to change the constant (will throw an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Jane Doe'; // This will throw an error since leastFavoriteCustomer is a constant
}
