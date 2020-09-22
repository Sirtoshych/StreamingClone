import * as Immutable from 'immutable'

export const MoviesStateRecord = Immutable.Record(
    {
        movies: [],
        isFetching: false,
        search: '',
        favorites: [],
        viewFavorites: false,
    },
    'MoviesStateRecord'
)
