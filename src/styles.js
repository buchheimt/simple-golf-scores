import { css } from 'emotion';

const COLORS = {
  light: '#cad2c5',
  light_medium: '#84a98c',
  medium: '#52796f',
  dark_medium: '#354f52',
  dark: '#2f3e46'
}

export const scorecard = css`
  display: inline-block;
  margin: 50px auto 0;
  height: 400px;
  box-shadow: 1px 3px 3px 3px #444;
  background-color: ${COLORS.light};
  border-radius: 5px;
`;
  
export const scorecardHeader = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.light_medium};
  padding: 15px 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const holeRow = css`
  background-color: ${COLORS.dark_medium};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  width: 100%;
`;

export const parRow = css`
  background-color: ${COLORS.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  width: 100%;
`

export const courseName = css`
  font-size: 16px;
  color: white;
`;

export const holesContainer = css`
  display: flex;
  border: 1px solid orange;
`

export const holeColumn = css`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`