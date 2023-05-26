import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardBox from "./GameCardBox";
import { Genre } from "../hooks/useGenre";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { games, error, isLoading } = useGames(selectedGenre);
  const renderSkeletons = () => {
    const skeletons = [];
    for (let i = 0; i < 20; i++) {
      skeletons.push(
        <GameCardBox key={i}>
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
        spacing={3}
        padding={3}
      >
        {isLoading && renderSkeletons()}
        {games.map((game) => (
          <GameCardBox key={game.id}>
            <GameCard game={game} />
          </GameCardBox>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
