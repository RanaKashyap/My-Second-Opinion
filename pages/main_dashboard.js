var xValues = [
  "Italy",
  "France",
  "Spain",
  "USA",
  "Argentina",
];
var IncomeValues = [700, 820, 1200, 550, 1000, 700, 500, 900, 300];
var ExpenseValues = [340, 900, 240, 370, 520, 360, 570, 820, 240];
var IncomeColor = "#007A64"; // Color for bar 1
var ExpenseColor = "#BDA25C"; // Color for bar 2

new Chart("revenue-chart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        label: 'Income', // Label for the first set of bars
        backgroundColor: IncomeColor,
        data: IncomeValues,
        maxBarThickness: '0.1rem',
      },
      {
        label: 'Expense', // Label for the second set of bars
        backgroundColor: ExpenseColor,
        data: ExpenseValues,
        maxBarThickness: '0.1rem',
      },
    ],
  },
  options: {
    legend: { display: true, position: 'bottom', },
    title: {
      display: false,
      text: "Revenue Summary",
    },
  },
});