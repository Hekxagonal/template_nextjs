import * as S from './styles';

export interface interfaceComponent {
  title: string;
  category: string;
  level: string;
  shortDescription: string;
  tools: string[];
  tags: [
    { title: string; color: string; textColor: string; description: string },
  ];
  team: { current: number; max: number };
}

const Post = ({
  title,
  category,
  level,
  shortDescription,
  tools,
  tags,
  team,
}: interfaceComponent) => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.Type>
          <S.Team>
            <S.TeamIcon size="20px" /> {team.current} / {team.max}
          </S.Team>
          <div>
            {category}/ {level}
          </div>
        </S.Type>
      </S.Header>

      <S.Content>
        <S.shortDescription>{shortDescription}</S.shortDescription>
        <S.ToolsWrapper>
          <S.ToolsWrapper>
            {tools.map((el, i) => (
              <S.Tool key={i}>{el}</S.Tool>
            ))}
          </S.ToolsWrapper>
        </S.ToolsWrapper>
      </S.Content>

      <S.TagWrapper>
        {tags.map((el, i) => (
          <S.Tag title={el.description} color={el.color} key={i}>
            {el.title}
          </S.Tag>
        ))}
      </S.TagWrapper>
    </S.Container>
  );
};

export default Post;
