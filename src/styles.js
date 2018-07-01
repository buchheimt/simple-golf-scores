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
  box-shadow: 1px 3px 3px 3px #222;
  background-color: ${COLORS.light};
`;
  
export const scorecardHeader = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.light_medium};
  padding: 15px 0;
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
  color: white;
`;

export const courseName = css`
  font-size: 24px;
  color: white;
`;

export const holesContainer = css`
  display: flex;
`;

export const holeColumn = css`
  border: 1px solid #444;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const highlightedHoleCol = css`
  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

export const yardageRow = css`
  padding: 4px;
`;

export const scoreCell = css`
  border-top: 1px solid #444;
  padding: 4px 2px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const summaryCell = css`
  border-top: 1px solid #444;
  padding: 4px 2px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aab2a5;
`

export const summaryYardage = css`
  padding: 4px 2px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aab2a5;
`

export const nameInput = css`
  border-top: 1px solid #444;
  padding: 4px 2px;
  width: 150px;
  background: ${COLORS.light};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-top: 1px solid #444;

  :focus {
    background-color: #aab2a5;
  }
`

export const noteModal = css`
  position: absolute;
  width: 100%;
  height: 100%;
  background: pink;
`