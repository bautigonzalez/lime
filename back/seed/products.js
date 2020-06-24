const Product = require("../models/products");
require("../db");

const products = [
  {
    name: "Sony L85s",
    description:
      "Breve descripcion del producto Auriculares para seed de la base de datos",
    valoration: 4,
    price: 4700,
    secondaryimage:
      "https://http2.mlstatic.com/D_NQ_NP_933418-MLA40865317836_022020-O.webp",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_631517-MLA40865290878_022020-O.webp",
  },
  {
    name: "Cable JBL",
    description:
      "Breve descripcion del producto Auriculares para seed de la base de datos",
    valoration: 3,
    price: 1800,
    secondaryimage:
      "https://http2.mlstatic.com/D_NQ_NP_778105-MLA41092919597_032020-O.webp",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_663575-MLA41092704825_032020-O.webp",
  },
  {
    name: "Logitech M170 ",
    description:
      "Breve descripcion del producto Mouse para seed de la base de datos",
    valoration: 3,
    price: 1200,
    secondaryimage:
      "https://http2.mlstatic.com/D_NQ_NP_810903-MLA32854641464_112019-O.webp",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_744609-MLA32854739285_112019-O.webp",
  },
  {
    name: "Logitech K400",
    description:
      "Breve descripcion del producto Teclado  para seed de la base de datos",
    valoration: 4,
    price: 2850,
    secondaryimage:
      "https://http2.mlstatic.com/D_NQ_NP_876979-MLA32722390626_102019-O.webp",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_614187-MLA32722390623_102019-O.webp",
  },
  {
    name: "Tedge Bluetooth",
    description:
      "Breve descripcion del producto Parlante  para seed de la base de datos",
    valoration: 2,
    price: 1500,
    secondaryimage:
      "https://http2.mlstatic.com/D_NQ_NP_823000-MLA41255110983_032020-O.webp",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_720598-MLA41255164828_032020-O.webp",
  },

  {
    name: "HP 250",
    description:
      "Breve descripcion del producto Notebook para seed de la base de datos",
    valoration: 3,
    price: 32000,
    secondaryimage:
      "https://http2.mlstatic.com/notebook-hp-250-g7-i5-8265u-8gb-1tb-ssd-240gb-156-D_NQ_NP_627895-MLA31033731341_062019-F.webp",
    image:
      "https://http2.mlstatic.com/notebook-hp-250-g7-i5-8265u-8gb-1tb-ssd-240gb-156-D_NQ_NP_939286-MLA31033732836_062019-O.webp",
  },

  {
    name: "Macbook Air",
    description:
      "Breve descripcion del producto Notebook para seed de la base de datos",
    valoration: 4,
    price: 95000,
    secondaryimage:
      "https://http2.mlstatic.com/macbook-air-modelo-a1466-133-i5-8gb-ssd-512256128-garanti-D_NQ_NP_645129-MLA31012466696_062019-F.webp",
    image:
      "https://http2.mlstatic.com/macbook-air-modelo-a1466-133-i5-8gb-ssd-512256128-garanti-D_NQ_NP_856988-MLA31012456437_062019-F.webp",
  },

  {
    name: "Asus Xs",
    description:
      "Breve descripcion del producto Notebook para seed de la base de datos",
    valoration: 4,
    price: 83000,
    secondaryimage:
      "https://http2.mlstatic.com/notebook-asus-core-i5-zenbook-ux433-8gb-ssd-512g-placa-gamer-D_NQ_NP_928772-MLA31966156120_082019-F.webp",
    image:
      "https://http2.mlstatic.com/notebook-asus-core-i5-zenbook-ux433-8gb-ssd-512g-placa-gamer-D_NQ_NP_946169-MLA31966146282_082019-F.webp",
  },

  {
    name: "Macbook Pro",
    description:
      "Breve descripcion del producto Notebook para seed de la base de datos",
    valoration: 4,
    price: 145000,
    secondaryimage:
      "https://http2.mlstatic.com/macbook-pro-15-5r962lla-22ghz-6c-i7-leer-descripcion-D_NQ_NP_921623-MLA41638692995_052020-F.webp",
    image:
      "https://http2.mlstatic.com/macbook-pro-15-5r962lla-22ghz-6c-i7-leer-descripcion-D_NQ_NP_832673-MLA41638692993_052020-F.webp",
  },
  {
    name: "Alienware M17",
    description:
      "Breve descripcion del producto Notebook para seed de la base de datos",
    valoration: 5,
    price: 180000,
    secondaryimage:
      "https://http2.mlstatic.com/alienware-m17-rtx2070-8gb-max-q-i7-8750h-16gb-512gb-pcie-ssd-D_NQ_NP_641116-MLA31525920060_072019-F.webp",
    image:
      "https://http2.mlstatic.com/alienware-m17-rtx2070-8gb-max-q-i7-8750h-16gb-512gb-pcie-ssd-D_NQ_NP_611038-MLA31525876925_072019-F.webp",
  },
  {
    name: "Samsung Galaxy S20",
    description:
      "Breve descripcion del producto Celular para seed de la base de datos",
    valoration: 5,
    price: 95000,
    secondaryimage:
      "https://http2.mlstatic.com/D_NQ_NP_829313-MLA42087898453_062020-O.webp",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_971041-MLA42087920452_062020-O.webp",
  },

  {
    name: "Samsung Galaxy A10 ",
    description:
      "Breve descripcion del producto Celular para seed de la base de datos",
    valoration: 3,
    price: 32000,
    secondaryimage:
      "https://http2.mlstatic.com/D_NQ_NP_916881-MLA31844731453_082019-O.webp",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_935364-MLA31838804614_082019-O.webp",
  },

  {
    name: "Samsung Galaxy J6+",
    description:
      "Breve descripcion del producto Celular para seed de la base de datos",
    valoration: 3,
    price: 40000,
    secondaryimage:
      "https://http2.mlstatic.com/D_NQ_NP_983329-MLA31002760189_062019-O.webp",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_983329-MLA31002760189_062019-O.webp",
  },
  {
    name: "iPhone 11",
    description:
      "Breve descripcion del producto Celular para seed de la base de datos",
    valoration: 5,
    price: 95000,
    secondaryimage:
      "https://http2.mlstatic.com/D_NQ_NP_718017-MLA32445355233_102019-O.webp",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_885508-MLA32445302787_102019-O.webp",
  },

  {
    name: "iPhone XR",
    description:
      "Breve descripcion del producto Celular para seed de la base de datos",
    valoration: 4,
    price: 80000,
    secondaryimage:
      "https://http2.mlstatic.com/D_NQ_NP_897921-MLA31002342943_062019-O.webp",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_998881-MLA31002678129_062019-O.webp",
  },
  {
    name: "iPhone 7",
    description:
      "Breve descripcion del producto Celular para seed de la base de datos",
    valoration: 3,
    price: 50000,
    secondaryimage:
      "https://http2.mlstatic.com/D_NQ_NP_834601-MLA31003000616_062019-O.webp",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_778326-MLA31002769424_062019-O.webp",
  },
  {
    name: "iPhone XR",
    description:
      "Breve descripcion del producto Celular para seed de la base de datos",
    valoration: 4,
    price: 80000,
    secondaryimage:
      "https://http2.mlstatic.com/D_NQ_NP_897921-MLA31002342943_062019-O.webp",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_998881-MLA31002678129_062019-O.webp",
  },
  {
    name: "Moto G8 Play ",
    description:
      "Breve descripcion del producto Celular para seed de la base de datos",
    valoration: 4,
    price: 80000,
    secondaryimage:
      "https://http2.mlstatic.com/D_NQ_NP_943967-MLA40451540515_012020-O.webp",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_813724-MLA40451540595_012020-O.webp",
  },
  {
    name: "Moto E6 Plus ",
    description:
      "Breve descripcion del producto Celular para seed de la base de datos",
    valoration: 2,
    price: 25000,
    secondaryimage:
      "https://http2.mlstatic.com/D_NQ_NP_795609-MLA40851472638_022020-O.webp",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_985198-MLA40851472639_022020-O.webp",
  },

  {
    name: "Huawei P30 Lite ",
    description:
      "Breve descripcion del producto Celular para seed de la base de datos",
    valoration: 3,
    price: 49000,
    secondaryimage:
      "https://http2.mlstatic.com/D_NQ_NP_729743-MLA31847684265_082019-O.webp",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_695045-MLA31822435045_082019-O.webp",
  },

  {
    name: "LG G7 ThinQ",
    description:
      "Breve descripcion del producto Celular para seed de la base de datos",
    valoration: 4,
    price: 52000,
    secondaryimage:
      "https://http2.mlstatic.com/D_NQ_NP_630665-MLA31819973074_082019-O.webp",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_837851-MLA31819569908_082019-O.webp",
  },
  {
    name: "LG K50S ",
    description:
      "Breve descripcion del producto Celular para seed de la base de datos",
    valoration: 2,
    price: 23000,
    secondaryimage:
      "https://http2.mlstatic.com/D_NQ_NP_726631-MLA41812392257_052020-O.webp",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_673519-MLA41812240411_052020-O.webp",
  },
];

console.log("Seediando productos a la base de datos...");

Product.bulkCreate(products).then(() => {
  console.log("Productos listos!");

  process.exit();
});
