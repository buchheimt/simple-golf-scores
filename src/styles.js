import { css } from 'emotion';

const COLORS = {
  light: '#cad2c5',
  light_medium: '#84a98c',
  medium: '#52796f',
  dark_medium: '#354f52',
  dark: '#2f3e46'
}

export const overlay = css`
  width: 100%;
  height: 100%;
  background-color: rgba(50, 50, 50, .7);
  padding: 0 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const scorecard = css`
  display: inline-block;
  margin: 0 auto;
  box-shadow: 1px 3px 3px 3px #222;
  background-color: ${COLORS.light};
  min-width: 942.5px;
  min-height: 367px;
  display: flex;
  flex-direction: column;
`;
  
export const scorecardHeader = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
`;

export const highlightedHoleCol = css`
  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const yardageRow = css`
  padding: 8px 4px 4px;
  height: 36px;
`;

export const noteCell = css`
  padding: 8px 4px 4px;
  height: 36px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const scoreCell = css`
  border-top: 1px solid #444;
  padding: 4px 2px;
  width: 100%;
  background: ${COLORS.light};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-top: 1px solid #444;
  height: 36px;
  cursor: pointer;
  text-align: center;
`

export const summaryCell = css`
  border-top: 1px solid #444;
  padding: 4px 2px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aab2a5;
  height: 36px;
  
  :last-child {
    border: none;
  }
`

export const summaryYardage = css`
  padding: 4px 2px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aab2a5;
  height: 36px;
`

export const nameInput = css`
  border-top: 1px solid #444;
  padding: 4px 2px 4px 8px;
  width: 150px;
  background: ${COLORS.light};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-top: 1px solid #444;
  height: 36px;
  cursor: pointer;

  :focus {
    background-color: #aab2a5;
  }
`

export const noteModal = css`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(50, 50, 50, .75);
`

export const backsideWrapper = css`
  display: flex;
  flex-grow: 1;
  position: relative;
`

export const infoCol = css`
  display: inline-block;
  width: 40%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
`

export const inputCol = css`
  display: inline-block;
  width: 40%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 48px;
  justify-content: center;
  align-items: center;
`

export const notes = css`
  min-height: 200px;
  width: 100%;
  background-color: ${COLORS.light};
  padding: 8px;
  
  :focus {
    background-color: #aab2a5;
  }
`
export const notesLabel = css`
  width: 100%;
  text-align: left;
  padding-bottom: 4px;
  margin-bottom: 16px;
  border-bottom: 1px solid #444;
`

export const backButton = css`
  padding: 4px;
  cursor: pointer;
  position: absolute;
  top: 8px;
  left: 8px;
`

export const download = css`
  position: absolute;
  top: 4px;
  right: 4px;
`