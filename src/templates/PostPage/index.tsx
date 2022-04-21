import { interfaceComponent } from '../../components/post';
import * as S from './styles';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export interface iComponent extends interfaceComponent {
  content: string;
}

const PostPage = ({
  title,
  category,
  level,
  shortDescription,
  tools,
  content,
  tags,
  team,
}: iComponent) => {
  return (
    <S.Container>
      <S.ColumnLeft>
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.Category>{category}</S.Category>
          <S.Team>
            <S.TeamIcon size="20px" /> {team.current} / {team.max}
          </S.Team>
        </S.Header>

        <S.Info>
          <S.Level>{level}</S.Level>
          <S.ShortDescription>{shortDescription}</S.ShortDescription>
          <S.ToolsWrapper>
            <S.Description>
              Ferramentas e Tecnologias Recomendadas:
            </S.Description>
            {tools.map((el, i) => (
              <S.Tool key={i}>{el}</S.Tool>
            ))}
          </S.ToolsWrapper>
        </S.Info>
        <S.TagWrapper>
          {tags.map((el, i) => (
            <S.Tag title={el.description} color={el.color} key={i}>
              {el.title}
            </S.Tag>
          ))}
        </S.TagWrapper>
        <S.Button>Contatar o ADM</S.Button>
        <S.Extra>
          Fique a vontade para entrar no projeto ou criar uma nova equipe, use
          esse botão, para contatar o Administrador de Projetos para organizar a
          equipe e postar projetos nesse site, esse site ainda está em
          construção e será automatizado em breve. Obrigado pela uso, com amor
          Flavio :)
        </S.Extra>
      </S.ColumnLeft>

      <S.ColumnRight>
        <S.README>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </S.README>
      </S.ColumnRight>
    </S.Container>
  );
};

export default PostPage;
