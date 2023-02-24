var defaultPrices = "30,85/37,20/38,50/42,00/32,75/35,00";
var priceArr = [];
var dateArr = [];
var todosDias = []; //variável para o conteudo iterado e concatenado
var imgOverlay;
var loading = `  <div class="loader-container">
                  <div class="spinner"></div>
                </div>`;
var randomEffect;
var effects = [
  { image: "teste", opacity: 0.7 },
  { image: "teste2", opacity: 0.4 },
  { image: "teste3", opacity: 0.5 },
  { image: "teste4", opacity: 0.5 },
];

function onLoad() {
  randomEffect = effects[randomizer(0, 3)];
  toDataURL(`assets/${randomEffect.image}.png`, function (dataUrl) {
    imgOverlay = dataUrl;
  });
  document.querySelector("#valores").value = defaultPrices;
}

function toDataURL(src, callback, outputFormat) {
  let image = new Image();
  image.onload = function () {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    let dataURL;
    canvas.height = this.naturalHeight;
    canvas.width = this.naturalWidth;
    ctx.drawImage(this, 0, 0);
    dataURL = canvas.toDataURL(outputFormat);
    callback(dataURL);
  };
  image.src = src;
  if (image.complete || image.complete === undefined) {
    image.src =
      "data:image/gif;base64, R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    image.src = src;
  }
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("changelogBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var fp = flatpickr("input[type=datetime-local]", {
  mode: "multiple",
  dateFormat: "d/m/Y",
  locale: "pt",

  onChange(selectedDates) {
    dateArr = selectedDates;
    dateArr.sort((a, b) => a - b);
  },
});

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

function randomSize(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function gerarArquivo() {
  document.querySelector(".block").outerHTML = loading;
  pageGenerator();
  var dd = {
    pageSize: { width: 280, height: 260 },
    pageMargins: [20, 20, 10, 10],
    content: [
      todosDias.map((page) => {
        return page;
      }),
    ],
    styles: {
      header: {
        alignment: "center",
        fontSize: 8,
      },
      subheader: {
        alignment: "center",
        fontSize: 8,
        bold: true,
      },
      subheader2: {
        alignment: "center",
        fontSize: 9,
        bold: true,
      },
      text: {
        fontSize: 8,
        alignment: "left",
      },
      small: {
        fontSize: 6,
        alignment: "center",
      },
    },
    images: {
      overlay: imgOverlay,
    },
  };
  let currentDateString =
    "NF Almoço " +
    moment(dateArr[0]).format("DD-MM") +
    " a " +
    moment(dateArr[dateArr.length - 1]).format("DD-MM");

  const minhaPromise = new Promise((resolve, reject) => {
    resolve(pdfMake.createPdf(dd).download(currentDateString)).then(
      (document.querySelector(
        ".loader-container"
      ).outerHTML = `<div class="block"></div>`)
    );
  });
  setTimeout(() => {
    document.querySelector(
      ".loader-container"
    ).outerHTML = `<div class="block"></div>`;
  }, 500);
  todosDias = [];
}

function pageGenerator() {
  let contadorDia = 0;
  priceArr = new Array();
  let values = document.querySelector("#valores").value;
  let newVal = values.split("/");
  priceArr.push(...newVal);

  dateArr.forEach(async (dia) => {
    let randomWidth = randomSize(280, 2000);
    let randomHeigth = randomSize(270, 4450);
    let price = randomPrice();
    let time = randomTime().toLocaleTimeString("pt-BR");
    const breakPage = contadorDia === dateArr.length - 1 ? "none" : "after";
    todosDias = todosDias.concat([
      [
        {
          text: "CNPJ:33.822.843/0001-22DUELOS RESTAURANTE EIRELE EST.\n DEPUTADO OCTAVIO CABRAL,284 LOJA B JARDIM AMERICA –\n ITAGUAI – RJ 23.810-302 Fone:(21)3782-2075 I.E.11452.23-0\n\n",
          style: "header",
        },
        {
          text: "DOCUMENTO AUXILIAR DA NOTA FISCAL DE CONSUMIDOR ELETRONICA",
          style: "subheader",
        },
        {
          text: "EMITIDA EM CONTINGÊNCIA\nPendente de Autorização",
          style: "subheader2",
        },
        {
          columns: [
            {
              width: 45,
              text: "# Código",
              style: "text",
            },
            {
              width: 58,
              text: "Descrição",
              style: "text",
            },
            {
              width: 20,
              text: "Qtd",
              style: "text",
            },
            {
              width: 26,
              text: "Un",
              style: "text",
            },
            {
              width: 50,
              text: "Valor Unit.",
              style: "text",
            },
            {
              width: "auto",
              text: "Valor Total",
              style: "text",
            },
          ],
        },
        {
          columns: [
            {
              width: 45,
              text: "001 99",
              style: "text",
            },
            {
              width: 58,
              text: "Refeição divers",
              style: "text",
            },
            {
              width: 20,
              text: "001",
              style: "text",
            },
            {
              width: 26,
              text: "UN",
              style: "text",
            },
            {
              width: 58,
              text: `${price}`,
              style: "text",
            },
            {
              width: "auto",
              text: `${price}`,
              style: "text",
            },
          ],
        },
        {
          columns: [
            {
              width: 210,
              text: "QTD.TOTAL DE ITENS",
              style: "text",
            },
            {
              width: "auto",
              text: "001",
              style: "text",
            },
          ],
        },
        {
          text: `VALOR TOTAL R$ ${price}`,
          style: "text",
        },
        {
          columns: [
            {
              width: 130,
              text: "FORMA DE PAGAMENTO",
              style: "text",
            },
            {
              width: "auto",
              text: "Valor Pago",
              style: "text",
            },
          ],
        },
        {
          columns: [
            {
              width: 130,
              text: "Dinheiro",
              style: "text",
            },
            {
              width: "auto",
              text: price,
              style: "text",
            },
          ],
        },
        {
          text: "\nConsulte pela Chave de Acesso em\n",
          style: "header",
        },
        {
          text: "www.fazenda.rj.gov.br/nfce/consulta",
          style: "header",
          decoration: "underline",
        },
        {
          text: "3322 013382284300 0122 6500 1000 0281629057951868",
          style: "small",
        },
        {
          text: "CONSUMIDOR NÃO IDENTIFICADO",
          style: "small",
        },
        {
          text: `NFC-e n° 0000028162 Série 001 ${moment(dia).format(
            "DD/MM/YYYY"
          )} ${time} Via Empresa`,
          style: "small",
        },
        {
          text: "Protocolo de Autorizacão: 333211369550136",
          style: "small",
        },
        {
          text: "EMITIDA EM CONTINGÊNCIA",
          style: "small",
        },
        {
          text: "Pendente de Autorização",
          style: "small",
        },
        {
          text: "CPF/CNPJ Tribaprox R 3,64 Federal 5,40 Estadual Fonte",
          style: "small",
        },
        {
          text: [
            { text: "www.pdvitaguai.com.br", decoration: "underline" },
            " software para emissao de NFC-e}",
          ],
          style: "small",
        },
        {
          text: "Tributos Totais Incidentes(Lei Federal 12.741/12):R$8,46",
          style: "small",
        },
        {
          image: "overlay",
          width: randomWidth,
          height: randomHeigth,
          absolutePosition: { x: 0, y: 0 },
          opacity: randomEffect.opacity,
          pageBreak: breakPage,
        },
      ],
    ]);
    contadorDia++;
  });
  return todosDias;
}
