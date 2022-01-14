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
      answer: 'div.container {\n  display: flex;\n}',
      content: 2,
      description: '**flex-direction** ile özelliklere göz atalım. flex-direction alt (child) elementlerin (item) yönünü belirlemek için kullanılır. Özellik, varsayılan olarak (row) yerleşimi yatayda gerçekleştirir. Özellik ayrıca farklı davranışlar için farklı seçenekler sunmaktadır.\n\n```css\n.flex-container { \n    flex-direction: row | row-reverse | column | column-reverse; \n}\n```',
      question: '',
      title: 'flex-direction',
      initialValue: 'div.container {\n  display: ;\n}',
      readOnly: false,
    },
    step: 3,
    id: nanoid(),
  },
];

export default chapterList;
