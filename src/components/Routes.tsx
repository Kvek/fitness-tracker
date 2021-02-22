import { useState } from "react";

import { Dashboard } from "components/Dashboard/Dashboard";
import { Login } from "components/Login/Login";
import Navbar from "components/Navbar";

import { Router } from "@reach/router";

import { styled } from "global-theme";

const RoutesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const RouterContainer = styled.div`
  padding: 5px 15px;
  height: calc(100% - 30px);
`;

export const Routes = () => {
  const [token, setToken] = useState<string | null>(null);

  const PrivateRoute = ({ path }: { path: string }) => {
    if (!token) {
      return <Login setToken={setToken} />;
    }
    return <Dashboard path={path} />;
  };

  return (
    <RoutesContainer>
      <Navbar />

      <RouterContainer>
        <Router style={{ height: "100%" }}>
          <PrivateRoute path="/" />
        </Router>
      </RouterContainer>
    </RoutesContainer>
  );
};
