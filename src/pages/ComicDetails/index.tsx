import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { comicsOperations, hooks } from '../../state';

import * as S from './styles';

export const ComicDetails = () => {
  const params = useParams();
  const { useAppDispatch } = hooks;
  const dispatch = useAppDispatch();
  const { getComicDetails } = comicsOperations;

  const [comic, setComic] = useState<any>();
  const [writer, setWriter] = useState<any>();
  const [penciler, setPenciler] = useState<any>();
  const [coverArtist, setCoverArtist] = useState<any>();
  const [characters, setCharacters] = useState<any>([]);

  useEffect(() => {
    if (params.id) {
      dispatch(getComicDetails(params.id)).then((response: any) =>
        setComic(response.payload.data.data.results[0])
      );
    }
  }, [dispatch, getComicDetails, params]);

  useEffect(() => {
    if (comic) {
      setWriter(
        comic.creators.items.find((creator: any) => creator.role === 'writer')
      );
      setPenciler(
        comic.creators.items.find((creator: any) => creator.role === 'penciler')
      );
      setCoverArtist(
        comic.creators.items.find(
          (creator: any) => creator.role === 'penciler (cover)'
        )
      );
      setCharacters(comic.characters.items);
    }
  }, [comic]);

  return (
    <S.ComicDetailsWrapper>
      {comic && (
        <S.ComicDetails>
          <div>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt=''
            />
          </div>
          <div>
            <div>
              <h1>{comic.title}</h1>
              <h2>Published:</h2>
              <p>{comic.dates[0].date}</p>
            </div>
            <div>
              {writer && (
                <>
                  <h2>Writer:</h2>
                  <p>{writer.name}</p>
                </>
              )}
              {penciler && (
                <>
                  <h2>Penciler:</h2>
                  <p>{penciler.name}</p>
                </>
              )}
              {coverArtist && (
                <>
                  <h2>Cover Artist:</h2>
                  <p>{coverArtist.name}</p>
                </>
              )}
            </div>
            {characters.length > 0 && (
              <>
                <h2>Characters</h2>
                {characters.map((character: any) => (
                  <p key={character.name}>{character.name}</p>
                ))}
              </>
            )}
          </div>
        </S.ComicDetails>
      )}
    </S.ComicDetailsWrapper>
  );
};
