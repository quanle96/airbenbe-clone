import styled from 'styled-components';

export const SpecialWraper = styled.div`
  & {
    padding: 64px 0px 80px;
    background-color: black;
    height: 120vh;
    color: white;
    padding-right: 80px !important;
    padding-left: 80px !important;
  }

  @media (min-width: 744px) {
    & {
      width: 80% !important;
    }
  }
`;
export const DescriptionContainer = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    padding-bottom: 35px;
  }
  .title {
    font-size: 32px !important;
    line-height: 26px !important;
    color: rgb(255, 255, 255) !important;
    font-weight: 800 !important;
  }

  .description {
    font-size: 16px !important;
    line-height: 20px !important;
    color: rgb(255, 255, 255) !important;
    margin-top: 4px !important;
  }

  @media (min-width: 1128px) {
    .title {
      font-size: 32px !important;
      line-height: 36px !important;
    }
  }

  @media (min-width: 950px) {
    .description {
      max-width: 864px !important;
      width: 60% !important;
    }
  }

  @media (min-width: 744px) {
    .title {
      font-size: 26px !important;
      line-height: 30px !important;
    }
    .description {
      width: 80% !important;
    }
  }
`;
export const SpecialButton = styled.div`
  cursor: pointer !important;
  display: inline-block !important;
  position: relative !important;
  text-align: center !important;
  width: auto !important;
  touch-action: manipulation !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif !important;
  font-size: 14px !important;
  line-height: 18px !important;
  font-weight: 600 !important;
  padding-top: 7px !important;
  padding-bottom: 7px !important;
  padding-left: 15px !important;
  padding-right: 15px !important;
  color: rgb(255, 255, 255) !important;
  margin: 0px !important;
  text-decoration: none !important;
  border-radius: 8px !important;
  border-width: 1px !important;
  border-style: solid !important;
  outline: none !important;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s,
    -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
  border-color: rgb(255, 255, 255) !important;
  background: transparent !important;
`;
