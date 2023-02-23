// playground requires you to assign document definition to a variable called dd

var dd = {
  pageSize: { width: 280, height: 270 },
  pageMargins: [20, 20, 10, 10],
  content: [
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
          text: "30,00",
          style: "text",
        },
        {
          width: "auto",
          text: "30,00",
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
      text: "VALOR TOTAL R$ 30,85",
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
          text: "30,85",
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
      text: "NFC-e n° 0000028162 Série 001 22/02/2023 12:34:48 Via Empresa",
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
      image: "building",
      width: 350,
      height: 380,
      absolutePosition: { x: 0, y: 0 },
      opacity: 0.5,
      pageBreak: "after",
    },
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
    building: text,
  },
};
