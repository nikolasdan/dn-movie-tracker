import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { UnorderedList, ListItem, Link, Progress, Text, Center } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { buildSearchMovieUrl } from '../connectors/tmdb';
import { getYear } from '../utils';
import "@fontsource/montserrat"


export default function Search() {
  const { terms } = useParams();
  const { data, error, isIdle, isLoading, isError } = useQuery(
    ['search', terms],
    () => fetch(buildSearchMovieUrl(terms)).then(r => r.json()),
    { enabled: !!terms },
  );

  if (isIdle) {
    return <Center><Text padding="15px" fontFamily="Montserrat">Type the name of a movie!</Text></Center>;
  }
  if (isLoading) {
    return <Progress size="xs" isIndeterminate />;
  }
  if (isError) {
    return (
      <Text>
        Error fetching movies for {terms}: {JSON.stringify(error)}
      </Text>
    );
  }
  if (!data.results.length) {
    return <Text>No results</Text>;
  }
  return (
    <UnorderedList >
      {data.results.map(({ id, title, release_date }) => (
        <ListItem padding="3px" key={id}>
          <Link as={RouterLink} to={`/movies/${id}`}>
            <Text as="span" _hover={{ color: "green.400" , transition: "0.3s" }} fontFamily="montserrat">{title} </Text>
            <Text as="span" fontFamily="montserrat" color="GrayText">
              {getYear(release_date)}
            </Text>
          </Link>
        </ListItem>
      ))}
    </UnorderedList>
  );
}
