import { css } from 'styled-components';

import { fonts } from './theme';

const { bold, semibold, medium, regular } = fonts;

// Font Style
const headline_01 = css`
  font-weight: ${bold};
  font-size: 22px;
  line-height: 32px;
  letter-spacing: -.25px;
`;

const headline_02 = css` 
  font-weight: ${semibold};
  font-size: 22px;
  line-height: 32px;
  letter-spacing: -.25px;
`;

const headline_03 = css` 
  font-weight: ${semibold};
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -.25px;
`;

const headline_04 = css` 
  font-weight: ${semibold};
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -.25px;
`;

const body_01 = css` 
  font-weight: ${medium};
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -.25px;
`;

const body_02 = css`  
  font-weight: ${medium};
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -.25px;
`;

const body_03 = css` 
  font-weight: ${medium};
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -.25px;
`;

const body_04 = css` 
  font-weight: ${medium};
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -.25px;
`;

const body_05 = css` 
  font-weight: ${medium};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -.25px;
`;

const body_06 = css` 
  font-weight: ${medium};
  font-size: 12px;
  line-height: 22px;
  letter-spacing: -.25px;
`;

const body_07 = css` 
  font-weight: ${regular};
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -.25px;
`;

const body_08 = css` 
  font-weight: ${regular};
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -.25px;
`;

const body_09 = css` 
  font-weight: ${regular};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -.25px;
`;

const body_10 = css` 
  font-weight: ${regular};
  font-size: 12px;
  line-height: 22px;
  letter-spacing: -.25px;
`;

const mixins = {
  fontStyle: {
    headline_01,
    headline_02,
    headline_03,
    headline_04,
    body_01,
    body_02,
    body_03,
    body_04,
    body_05,
    body_06,
    body_07,
    body_08,
    body_09,
    body_10,
  },
};

export default mixins;
