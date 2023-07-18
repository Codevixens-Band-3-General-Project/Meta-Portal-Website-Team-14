import React from "react";
import styled from "styled-components";
import EnvatoLogo from "../assets/envato_market.svg";

const EnvatoHeader = () => (
  <EnvatoStyle>
    <div
      className="preview__header"
      data-view="ctaHeader"
      data-item-id="38941507">
      <div className="preview__envato-logo">
        <a
          className="header-envato_market"
          href="https://themeforest.net/item/metaportal-nft-portfolio-and-landing-page/38941507">
          Envato Market
        </a>
      </div>

      <div id="js-preview__actions" className="preview__actions">
        <div className="preview__action--buy">
          <a
            className="header-buy-now e-btn--3d -color-primary"
            href="https://themeforest.net/checkout/from_item/38941507?license=regular&amp;support=bundle_6month">
            Buy now
          </a>
        </div>
      </div>
    </div>
  </EnvatoStyle>
);

const EnvatoStyle = styled.div`
  .preview__header {
    font-size: 12px;
    height: 54px;
    background-color: #262626;
    z-index: 100;
    line-height: 54px;
    margin-bottom: 1px;
    border-bottom: 1px solid #000;
  }

  .preview__envato-logo {
    float: left;
    padding: 0 20px;
  }
  .preview__actions {
    float: right;
  }
  @media (max-width: 568px) {
    .preview__envato-logo {
      padding: 0 10px;
    }
  }
  .preview__envato-logo a {
    display: inline-block;
    position: absolute;
    top: 18px;
    text-indent: -9999px;
    height: 18px;
    width: 152px;
    background: url(${EnvatoLogo});
    background-size: 152px 18px;
  }
  @media (max-width: 568px) {
    .preview__envato-logo a {
      position: absolute;
      top: 20px;
      left: 15px;
      height: 14px;
      width: 118px;
      background-size: 118px 14px;
    }
  }
  .preview__action--buy {
    display: inline-block;
    padding: 0 20px;
  }
  @media (max-width: 568px) {
    .preview__action--buy {
      padding: 0 10px;
    }
  }
  .e-btn,
  .e-btn--outline,
  .e-btn--3d {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    margin: 0;
    border: none;
    border-radius: 4px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }
  .e-btn.-color-default,
  .e-btn,
  .e-btn--outline,
  .e-btn--3d {
    background-color: gray;
    color: white;
  }
  .e-btn--3d {
    font-size: 14px;
    padding: 5px 20px;
    line-height: 1.5;
  }
  .e-btn--3d {
    -webkit-box-shadow: 0 2px 0 #545454;
    box-shadow: 0 2px 0 #545454;
    position: relative;
  }
  .e-btn.-color-primary,
  .-color-primary.e-btn--outline,
  .-color-primary.e-btn--3d {
    background-color: #82b440;
  }
  .e-btn--3d.-color-primary {
    -webkit-box-shadow: 0 2px 0 #6f9a37;
    box-shadow: 0 2px 0 #6f9a37;
    position: relative;
  }
`;

export default EnvatoHeader;
