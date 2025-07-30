import styled from 'styled-components';

export const Section = styled.section`
  padding: 6rem 2rem;
  background: #0f0f0f;
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

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: auto;
`;

export const Card = styled.div`
  background: #111;
  padding: 2rem;
  border-radius: 18px;
  border: 1px solid #1d1d1d;
  box-shadow: 0 0 15px rgba(0, 246, 255, 0.05);
  transition: all 0.4s ease;

  &:hover {
    background: linear-gradient(145deg, #111, #1a1a1a);
    box-shadow: 0 0 20px rgba(0, 246, 255, 0.2);
    transform: translateY(-4px);
  }
`;

export const IconWrap = styled.div`
  font-size: 2rem;
  color: #00f6ff;
  margin-bottom: 1rem;
`;

export const Label = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const Info = styled.p`
  color: #ccc;
  font-size: 1rem;
`;
export const InfoLink = styled.a`
  color: #ccc;
  font-size: 1rem;
  display: inline-block;
  margin-top: 0.4rem;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    color: #00f6ff;
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    word-break: break-word;
  }
`;
export const LightStyles = {
  Section: styled(Section)`
    background: #f7faff;
    color: #111;
  `,

  Title: styled(Title)`
    color: #0077ff;
    text-shadow: 0 2px 4px rgba(0, 119, 255, 0.1);
  `,

  ContactGrid: styled(ContactGrid)``, // No change needed

  Card: styled(Card)`
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid #cce3ff;
    box-shadow: 0 6px 20px rgba(0, 119, 255, 0.08);
    backdrop-filter: blur(8px);

    &:hover {
      background: linear-gradient(145deg, #e8f3ff, #ffffff);
      transform: translateY(-5px);
      box-shadow: 0 12px 30px rgba(0, 119, 255, 0.15);
    }
  `,

  IconWrap: styled(IconWrap)`
    color: #0077ff;
    text-shadow: 0 2px 4px rgba(0, 119, 255, 0.1);
  `,

  Label: styled(Label)`
    color: #111;
  `,

  Info: styled(Info)`
    color: #333;
  `,

  InfoLink: styled(InfoLink)`
    color: #0077cc;

    &:hover {
      color: #0055aa;
      text-decoration: underline;
    }
  `,
};

