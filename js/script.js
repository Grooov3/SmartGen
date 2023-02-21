window.jsPDF = window.jspdf.jsPDF;
window.html2canvas = html2canvas;

var priceArr = ["30,85", "37,20", "38,50", "42,00", "32,75", "35,00"];
var dateArr = [];
var allNFs = [
  "nf0",
  "nf1",
  "nf2",
  "nf3",
  "nf4",
  "nf5",
  "nf6",
  "nf7",
  "nf8",
  "nf9",
];

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function randomPrice() {
  return priceArr[Math.floor(Math.random() * priceArr.length)];
}
function randomTime() {
  const date = new Date();
  let horaInicial = new Date(new Date(date.setDate(date.getDate()))).setHours(
    11,
    50,
    00
  );
  let horaFinal = new Date(new Date(date.setDate(date.getDate()))).setHours(
    12,
    59,
    59
  );
  let timestamp = Math.floor(
    Math.random() * (horaFinal - horaInicial + 1) + horaInicial
  );
  return new Date(timestamp);
}

$(function () {
  $('input[name="daterange"]').daterangepicker(
    {
      minYear: 2022,
      locale: {
        format: "DD/MM/YYYY",
      },
      startDate: Date.now(),
      endDate: Date.now(),
      opens: "right",
    },
    function (start, end, label) {
      var dateArray = new Array();
      var currentDate = new Date(start);

      let diff = end.diff(start, "days");

      if (diff > 9)
        return alert("\nInsira um intervalo de, no máximo, 10 dias");

      while (currentDate <= end) {
        dateArray.push(currentDate);
        currentDate = addDays(currentDate, 1);
      }
      dateArr = dateArray;
      target();
    }
  );
});

function target() {
  allNFs.forEach((nf) => {
    document.querySelector("#" + nf).style.display = "none";
  });
  for (let i = 0; i < dateArr.length; i++) {
    let valorNF = document.querySelectorAll(".valorNF" + i);
    let novoValorNF = randomPrice();
    valorNF.forEach((element) => {
      element.textContent = novoValorNF;
    });

    let dataNF = document.querySelector(".data" + i);
    dataNF.textContent = moment(dateArr[i]).format("DD/MM/YYYY");

    let horaNF = document.querySelector(".hora" + i);
    horaNF.textContent = randomTime().toLocaleTimeString("pt-BR");

    let NF = document.querySelector("#nf" + i);
    NF.style.display = "table-cell";
  }
}

function gerarPDF() {
  // let currHeigth = Math.round(dateArr.length / 2) * 101;
  var doc = new jsPDF("mm", "mm", [235, 510]);
  var elementHTML = document.querySelector(".main");
  let currentDateString =
    "NF Almoço " +
    moment(dateArr[0]).format("DD-MM") +
    " a " +
    moment(dateArr[dateArr.length - 1]).format("DD-MM");
  doc.html(elementHTML, {
    callback: function (doc) {
      doc.save(currentDateString);
    },
    autoPaging: "text",
    margin: [0, 0, 0, 10],
    x: 0,
    y: 0,
    width: 220,
    windowWidth: 750,
  });
}
