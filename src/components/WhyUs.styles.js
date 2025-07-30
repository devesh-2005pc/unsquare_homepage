import styled from 'styled-components';

export const Section = styled.section`
  padding: 6rem 2rem;
  background: #0a0a0a;
  color: white;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #00f6ff;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: auto;
`;

export const Item = styled.div`
  background: #111;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #222;
  transition: 0.3s;
  box-shadow: 0 0 15px rgba(0, 246, 255, 0.05);

  &:hover {
    box-shadow: 0 0 25px rgba(0, 246, 255, 0.1);
  }
`;

export const IconWrap = styled.div`
  font-size: 2.8rem;
  color: #00f6ff;
  margin-bottom: 1rem;
`;

export const ItemTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

export const ItemText = styled.p`
  font-size: 1rem;
  color: #bbb;
`;
// Light theme overrides using styled-components' theme prop
export const LightStyles = {
  Section: styled(Section)`
    background: ${({ theme }) => theme.mode === 'light' && '#f9fafe'};
    color: ${({ theme }) => theme.mode === 'light' && '#222'};
  `,

  Title: styled(Title)`
    color: ${({ theme }) => theme.mode === 'light' && '#007aff'};
    text-shadow: ${({ theme }) =>
      theme.mode === 'light' && '0 2px 4px rgba(0,0,0,0.05)'};
  `,

  Grid: styled(Grid)``, // No major changes needed here

  Item: styled(Item)`
    background: ${({ theme }) =>
      theme.mode === 'light' && 'rgba(255,255,255,0.75)'};
    border: ${({ theme }) => theme.mode === 'light' && '1px solid #ddd'};
    box-shadow: ${({ theme }) =>
      theme.mode === 'light' && '0 4px 20px rgba(0, 0, 0, 0.05)'};
    backdrop-filter: ${({ theme }) => theme.mode === 'light' && 'blur(10px)'};
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: -15%;
      left: -15%;
      width: 140%;
      height: 140%;
      background: ${({ theme }) =>
        theme.mode === 'light'
          ? 'radial-gradient(circle, rgba(0, 122, 255, 0.06) 0%, transparent 70%)'
          : 'transparent'};
      z-index: 0;
    }

    &:hover {
      box-shadow: ${({ theme }) =>
        theme.mode === 'light' && '0 8px 30px rgba(0, 0, 0, 0.1)'};
    }
  `,

  IconWrap: styled(IconWrap)`
    color: ${({ theme }) => theme.mode === 'light' && '#007aff'};
  `,

  ItemTitle: styled(ItemTitle)`
    color: ${({ theme }) => theme.mode === 'light' && '#111'};
  `,

  ItemText: styled(ItemText)`
    color: ${({ theme }) => theme.mode === 'light' && '#444'};
  `
};

