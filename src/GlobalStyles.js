import React from "react";
import { Global, css } from "@emotion/react";

function GlobalStyles({ theme }) {
  return (
    <Global
      styles={() => css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: "Arima Madurai", "sans-serif";
          background-color:${theme.colors.background}};
          overflow:hidden;
          height:100vh;
        }

      }
      `}
    />
  );
}

export default GlobalStyles;
