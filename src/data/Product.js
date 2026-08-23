import coasterOrganizer from "../assets/كوستر منظم اكسسوارات.jpeg";
import coasterAccessories from "../assets/كوستر اكسسوارات.jpeg";
import tray from "../assets/صنية شبكة.jpeg";
import mabkhara from "../assets/مباخرة.jpeg";
import mabkhara2 from "../assets/مباخرة2.jpeg";
import mabkhara3 from "../assets/مباخرة3.jpeg";
import koster from "../assets/كوستر.jpeg";
import sanyia from "../assets/صنية شبكة 2.jpeg";
export const products = [
  {
    id: 1,
    name: "كوستر منظم اكسسوارات",
    price: 150,
    description: "تصميم أنيق وعملي لترتيب إكسسواراتك وإضافة لمسة مميزة لمكانك.",
    image: coasterOrganizer,
    category: "accessories",
  },
  {
    id: 2,
    name: "كوستر اكسسوارات",
    price: 70,
    description: "قطعة بسيطة وأنيقة لتنظيم إكسسواراتك وتكمّل ديكورك بكل رقة.",
    image: coasterAccessories,
    category: "accessories",
  },
  {
    id: 3,
    name: "صنية شبكة",
    price: 200,
    description:
      "تصميم راقي ومميز يناسب الخطوبة والمناسبات ويضيف لمسة فخامة للديكور.",
    image: tray,
    category: "khotoba",
  },
  {
    id: 4,
    name: "مباخرة",
    price: 200,
    description: "مباخرة بتصميم أنيق تضيف لمسة فخامة ورائحة مميزة لبيتك.",
    image: mabkhara,
    category: "bakhoor",
  },
  {
    id: 5,
    name: "مباخرة",
    price: 200,
    description: "اختيار أنيق لعشاق التفاصيل الراقية، مثالية للبيت والمناسبات.",
    image: mabkhara2,
    category: "bakhoor",
  },
  {
    id: 6,
    name: "مباخرة",
    price: 200,
    description: "لمسة ديكور مميزة تجمع بين الأناقة والبساطة لكل ركن في بيتك.",
    image: mabkhara3,
    category: "bakhoor",
  },
  {
    id: 7,
    name: "كوستر لون وردي",
    price: 170,
    description: "لون وردي رقيق وتصميم أنيق يضيف لمسة ناعمة ومميزة لمكانك.",
    image: koster,
    category: "accessories",
  },
  {
    id: 8,
    name: "صنية شبكة",
    price: 200,
    description:
      "صنية أنيقة بتفاصيل راقية، اختيار مثالي للخطوبة والمناسبات الخاصة.",
    image: sanyia,
    category: "khotoba",
  },
];

export const categories = [
  {
    id: "bakhoor",
    name: "مباخر",
  },
  {
    id: "khotoba",
    name: "صواني خطوبة",
  },
  {
    id: "accessories",
    name: "إكسسوارات",
  },
];
