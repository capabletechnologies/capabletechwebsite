const { connect } = require("http2");

module.exports = [
    {
      id: 1,
      loanName: "Loan march",
      description: "Extra money needed for baby birth",
      amount: 200,
      whichMonth: "2024-01-10T00:00:00.000Z",
      createdAt: "2024-01-10T00:00:00.000Z",
      Employee: {
        connect: { id: 14 }
      },
      user: {
        connect: { id: 1 }
      },
    },
    {
      id: 2,
      loanName: "Loan march",
      description: "Extra money needed for baby birth",
      amount: 200,
      whichMonth: "2024-02-10T00:00:00.000Z",
      createdAt: "2024-02-10T00:00:00.000Z",
      Employee: {
        connect: { id: 15 }
      },
      user: {
        connect: { id: 1 }
      },
    }
]