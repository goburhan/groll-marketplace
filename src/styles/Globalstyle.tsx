import { createGlobalStyle, withTheme } from 'styled-components';
import ThemeProps from './themes';

export const screens = {
    mobile: '586px',
    tablet: '1024px',
    bigscreen: '2000px',
};

const GlobalStyle = createGlobalStyle<{ theme: ThemeProps }>`
@tailwind base;
@tailwind components;
@tailwind utilities;

  * {
font-family: "Poppins", normal;

}
  body {

    margin-top: 110px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-top: 80px;
   
    }

    -webkit-font-smoothing: antialiased;  
    -moz-osx-font-smoothing: grayscale;
    background:${({ theme }) => theme.background};
  }
  
  .slick-dotted.slick-slider {
    margin-bottom: 0px;
  }
  
  .slick-dots {
    position: absolute;
    bottom: 30px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
  
    list-style: none;
  
    text-align: center;
  }
  .top-slider .slick-dots {
    bottom: -17px;
  }
  .slick-dots li {
    position: relative;
  
    display: inline-block;
  
    width: 28px;
    height: 20px;
    margin: 0 3px;
    padding: 0;
  
    cursor: pointer;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;
  
    display: block;
  
    width: 20px;
    height: 20px;
    padding: 5px;
  
    cursor: pointer;
  
    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-family: 'slick';
    font-size: 12px;
    line-height: 20px;
  
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
  
    content: url(images/icons/SliderIcon.svg);
    text-align: center;
      
    opacity: 0.35;
    color: #484d57;
  
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #b1b5c4;
  }
  

`;

export default withTheme(GlobalStyle);
