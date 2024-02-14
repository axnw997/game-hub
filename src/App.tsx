import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `
          "nav"
          "main"
          `,
          sm: `
          "nav"
          "main"
          `,
          md: `
          "nav nav"
          "aside main"
          `,
          lg: `
          "nav nav"
          "aside main"
          `,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="md">
          <GenreList></GenreList>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
