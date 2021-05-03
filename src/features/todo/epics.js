import { ofType } from 'redux-observable';
import { concat, EMPTY, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { todoActions } from '.';

export const updateSearchEpic = (action$) =>
  action$.pipe(
    ofType(todoActions.LOAD_TODOS),
    mergeMap(() =>
      concat(
        of(todoActions.setTodosLoading(true)),
        ajax({
          url: 'https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io/get',
          headers: {
            'X-Api-Key':
              'PMAK-5ef63db179d23c004de50751-10300736bc550d2a891dc4355aab8d7a5c',
          },
          method: 'GET',
        }).pipe(
          map((res) => {
            return {
              type: todoActions.LOAD_TODOS_SUCCESS,
              payload: res.response,
            };
          }),
          catchError(() => EMPTY)
        ),
        of(todoActions.setTodosLoading(false))
      )
    )
  );
