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
      description: 'Flex container tanımlamasından sonra esnek yapının nasıl davranması gerektiğini belirtmemiz gerekiyor. Bu amaçla kullanabileceğimiz özellikler ise şöyle:\n *   flex-direction\n*   flex-wrap\n*   flex-flow\n*   justify-content\n*   align-items\n*   align-content',
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
      description: '**flex-direction** ile özelliklere göz atalım. flex-direction alt (child) elementlerin (item) yönünü belirlemek için kullanılır. Özellik, varsayılan olarak (row) yerleşimi yatayda gerçekleştirir. Özellik ayrıca farklı davranışlar için farklı seçenekler sunmaktadır.\n\n```css\n.flex-container { \n    flex-direction: row | row-reverse | column | column-reverse; \n}\n``` \n\n *   **row:** Esnek kutuları soldan sağa sıralar\n*   **row-reverse:** Esnek kutuları sağdan sola sıralar\n*   **column:** Esnek kutuları kolon olarak yukarıdan aşağı sıralar\n*   **column-reverse:** Esnek kutuları row-reverse gibi ama alttan yukarı sıralar',
      question: 'Esnek kutuları yukarıdan aşağı sıramak için flex-direction: değeri ne olmalıdır ?',
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
      description: 'Ön tanımlı flex-wrap değeri: nowrap olup esnek kutuları tek bir satırda sıralanmasını saglar. Eğer esnek kutuları bir kaç satırda sıralamak isterseniz, flex-wrap değerini "wrap" olarak değiştirebilirsiniz. \n\n ```css.flex-container {\n    flex-wrap: nowrap | wrap | wrap-reverse;\n}\n```\n*   **nowrap**: Container içerisindeki tüm item’ları tek bir satıra sığacak şekilde, yan yana konumlandırır. Varsayılan seçenektir.\n*   **wrap**: Item’lar gerektiğinde alt satırlara yukarıdan aşağıya doğru sıralanırlar.\n*   **wrap-reverse**: Item’lar gerektiğinde alt satırlara aşağıdan yukarıya doğru sıralanırlar.',
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
      description: 'flex-flow değeri, flex-direction ve flex-wrap özelliklerinin birleşimi olarak tanımlanır.\n\n```css\n.flex-container {\n    flex-flow: row wrap-reverse;\n}\n```\n*   **row:** Esnek kutuları soldan sağa sıralar\n*   **row-reverse:** Esnek kutuları sağdan sola sıralar\n*   **column:** Esnek kutuları kolon olarak yukarıdan aşağı sıralar\n*   **column-reverse:** Esnek kutuları row-reverse gibi ama alttan yukarı sıralar\n*   **wrap:** Item’lar gerektiğinde alt satırlara yukarıdan aşağıya doğru sıralanırlar.\n*   **wrap-reverse:** Item’lar gerektiğinde alt satırlara aşağıdan yukarıya doğru sıralanırlar.',
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
      description: '**align-items** ile özelliklere göz atalım. align-items alt (child) elementlerin (item) yönünü belirlemek için kullanılır. Özellik, varsayılan olarak (stretch) yerleşimi yatayda gerçekleştirir. Özellik ayrıca farklı davranışlar için farklı seçenekler sunmaktadır.\n\n```css\n.flex-container { \n    align-items: flex-start | flex-end | center | baseline | stretch; \n}\n``` \n\n *   **flex-start:** Esnek kutuların sola yatayda yerleştirilmesi\n*   **flex-end:** Esnek kutuların sağa yatayda yerleştirilmesi\n*   **center:** Esnek kutuların ortaya yatayda yerleştirilmesi\n*   **baseline:** Esnek kutuların ortaya yatayda yerleştirilmesi\n*   **stretch:** Esnek kutuların yatayda yerleştirilmesi',
      question: 'Esnek kutuları yatayda yerleştirmek için align-items değeri ne olmalıdır?',
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
      description: '**justify-content** ile özelliklere göz atalım. justify-content alt (child) elementlerin (item) yönünü belirlemek için kullanılır. Özellik, varsayılan olarak (flex-start) yerleşimi yatayda gerçekleştirir. Özellik ayrıca farklı davranışlar için farklı seçenekler sunmaktadır.\n\n```css\n.flex-container { \n    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly; \n}\n``` \n\n *   **flex-start:** Esnek kutuları soldan sağa sıralar\n*   **flex-end:** Esnek kutuları sağdan sola sıralar\n*   **center:** Esnek kutuları ortalar\n*   **space-between:** Esnek kutuları arasında boşluk bırakır\n*   **space-around:** Esnek kutuları ortalar ve arasında boşluk bırakır\n*   **space-evenly:** Esnek kutuları ortalar ve arasında boşluk bırakır',
      question: 'Esnek kutuları ortalamak için justify-content değeri ne olmalıdır ?',
      title: 'justify-content',
      initialValue: 'div.container {\n  display: flex;\n  justify-content: ;\n}',
      readOnly: false,
    },
    step: 7,
    id: nanoid(),
  },
  {
    data: {
      answer: 'div.container {\n  display: flex;\n flex-wrap: wrap;\n align-content: center;\n}',
      content: 20,
      description: '**align-content** ile özelliklere göz atalım. align-content alt (child) elementlerin (item) yönünü belirlemek için kullanılır. Özellik, varsayılan olarak (stretch) yerleşimi yatayda gerçekleştirir. Özellik ayrıca farklı davranışlar için farklı seçenekler sunmaktadır.\n\n```css\n.flex-container { \n    align-content: flex-start | flex-end | center | baseline | stretch; \n}\n``` \n\n *   **flex-start:** Esnek kutuların sola yatayda yerleştirilmesi\n*   **flex-end:** Esnek kutuların sağa yatayda yerleştirilmesi\n*   **center:** Esnek kutuların ortaya yatayda yerleştirilmesi\n*   **baseline:** Esnek kutuların ortaya yatayda yerleştirilmesi\n*   **stretch:** Esnek kutuların yatayda yerleştirilmesi',
      question: '',
      title: 'align-content',
      initialValue: 'div.container {\n  display: flex;\n flex-wrap: wrap;\n align-content: center;\n}',
      readOnly: true,
    },
    step: 8,
    id: nanoid(),
  },
  {
    data: {
      answer: 'div.container {\n  display: flex;\n flex-wrap: wrap;\n gap: 50px;\n}',
      content: 20,
      description: '**gap** ile özelliklere göz atalım. gap alt (child) elementlerin (item) yönünü belirlemek için kullanılır. Özellik, varsayılan olarak (0) yerleşimi yatayda gerçekleştirir. Özellik ayrıca farklı davranışlar için farklı seçenekler sunmaktadır.\n\n```css\n.flex-container { \n    gap: 5x; \n}\n``` \n\n *   **0:** Esnek kutuların arasında boşluk bırakır\n*   **20px:** Esnek kutuların arasında boşluk bırakır\n*   **30px:** Esnek kutuların arasında boşluk bırakır\n*   **40px:** Esnek kutuların arasında boşluk bırakır\n*   **50px:** Esnek kutuların arasında boşluk bırakır',
      question: "Esnek kutuların arasında 50px'lik boşluk bırakılması için gap değeri ne olmalıdır ?",
      title: 'gap, row-gap, column-gap',
      initialValue: 'div.container {\n  display: flex;\n flex-wrap: wrap;\n gap: ;\n}',
      readOnly: false,
    },
    step: 9,
    id: nanoid(),
  },
];

export default chapterList;
