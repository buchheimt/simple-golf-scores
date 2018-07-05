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
  text-transform: capitalize;
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
  justify-content: space-around;
  flex-grow: 1;
  position: relative;
`

export const infoCol = css`
  display: inline-block;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 48px;

  p {
    font-size: 16px;
    align-self: flex-end;
  }
`

export const inputCol = css`
  display: inline-block;
  width: 50%;
  display: flex;
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
  font-size: 20px;
`

export const parLabel = css`
  
`

export const backsideInfoLabel = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #444;
  margin: 0 0 4px;
  padding-bottom: 4px;

  p {
    font-size: 20px;
  }
`

export const backsidePlayerContainer = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 48px;
  width: 100%;

  div {
    width: 100%;
    padding: 8px 0;
    display: flex;
    justify-content: space-between;

    span {
      text-transform: capitalize;
    }
  }
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
  right: 80px;
`

export const upload = css`
  position: absolute;
  top: 24px;
  right: 4px;
`

export const backIconStyles = css`
  cursor: pointer;
  position: absolute;
  left: 16px;
`

export const downloadIconStyles = css`
  cursor: pointer;
  position: absolute;
  right: 64px;
`

export const uploadHidden = css`
  width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;

export const uploadIconStyles = css`
  cursor: pointer;
  position: absolute;
  right: 16px;
`

export const calculateColor = (score, par) => {
  if (!score) return "#cad2c5";

  switch(true) {
    case score - par >= 2:
      return "rgba(238, 90, 0, 0.65)";
    case score - par === 1:
      return "rgba(247, 185, 66, 0.65)";
    case score - par === -1:
      return "rgba(174, 212, 246, 0.65)";
    case score - par <= -2:
      return "rgba(50, 177, 228, 0.65)";
    default:
      return "#cad2c5"
  }
}

export const generateScoreCellStyles = (hole, player) => css`
  ${scoreCell};
  background-color: ${calculateColor(hole[player], hole.par)}
`