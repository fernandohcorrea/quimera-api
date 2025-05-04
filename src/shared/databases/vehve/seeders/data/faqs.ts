/**
 * Return FAQs List
 */
export default async (): Promise<any> => {
  const faqs = [
    {
      title: 'O que é o YetzFlash',
      description:
        'Uma plataforma de premiações com vouchers digitais para você resgatar, a partir de regras e prazos definidos pela empresa contratante.',
    },
    {
      title: 'Qual é meu login',
      description: 'Seu CPF é o seu login',
    },
  ];

  return new Promise((resolve) => resolve(faqs));
};
