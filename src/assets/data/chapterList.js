import { nanoid } from 'nanoid';

const chapterList = [
  {
    data: {
      answer: 'div.container {\n  display: flex;\n}',
      content: 2,
      description: "Kısaca flexbox olarak ifade edebileceğimiz CSS Esnek Kutu Düzeni, bir CSS3 web düzeni (layout) modelidir. Flexbox model kullanımı için, öncelikle container class'li div elementine `display: flex` özelliğini eklemelisiniz.",
      question: '',
      title: 'Giriş',
      initialValue: 'div.container {\n  display: ;\n}',
      readOnly: false,
    },
    step: 1,
    id: nanoid(),
  },
  {
    data: {
      answer: 'div.container {\n  display: flex;\n}',
      content: 3,
      description: 'Flex container tanımlamasından sonra esnek yapının nasıl davranması gerektiğini belirtmemiz gerekiyor. Bu amaçla kullanabileceğimiz özellikler ise şöyle:\n*   flex-direction\n*   flex-wrap\n*   flex-flow\n*   justify-content\n*   align-items\n*   align-content',
      question: '',
      title: 'Temel bilgiler ve terminoloji',
      initialValue: 'div.container {\n  display: flex;\n}',
      readOnly: true,
    },
    step: 2,
    id: nanoid(),
  },
  {
    data: {
      answer: 'div.container {\n  display: flex;\n  flex-direction: column;\n}',
      content: 3,
      description: '**flex-direction** ile özelliklere göz atalım. flex-direction alt (child) elementlerin (item) yönünü belirlemek için kullanılır. Özellik, varsayılan olarak (row) yerleşimi yatayda gerçekleştirir. Özellik ayrıca farklı davranışlar için farklı seçenekler sunmaktadır.\n\n```css\n.flex-container { \n    flex-direction: row | row-reverse | column | column-reverse; \n}\n```\n\n*   **row:** Esnek kutuları soldan sağa sıralar\n* **row-reverse:** Esnek kutuları sağdan sola sıralar\n* **column:** Esnek kutuları kolon olarak yukarıdan aşağı sıralar\n*   **column-reverse:** Esnek kutuları row-reverse gibi ama alttan yukarı sıralar',
      question: 'Esnek kutuları yukarıdan aşağı sıramak için flex-direction değeri ne olmalıdır ?',
      title: 'flex-direction',
      initialValue: 'div.container {\n  display: flex;\n  flex-direction: ;\n}',
      readOnly: false,
    },
    step: 3,
    id: nanoid(),
  },
  {
    data: {
      answer: 'div.container {\n  display: flex;\n  flex-wrap: wrap;\n}',
      content: 20,
      description: 'Ön tanımlı flex-wrap değeri: `nowrap` olup esnek kutuları tek bir satırda sıralanmasını saglar. Eğer esnek kutuları bir kaç satırda sıralamak isterseniz, flex-wrap değerini `wrap` olarak değiştirebilirsiniz.\n\n```css\n.flex-container {\n    flex-wrap: nowrap | wrap | wrap-reverse;\n}\n```\n*   **nowrap**: Container içerisindeki tüm item’ları tek bir satıra sığacak şekilde, yan yana konumlandırır. Varsayılan seçenektir.\n*   **wrap**: Item’lar gerektiğinde alt satırlara yukarıdan aşağıya doğru sıralanırlar.\n*   **wrap-reverse**: Item’lar gerektiğinde alt satırlara aşağıdan yukarıya doğru sıralanırlar.',
      question: 'Esnek kutuları bir kaç satırda sıralamak isterseniz, flex-wrap değerini ne olmalıdır?',
      title: 'flex-wrap',
      initialValue: 'div.container {\n  display: flex;\n  flex-wrap: ;\n}',
      readOnly: false,
    },
    step: 4,
    id: nanoid(),
  },
  {
    data: {
      answer: 'div.container {\n  display: flex;\n  flex-flow: row wrap-reverse;\n}',
      content: 20,
      description: '**flex-flow** değeri, flex-direction ve flex-wrap özelliklerinin birleşimi olarak tanımlanır.\n\n```css\n.flex-container {\n    flex-flow: row wrap-reverse;\n}\n```\n*   **row:** Esnek kutuları soldan sağa sıralar\n*   **row-reverse:** Esnek kutuları sağdan sola sıralar\n*   **column:** Esnek kutuları kolon olarak yukarıdan aşağı sıralar\n*   **column-reverse:** Esnek kutuları row-reverse gibi ama alttan yukarı sıralar\n*   **wrap:** Item’lar gerektiğinde alt satırlara yukarıdan aşağıya doğru sıralanırlar.\n*   **wrap-reverse:** Item’lar gerektiğinde alt satırlara aşağıdan yukarıya doğru sıralanırlar.',
      question: '',
      title: 'flex-flow',
      initialValue: 'div.container {\n  display: flex;\n  flex-flow: row wrap-reverse;\n}',
      readOnly: true,
    },
    step: 5,
    id: nanoid(),
  },
  {
    data: {
      answer: 'div.container {\n  display: flex;\n  align-items: center;\n}',
      content: 3,
      description: '**align-items** ile özelliklere göz atalım. align-items alt (child) elementleri (item) dikeyde (flex-direction: row yada row-reverse ise `dikeyde` degilse `yatayda`) hizalamak icin kullanılır. Özellik, varsayılan olarak (stretch) yerleşimi dikeyde gerçekleştirir. Özellik ayrıca farklı davranışlar için farklı seçenekler sunmaktadır.\n\n```css\n.flex-container { \n    align-items: flex-start | flex-end | center | baseline | stretch; \n}\n```\n\n*   **flex-start:** Esnek kutuların sola yatayda yerleştirilmesi\n*   **flex-end:** Esnek kutuların sağa yatayda yerleştirilmesi\n*   **center:** Esnek kutuların ortaya yatayda yerleştirilmesi\n*   **baseline:** Esnek kutuların ortaya yatayda yerleştirilmesi\n*   **stretch:** Esnek kutuların yatayda yerleştirilmesi',
      question: 'Esnek kutuları dikeyde ortalamak için align-items değeri ne olmalıdır ?',
      title: 'align-items',
      initialValue: 'div.container {\n  display: flex;\n  align-items: ;\n}',
      readOnly: false,
    },
    step: 6,
    id: nanoid(),
  },
  {
    data: {
      answer: 'div.container {\n  display: flex;\n  justify-content: center;\n}',
      content: 3,
      description: '**justify-content** ile özelliklere göz atalım. justify-content alt (child) elementleri (item) yatayda (flex-direction: row yada row-reverse ise `yatayda` degilse `dikeyde`) hizalamak icin kullanılır. Özellik, varsayılan olarak (flex-start) yerleşimi yatayda gerçekleştirir. Özellik ayrıca farklı davranışlar için farklı seçenekler sunmaktadır.\n\n```css\n.flex-container { \n    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly; \n}\n``` \n\n*   **flex-start:** Esnek kutuları soldan sağa sıralar\n*   **flex-end:** Esnek kutuları sağdan sola sıralar\n*   **center:** Esnek kutuları ortalar\n*   **space-between:** Esnek kutuları arasında boşluk bırakır\n*   **space-around:** Esnek kutuları ortalar ve arasında boşluk bırakır\n*   **space-evenly:** Esnek kutuları ortalar ve arasında boşluk bırakır',
      question: 'Esnek kutuları yatayda ortalamak için justify-content değeri ne olmalıdır ?',
      title: 'justify-content',
      initialValue: 'div.container {\n  display: flex;\n  justify-content: ;\n}',
      readOnly: false,
    },
    step: 7,
    id: nanoid(),
  },
  {
    data: {
      answer: 'div.container {\n display: flex;\n flex-wrap: wrap;\n align-content: center;\n}',
      content: 20,
      description: '**align-content** ile özelliklere göz atalım. align-content alt (child) elementleri dikeyde hizalamak icin kullanılır, uygulayabilmek icin birden fazla satir olmalidir.\n\n```css\n.flex-container { \n    align-content: flex-start | flex-end | center | baseline | stretch; \n}\n```\n\n*   **flex-start:** Esnek kutuların sola yatayda yerleştirilmesi\n*   **flex-end:** Esnek kutuların sağa yatayda yerleştirilmesi\n*   **center:** Esnek kutuların ortaya yatayda yerleştirilmesi\n*   **baseline:** Esnek kutuların ortaya yatayda yerleştirilmesi\n*   **stretch:** Esnek kutuların yatayda yerleştirilmesi',
      question: '',
      title: 'align-content',
      initialValue: 'div.container {\n display: flex;\n flex-wrap: wrap;\n align-content: center;\n}',
      readOnly: true,
    },
    step: 8,
    id: nanoid(),
  },
  {
    data: {
      answer: 'div.container {\n display: flex;\n flex-wrap: wrap;\n gap: 50px;\n}',
      content: 20,
      description: '**gap** ile özelliklere göz atalım. gap alt (child) elementlerin (item) arasindaki boslugu belirlemek için kullanılır.\n\n```css\n.flex-container { \n  gap: 10px;\n  gap: 10px 20px; /* row-gap column gap */\n  row-gap: 10px;\n  column-gap: 20px; \n}\n```\n\n',
      question: "Esnek kutuların arasında 50px'lik boşluk bırakılması için gap değeri ne olmalıdır ?",
      title: 'gap, row-gap, column-gap',
      initialValue: 'div.container {\n display: flex;\n flex-wrap: wrap;\n gap: ;\n}',
      readOnly: false,
    },
    step: 9,
    id: nanoid(),
  },
  {
    data: {
      answer: 'div.box1 {\n  order: 5;\n} \ndiv.box2 {\n  order: 2;\n} \ndiv.box3 {\n  order: 3;\n} \ndiv.box4 {\n  order: 4;\n}',
      content: 0,
      description: '**order** ile özelliklere göz atalım. order ögelerin sirasini belirlemek için kullanılır.\n\n```css\n.flex-container { \n    order: 5; /* default is 0 */ \n}\n``` \n\n',
      question: 'Ilk kutunun en sonda yer almasi icin order değeri ne olmalıdır ?',
      title: 'order',
      initialValue: 'div.box1 {\n  order: 1;\n} \ndiv.box2 {\n  order: 2;\n} \ndiv.box3 {\n  order: 3;\n} \ndiv.box4 {\n  order: 4;\n}',
      readOnly: false,
    },
    step: 10,
    id: nanoid(),
  },
  {
    data: {
      answer: 'div.box1 {\n  flex-grow: 1;\n} \ndiv.box2 {\n  flex-grow: 2;\n} \ndiv.box3 {\n  flex-grow: 1;\n} \ndiv.box4 {\n  flex-grow: 1;\n}',
      content: 0,
      description: '**flex-grow** gerektiginde esnek bir ogenin buyume yetenegini tanimlar. Oranti islevi goren birimsiz bir deger kabul eder. \n Tum esnek ogelerin baslangis flex-grow degeri 1 olarak ayarlanmis olsada containerdaki doldurulamamis olan alan ogelere esit miktarda paylastirilir.\n\n```css\n.box {\n  flex-grow: 4; /* default 0 */\n}\n```',
      question: 'Ikinci kutunun diger kutulara gore 2/5 kat daha fazla yer almasi icin flex-grow değeri ne olmalıdır ?',
      title: 'flex-grow',
      initialValue: 'div.box1 {\n  flex-grow: 1;\n} \ndiv.box2 {\n  flex-grow: 1;\n} \ndiv.box3 {\n  flex-grow: 1;\n} \ndiv.box4 {\n  flex-grow: 1;\n}',
      readOnly: false,
    },
    step: 11,
    id: nanoid(),
  },
  {
    data: {
      answer: 'div.box1 {\n  flex-shrink: 1;\n} \ndiv.box2 {\n  flex-shrink: 5;\n} \ndiv.box3 {\n  flex-shrink: 1;\n} \ndiv.box4 {\n  flex-shrink: 1;\n}',
      content: 0,
      description: '**flex-shrink** gerektiginde esnek bir öğenin gerektiğinde küçülme yeteneğini tanımlar. Oranti islevi goren birimsiz bir deger kabul eder. \n\n```css\n.box {\n  flex-shrink: 3; /* default 1 */\n}\n```',
      question: 'Ikinci kutunun diger kutulara gore daha fazla kuculmesi icin flex-shrink degerini 5 yapiniz',
      title: 'flex-shrink',
      initialValue: 'div.box1 {\n  flex-shrink: 1;\n} \ndiv.box2 {\n  flex-shrink: 1;\n} \ndiv.box3 {\n  flex-shrink: 1;\n} \ndiv.box4 {\n  flex-shrink: 1;\n}',
      readOnly: false,
    },
    step: 12,
    id: nanoid(),
  },
  {
    data: {
      answer: 'div.box1 {\n  flex-basis: 100px;\n} \ndiv.box2 {\n  flex-basis: 500px;\n} \ndiv.box3 {\n  flex-basis: 100px;\n} \ndiv.box4 {\n  flex-basis: 100px;\n}',
      content: 0,
      description: '**flex-basis** doldurulmayan alan dagiltilmadan once ogenin varsayılan boyutunu belirler. Bir uzunluk (ör. %20, 5rem vb.) veya bir anahtar kelime olabilir. \n\n ```css\n.box {\n  flex-basis: 20%; /* default auto */\n}\n```',
      question: 'Ikinci kutunun maksimum boyutunu 500px olabilmesi icin flex-basis degerini 500px yapiniz.',
      title: 'flex-basis',
      initialValue: 'div.box1 {\n  flex-basis: 100px;\n} \ndiv.box2 {\n  flex-basis: 100px;\n} \ndiv.box3 {\n  flex-basis: 100px;\n} \ndiv.box4 {\n  flex-basis: 100px;\n}',
      readOnly: false,
    },
    step: 13,
    id: nanoid(),
  },
  {
    data: {
      answer: 'div.box1 {\n  flex: 1;\n} \ndiv.box2 {\n  flex: 5;\n} \ndiv.box3 {\n  flex: 1;\n} \ndiv.box4 {\n  flex: 1;\n}',
      content: 0,
      description: "**flex** flex-grow, flex-shrink ve flex-basis kombinasyonunun kısaltmasıdır. İkinci ve üçüncü parametreler (flex-shrink ve flex-basis) isteğe bağlıdır. Varsayılan `0 1 auto`'dur, ancak bunu `flex: 5;` gibi tek bir sayı değeriyle ayarlarsanız, bu flex-basis degerini %0 olarak değiştirir, yani `flex-grow: 5; flex-shrink: 1; flex-basis: %0;`. \n\n ```css\n.box {\n  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]\n}\n```",
      question: 'Ikinci kutunun flex degerini 5 yapiniz.',
      title: 'flex',
      initialValue: 'div.box1 {\n  flex: 1;\n} \ndiv.box2 {\n  flex: 1;\n} \ndiv.box3 {\n  flex: 1;\n} \ndiv.box4 {\n  flex: 1;\n}',
      readOnly: false,
    },
    step: 14,
    id: nanoid(),
  },
  {
    data: {
      answer: 'div.box1 {\n  align-self: flex-start;\n} \ndiv.box2 {\n  align-self: auto;\n} \ndiv.box3 {\n  align-self: center;\n} \ndiv.box4 {\n  align-self: flex-end;\n}',
      content: 0,
      description: '**align-self** tek tek esnek öğeler için varsayılan hizalamanın (veya hizalama öğeleri tarafından belirtilenin) geçersiz kılınmasına izin verir. \n\n ```css\n.box {\n  align-self: auto | flex-start | flex-end | center | baseline | stretch;\n}\n```',
      question: '1. kutunun basta, 3.kutunun ortada ve son kutunun ise sonda hizalanmasi icin `align-self` degerleri ne olmalidir ?',
      title: 'align-self',
      initialValue: 'div.box1 {\n  align-self: auto;\n} \ndiv.box2 {\n  align-self: auto;\n} \ndiv.box3 {\n  align-self: auto;\n} \ndiv.box4 {\n  align-self: auto;\n}',
      readOnly: false,
    },
    step: 15,
    id: nanoid(),
  },
  {
    data: {
      title: 'Tebrikler tüm adımları tamamladın!',
      description: 'İstediğin zaman önceki adımlara dönebilir, geçtiğin tüm adımlar arasında kolayca dolaşabilirsin.',
    },
    step: 16,
    isLast: true,
    id: nanoid(),
  },
];

export default chapterList;
