import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardBox from "./GameCardBox";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const renderSkeletons = () => {
    const skeletons = [];
    for (let i = 0; i < 20; i++) {
      skeletons.push(
        <GameCardBox>
          <GameCardSkeleton key={i} />
        </GameCardBox>
      );
    }
    return skeletons;
  };

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={3}
      >
        {isLoading && renderSkeletons()}
        {games.map((game) => (
          <GameCardBox>
            <GameCard key={game.id} game={game} />
          </GameCardBox>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
