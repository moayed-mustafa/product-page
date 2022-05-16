
import React from "react";
import Layout from "src/Layout/Layout"
import { useTheme } from "@emotion/react";

function App() {

  const theme = useTheme()
  console.log('Current theme: ', theme)
  return (
      <Layout>
        <div>
        </div>
    </Layout>
  );
}

export default App;
