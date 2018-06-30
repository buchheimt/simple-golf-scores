import { css } from 'emotion';

const COLORS = {
  light: '#cad2c5',
  light_medium: '#84a98c',
  medium: '#52796f',
  dark_medium: '#354f52',
  dark: '#2f3e46'
}

export const scorecard = css`
  width: 75%;
  margin: 50px auto 0;
  height: 400px;
  box-shadow: 1px 3px 3px 3px darkgray;
  background-color: ${COLORS.medium};
  border-radius: 5px;
`;
  
export const scorecardHeader = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.light_medium};
  padding: 15px 0;
`;

export const courseName = css`
  font-size: 16px;
  color: white;
`;