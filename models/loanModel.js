const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    customerName: {
        type: String,
        required: [true, 'A customer name must have a name'],
        unique: true,
        trim: true,
        maxlength: [40, 'A customer name must have less or equal then 40 characters'],
        minlength: [1, 'A customer name must have more or equal then 10 characters']
     
    },
    phoneNumber:{
        type: String
    },
    address: {
        type: String,
        required: [true, 'A from must have a department name'],
        maxlength: [40, 'A from  must have less or equal then 40 characters'],
        minlength: [10, 'A from  must have more or equal then 10 characters']
    },
    loanAmount: {
        type: Number
    },
    interest: {
        type: Number,
        default: 0.03
    },
    loanTermYears: {
        type: Number
    },
    loanType: {
        type: String
    },
    description: {
        type: String,
        required: [true, 'A description must have a intrusctor  name'],
        unique: true,
        trim: true,
        maxlength: [40, 'A description  must have less or equal then 40 characters'],
        minlength: [10, 'A description  must have more or equal then 10 characters']
    },

});
const Loan = mongoose.model('Loans', loanSchema);

module.exports = Loan;