import Component, { iComponent } from '.';

export default {
  title: 'Template/Post Page',
  component: Component,
  args: {
    title: 'vigilant-waffle',
    category: 'front-end',
    level: 'trainee',
    shortDescription: 'Um site simples com um API externa',
    tools: ['JavaScript', 'HTML&CSS', 'API'],
    content: `Por algum motivo texto markdown não pode ser passado por string pra o javascript,
    para testar o markdown aqui use (template Strings ${'``'}) para criar textos multi linhas. Deformidades no texto podem ser observadas
    porem quando se obtém o texto markdown por fetch().text() o texto é formatado normalmente. Será que estou esquecendo de algum detalhe?`,
    tags: [
      {
        title: 'iniciante',
        color: 'green',
        description: 'Projeto com foco em iniciantes',
      },
      {
        title: 'foco no código',
        color: 'purple',
        description: 'Projeto com foco em conhecimento técnico',
      },
      {
        title: 'bom para começar',
        color: '#07a644',
        description: 'Projeto bom para aqueles que não sabem por onde começar',
      },
    ],
    team: { current: 1, max: 10 },
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const PostPage = (args: iComponent) => <Component {...args} />;
