const quizData = [
  {
    question: "Value of 50%?",
    options: ["1/2", "1/4", "1/5", "1/3"],
    answer: "1/2",
  },
  {
    question: "Value of 33.33%?",
    options: ["1/2", "1/3", "1/4", "1/5"],
    answer: "1/3",
  },
  {
    question: "Value of 25%?",
    options: ["1/4", "1/2", "1/5", "1/3"],
    answer: "1/4",
  },
  {
    question: "Value of 20%?",
    options: ["1/5", "1/4", "1/3", "1/2"],
    answer: "1/5",
  },
  {
    question: "Value of 16.66% or 16 2/3%?",
    options: ["1/6", "1/5", "1/4", "1/3"],
    answer: "1/6",
  },
  {
    question: "Value of 14.28%?",
    options: ["1/7", "1/8", "1/6", "1/5"],
    answer: "1/7",
  },
  {
    question: "Value of 12.5%?",
    options: ["1/8", "1/7", "1/5", "1/4"],
    answer: "1/8",
  },
  {
    question: "Value of 11.11% or 11 1/9%?",
    options: ["1/9", "1/8", "1/7", "1/6"],
    answer: "1/9",
  },
  {
    question: "Value of 8.33%?",
    options: ["1/12", "1/11", "1/10", "1/9"],
    answer: "1/12",
  },
  {
    question: "Value of 7.69%?",
    options: ["1/13", "1/12", "1/14", "1/11"],
    answer: "1/13",
  },
  {
    question: "Value of 7.14%?",
    options: ["1/14", "1/13", "1/12", "1/15"],
    answer: "1/14",
  },
  {
    question: "Value of 6.66%?",
    options: ["1/15", "1/14", "1/13", "1/16"],
    answer: "1/15",
  },
  {
    question: "Value of 6.25%?",
    options: ["1/16", "1/18", "1/20", "1/19"],
    answer: "1/16",
  },
  {
    question: "Value of 5.88%?",
    options: ["1/17", "1/18", "1/19", "1/20"],
    answer: "1/17",
  },
  {
    question: "Value of 5.55%?",
    options: ["1/18", "1/19", "1/17", "1/20"],
    answer: "1/18",
  },
  {
    question: "Value of 5.26%?",
    options: ["1/19", "1/18", "1/17", "1/20"],
    answer: "1/19",
  },
  {
    question: "Value of 5%?",
    options: ["1/20", "1/24", "1/25", "1/19"],
    answer: "1/20",
  },
  {
    question: "Value of 4.166%?",
    options: ["1/24", "1/25", "1/30", "1/40"],
    answer: "1/24",
  },
  {
    question: "Value of 4%?",
    options: ["1/25", "1/24", "1/20", "1/30"],
    answer: "1/25",
  },
  {
    question: "Value of 3.33%?",
    options: ["1/30", "1/25", "1/40", "1/50"],
    answer: "1/30",
  },
  {
    question: "Value of 2.5%?",
    options: ["1/40", "1/30", "1/50", "1/24"],
    answer: "1/40",
  },
  {
    question: "Value of 2%?",
    options: ["1/50", "1/40", "1/30", "1/25"],
    answer: "1/50",
  },
  {
    question: "Value of 28.56%?",
    options: ["2/7", "1/4", "3/5", "1/3"],
    answer: "2/7",
  },
  {
    question: "Value of 60%?",
    options: ["3/5", "2/7", "1/2", "3/4"],
    answer: "3/5",
  },
  {
    question: "Value of 75%?",
    options: ["3/4", "1/4", "2/3", "1/2"],
    answer: "3/4",
  },
  {
    question: "Value of 150%?",
    options: ["3/2", "5/4", "2/3", "7/5"],
    answer: "3/2",
  },
  {
    question: "Value of 250%?",
    options: ["5/2", "7/5", "3/2", "8/5"],
    answer: "5/2",
  },
  {
    question: "Value of 350%?",
    options: ["7/2", "3/2", "9/5", "5/4"],
    answer: "7/2",
  },
  {
    question: "Value of 450%?",
    options: ["9/2", "7/5", "3/2", "5/2"],
    answer: "9/2",
  },
  {
    question: "Value of 66.66%?",
    options: ["2/3", "5/4", "7/4", "9/5"],
    answer: "2/3",
  },
  {
    question: "Value of 125%?",
    options: ["5/4", "7/5", "2/3", "3/2"],
    answer: "5/4",
  },
  {
    question: "Value of 175%?",
    options: ["7/4", "5/2", "9/4", "6/5"],
    answer: "7/4",
  },
  {
    question: "Value of 225%?",
    options: ["9/4", "7/5", "6/5", "5/4"],
    answer: "9/4",
  },
  {
    question: "Value of 120%?",
    options: ["6/5", "8/5", "9/5", "5/4"],
    answer: "6/5",
  },
  {
    question: "Value of 140%?",
    options: ["7/5", "8/5", "7/4", "6/5"],
    answer: "7/5",
  },
  {
    question: "Value of 160%?",
    options: ["8/5", "5/4", "7/5", "9/4"],
    answer: "8/5",
  },
  {
    question: "Value of 180%?",
    options: ["9/5", "7/5", "9/4", "5/2"],
    answer: "9/5",
  },
  {
    question: "Value of 220%?",
    options: ["11/5", "5/6", "7/9", "5/8"],
    answer: "11/5",
  },
  {
    question: "Value of 83.33%?",
    options: ["5/6", "5/9", "2/9", "7/8"],
    answer: "5/6",
  },
  {
    question: "Value of 42.84%?",
    options: ["3/7", "4/9", "5/7", "3/8"],
    answer: "3/7",
  },
  {
    question: "Value of 71.42%?",
    options: ["5/7", "7/9", "5/8", "4/9"],
    answer: "5/7",
  },
  {
    question: "Value of 57.13%?",
    options: ["4/7", "3/8", "6/7", "5/9"],
    answer: "4/7",
  },
  {
    question: "Value of 85.72%?",
    options: ["6/7", "7/9", "5/6", "5/8"],
    answer: "6/7",
  },
  {
    question: "Value of 37.5%?",
    options: ["3/8", "2/9", "5/6", "4/7"],
    answer: "3/8",
  },
  {
    question: "Value of 62.5%?",
    options: ["5/8", "3/7", "7/9", "6/7"],
    answer: "5/8",
  },
  {
    question: "Value of 87.5%?",
    options: ["7/8", "5/9", "6/7", "5/6"],
    answer: "7/8",
  },
  {
    question: "Value of 22.22%?",
    options: ["2/9", "5/9", "4/7", "3/7"],
    answer: "2/9",
  },
  {
    question: "Value of 44.44%?",
    options: ["4/9", "7/9", "5/8", "5/6"],
    answer: "4/9",
  },
  {
    question: "Value of 55.55%?",
    options: ["5/9", "7/9", "3/8", "5/8"],
    answer: "5/9",
  },
  {
    question: "Value of 77.77%?",
    options: ["7/9", "5/8", "6/7", "7/8"],
    answer: "7/9",
  },
  {
    question: "Value of 88.88%?",
    options: ["8/9", "7/9", "6/7", "5/9"],
    answer: "8/9",
  },
  {
    question: "Value of 9.09%?",
    options: ["1/11", "2/9", "1/12", "5/9"],
    answer: "1/11",
  },
  {
    question: "Value of 18.18%?",
    options: ["2/11", "1/9", "3/12", "7/12"],
    answer: "2/11",
  },
  {
    question: "Value of 27.27%?",
    options: ["3/11", "4/9", "2/12", "5/8"],
    answer: "3/11",
  },
  {
    question: "Value of 36.36%?",
    options: ["4/11", "7/12", "5/12", "8/11"],
    answer: "4/11",
  },
  {
    question: "Value of 45.45%?",
    options: ["5/11", "3/7", "2/7", "6/9"],
    answer: "5/11",
  },
  {
    question: "Value of 54.54%?",
    options: ["6/11", "5/8", "4/12", "7/12"],
    answer: "6/11",
  },
  {
    question: "Value of 63.63%?",
    options: ["7/11", "5/8", "8/11", "7/9"],
    answer: "7/11",
  },
  {
    question: "Value of 72.72%?",
    options: ["8/11", "6/7", "5/9", "7/8"],
    answer: "8/11",
  },
  {
    question: "Value of 81.81%?",
    options: ["9/11", "7/9", "6/8", "8/9"],
    answer: "9/11",
  },
  {
    question: "Value of 41.66% or 41 2/3%?",
    options: ["5/12", "2/9", "7/12", "4/9"],
    answer: "5/12",
  },
  {
    question: "Value of 58.33% or 58 1/3%?",
    options: ["7/12", "8/12", "6/9", "9/12"],
    answer: "7/12",
  },
  {
    question: "Value of 91.66% or 91 2/3%?",
    options: ["11/12", "10/12", "12/15", "14/15"],
    answer: "11/12",
  },
  {
    question: "Value of 7.69%?",
    options: ["1/13", "1/14", "2/15", "1/12"],
    answer: "1/13",
  },
  {
    question: "Value of 15.38%?",
    options: ["2/13", "1/12", "1/15", "3/14"],
    answer: "2/13",
  },
  {
    question: "Value of 7.14% or 7 1/7%?",
    options: ["1/14", "1/13", "2/15", "3/14"],
    answer: "1/14",
  },
  {
    question: "Value of 21.42%?",
    options: ["3/14", "2/13", "1/12", "5/15"],
    answer: "3/14",
  },
  {
    question: "Value of 35.71%?",
    options: ["5/17", "1/15", "4/15", "3/14"],
    answer: "5/17",
  },
  {
    question: "Value of 6.66%?",
    options: ["1/15", "1/16", "1/14", "1/13"],
    answer: "1/15",
  },
  {
    question: "Value of 13.33%?",
    options: ["2/15", "2/13", "1/14", "1/13"],
    answer: "2/15",
  },
  {
    question: "Value of 26.66%?",
    options: ["4/15", "1/16", "2/13", "3/14"],
    answer: "4/15",
  },
  {
    question: "Value of 46.66%?",
    options: ["7/15", "5/17", "6/17", "4/16"],
    answer: "7/15",
  },
  {
    question: "Value of 53.33%?",
    options: ["8/15", "7/15", "5/12", "6/17"],
    answer: "8/15",
  },
  {
    question: "Value of 93.33%?",
    options: ["14/15", "12/15", "11/12", "15/16"],
    answer: "14/15",
  },
  {
    question: "Value of 6.25%?",
    options: ["1/16", "2/15", "1/14", "1/12"],
    answer: "1/16",
  },
  {
    question: "Value of 18.75%?",
    options: ["3/16", "5/16", "1/8", "7/20"],
    answer: "3/16",
  },
  {
    question: "Value of 31.25%?",
    options: ["5/16", "1/4", "3/8", "7/20"],
    answer: "5/16",
  },
  {
    question: "Value of 43.75%?",
    options: ["7/16", "5/8", "3/8", "9/20"],
    answer: "7/16",
  },
  {
    question: "Value of 56.25%?",
    options: ["9/16", "5/8", "7/8", "11/20"],
    answer: "9/16",
  },
  {
    question: "Value of 93.75%?",
    options: ["15/16", "19/20", "17/20", "9/16"],
    answer: "15/16",
  },
  {
    question: "Value of 15%?",
    options: ["3/20", "1/10", "5/30", "2/15"],
    answer: "3/20",
  },
  {
    question: "Value of 35%?",
    options: ["7/20", "2/5", "1/3", "3/8"],
    answer: "7/20",
  },
  {
    question: "Value of 45%?",
    options: ["9/20", "7/16", "5/8", "3/7"],
    answer: "9/20",
  },
  {
    question: "Value of 55%?",
    options: ["11/20", "7/15", "3/5", "8/15"],
    answer: "11/20",
  },
  {
    question: "Value of 65%?",
    options: ["13/20", "3/5", "9/16", "7/10"],
    answer: "13/20",
  },
  {
    question: "Value of 85%?",
    options: ["17/20", "19/20", "15/16", "5/6"],
    answer: "17/20",
  },
  {
    question: "Value of 95%?",
    options: ["19/20", "17/20", "9/10", "15/16"],
    answer: "19/20",
  },
  {
    question: "Value of 105%?",
    options: ["21/20", "5/4", "3/2", "7/5"],
    answer: "21/20",
  },
  {
    question: "Value of 8%?",
    options: ["2/25", "1/10", "3/40", "1/12"],
    answer: "2/25",
  },
  {
    question: "Value of 12%?",
    options: ["3/25", "1/8", "5/40", "1/6"],
    answer: "3/25",
  },
  {
    question: "Value of 16%?",
    options: ["4/25", "3/25", "1/5", "5/30"],
    answer: "4/25",
  },
  {
    question: "Value of 24%?",
    options: ["6/25", "7/25", "2/10", "3/12"],
    answer: "6/25",
  },
  {
    question: "Value of 28%?",
    options: ["7/25", "6/25", "1/4", "2/7"],
    answer: "7/25",
  },
  {
    question: "Value of 32%?",
    options: ["8/25", "4/10", "2/5", "3/10"],
    answer: "8/25",
  },
  {
    question: "Value of 36%?",
    options: ["9/25", "1/3", "6/20", "3/10"],
    answer: "9/25",
  },
  {
    question: "Value of 44%?",
    options: ["11/25", "7/20", "1/2", "3/7"],
    answer: "11/25",
  },
  {
    question: "Value of 48%?",
    options: ["12/25", "6/10", "2/5", "7/15"],
    answer: "12/25",
  },
  {
    question: "Value of 52%?",
    options: ["13/25", "2/5", "3/6", "11/20"],
    answer: "13/25",
  },
  {
    question: "Value of 56%?",
    options: ["14/25", "7/12", "8/15", "9/20"],
    answer: "14/25",
  },
  {
    question: "Value of 64%?",
    options: ["16/25", "4/7", "2/3", "8/12"],
    answer: "16/25",
  },
  {
    question: "Value of 68%?",
    options: ["17/25", "3/5", "9/15", "2/3"],
    answer: "17/25",
  },
  {
    question: "Value of 72%?",
    options: ["18/25", "7/10", "3/4", "16/25"],
    answer: "18/25",
  },
  {
    question: "Value of 76%?",
    options: ["19/25", "4/5", "15/20", "3/4"],
    answer: "19/25",
  },
  {
    question: "Value of 88%?",
    options: ["22/25", "11/20", "4/5", "5/6"],
    answer: "22/25",
  },
  {
    question: "Value of 84%?",
    options: ["21/25", "7/8", "5/6", "4/5"],
    answer: "21/25",
  },
  {
    question: "Value of 7.5%?",
    options: ["3/40", "1/10", "3/25", "1/20"],
    answer: "3/40",
  },
  {
    question: "Value of 17.5%?",
    options: ["7/40", "3/20", "1/6", "1/4"],
    answer: "7/40",
  },
  {
    question: "Value of 22.5%?",
    options: ["9/40", "5/20", "1/4", "2/5"],
    answer: "9/40",
  },
  {
    question: "Value of 27.5%?",
    options: ["11/40", "7/25", "3/10", "1/3"],
    answer: "11/40",
  },
  {
    question: "Value of 32.5%?",
    options: ["13/40", "2/5", "1/3", "3/10"],
    answer: "13/40",
  },
  {
    question: "Value of 42.5%?",
    options: ["17/40", "2/5", "7/20", "3/7"],
    answer: "17/40",
  },
  {
    question: "Value of 47.5%?",
    options: ["19/40", "7/20", "1/2", "3/5"],
    answer: "19/40",
  },
  {
    question: "Value of 52.5%?",
    options: ["21/40", "3/5", "7/12", "2/3"],
    answer: "21/40",
  },
  {
    question: "Value of 57.5%?",
    options: ["23/40", "3/5", "9/16", "5/8"],
    answer: "23/40",
  },
];
