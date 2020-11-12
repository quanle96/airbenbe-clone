import styled from 'styled-components';

export const CellStyled = styled.div`
  .card {
    border-radius: 15px;
    overflow: hidden;
    height: inherit !important;
    background: none;
  }

  .grid-wraper {
  }

  .grid-wraper .row {
    height: 50%;
  }

  .grid-wraper > .col-6 {
    height: inherit !important;

    width: 70vh;
  }

  .col-12 > .card {
    bottom: 0px;
    position: absolute;
  }

  .card-body {
    height: 76px;
    bottom: 0px !important;
    left: 0px !important;
    position: absolute !important;
    right: 0px !important;
    background-color: rgb(34, 34, 34);
  }

  .image-card {
    height: inherit !important;

    object-fit: cover;
  }

  .image-type1 {
  }

  .image-type2 {
  }

  .image-type3 {
  }

  @media (min-width: 1128px) {
  }

  @media (min-width: 950px) {
  }

  @media (min-width: 744px) {
  }
`;
