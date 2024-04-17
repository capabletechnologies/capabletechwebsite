const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const Employees = require('./data/Employees');
const Department = require('./data/Department');
const Hours = require('./data/Hours');
const Allowance = require('./data/Allowance');
const Loans = require('./data/Loans');
const { connect } = require('http2');

async function runSeeders() {
  // Employees
  /* await Promise.all(
    Employees.map(async (employee) =>
      prisma.employee.upsert({
        where: { id: employee.id },
        update: {
            firstName: employee.firstName,
            lastName: employee.lastName,
            title: employee.title,
            idNumber: employee.idNumber,
            mobileNumber: employee.mobileNumber,
            email: employee.email,
            manager: employee.manager,
            startDate: employee.startDate,
            department: {
              connect: { id: employee.departmentId },
            },
            user: {
              connect: { id: employee.userId },
            },
            salary: {
                create: {
                    salary_type: "hourly",
                    salary: 0,
                    hourlyRate: 27,
                    payFrequency: "weekly",
                    startDate: "2022-10-10T00:00:00.000Z",
                    endDate: "2022-10-10T00:00:00.000Z",
                    user: {
                      connect: { id: employee.userId },
                    },
                  }
            },
          },
        create: {
            firstName: employee.firstName,
            lastName: employee.lastName,
            title: employee.title,
            idNumber: employee.idNumber,
            mobileNumber: employee.mobileNumber,
            email: employee.email,
            manager: employee.manager,
            startDate: employee.startDate,
            department: {
              connect: { id: employee.departmentId },
            },
            user: {
              connect: { id: employee.userId },
            },
            salary: {
                create: {
                    salary_type: "hourly",
                    salary: 0,
                    hourlyRate: 27,
                    payFrequency: "weekly",
                    startDate: "2022-10-10T00:00:00.000Z",
                    endDate: "2022-10-10T00:00:00.000Z",
                    user: {
                      connect: { id: employee.userId },
                    },
                  }
            },
          },
      })
    )
  ); */

  // Department
  /* await Promise.all(
    Department.map(async (department) =>
      prisma.department.upsert({
        where: { id: department.id },
        update: {},
        create: department,
      })
    )
  ); */


  // Hours
  /* await Promise.all(
    Hours.map(async (hour) =>
      prisma.hoursLogged.upsert({
        where: { id: hour.id },
        update: {},
        create: hour,
      })
    )
  ); */



  // Allowance
  await Promise.all(
    Allowance.map(async (allowance) =>
      prisma.allowance.upsert({
        where: { id: allowance.id },
        update: {},
        create: {
          allowanceName: allowance.allowanceName,
          description: allowance.description,
          amount: allowance.amount,
          whichMonth: allowance.whichMonth,
          createdAt: allowance.createdAt,
          Employee: allowance.Employee,
          user: allowance.user,
        },
      })
    )
  );

  // Loans
  await Promise.all(
    Loans.map(async (loan) =>
      prisma.loans.upsert({
        where: { id: loan.id },
        update: {},
        create: {
          loanName: loan.loanName,
          description: loan.description,
          amount: loan.amount,
          whichMonth: loan.whichMonth,
          createdAt: loan.createdAt,
          Employee: loan.Employee,
          user: loan.user,
        },
      })
    )
  );


}

runSeeders()
  .catch((e) => {
    console.error(`There was an error while seeding: ${e}`);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Successfully seeded database. Closing connection.');
    await prisma.$disconnect();
  });