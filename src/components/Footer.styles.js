import styled from 'styled-components';

export const Container = styled.div`
  background: #0a0a0a;
  color: #fff;
  padding: 4rem 2rem 2rem;
  margin-top: 4rem;
`;

export const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
`;

export const Col = styled.div`
  flex: 1;
  min-width: 220px;

  p {
    color: #bbb;
    font-size: 0.95rem;
    margin-top: 0.5rem;
  }
`;

export const Title = styled.h4`
  font-size: 1.2rem;
  color: #00f6ff;
  margin-bottom: 1rem;
`;

export const LinkItem = styled.a`
  display: block;
  color: #ccc;
  text-decoration: none;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  transition: 0.3s ease;

  &:hover {
    color: #00f6ff;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 0.5rem;

  a {
    color: #ccc;
    font-size: 1.4rem;
    transition: 0.3s;

    &:hover {
      color: #00f6ff;
      transform: scale(1.1);
    }
  }
`;

export const BottomBar = styled.div`
  border-top: 1px solid #222;
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #888;
`;
export const LightStyles = {
  Container: styled.div`
    background: #f7faff;
    color: #222;
    padding: 4rem 2rem 2rem;
    margin-top: 4rem;
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.03);
  `,

  Columns: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
  `,

  Col: styled.div`
    flex: 1;
    min-width: 220px;

    p {
      color: #444;
      font-size: 0.95rem;
      margin-top: 0.5rem;
    }
  `,

  Title: styled.h4`
    font-size: 1.2rem;
    color: #007bff;
    margin-bottom: 1rem;
    text-shadow: 0 1px 1px rgba(0,0,0,0.05);
  `,

  LinkItem: styled.a`
    display: block;
    color: #444;
    text-decoration: none;
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: #007bff;
      text-decoration: underline;
    }
  `,

  SocialRow: styled.div`
    display: flex;
    gap: 1.2rem;
    margin-top: 0.5rem;

    a {
      color: #666;
      font-size: 1.4rem;
      transition: 0.3s;

      &:hover {
        color: #007bff;
        transform: scale(1.1);
      }
    }
  `,

  BottomBar: styled.div`
    border-top: 1px solid #ddd;
    text-align: center;
    padding-top: 2rem;
    margin-top: 2rem;
    font-size: 0.9rem;
    color: #555;
    background: transparent;
  `
};
