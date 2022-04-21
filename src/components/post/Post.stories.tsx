import Component, { interfaceComponent } from '.';

export default {
  title: 'Simple Components/Post',
  component: Component,
  args: {
    title: 'vigilant-waffle',
    category: 'front-end',
    level: 'trainee',
    shortDescription: 'Um site simples com um API externa',
    tools: ['JavaScript', 'HTML&CSS', 'API'],
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
    title: { type: 'string' },
  },
};

export const Post = (args: interfaceComponent) => <Component {...args} />;
