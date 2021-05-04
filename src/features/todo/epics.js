import { ofType } from 'redux-observable';
import { concat, EMPTY, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { todoActions, utils } from '.';

export const loadTodosEpic = (action$) =>
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
              payload: utils.toDoMapper(res.response),
            };
          }),
          catchError(() => EMPTY)
        ),
        of(todoActions.setTodosLoading(false))
      )
    )
  );

export const updateTodosEpic = (action$, state$) =>
  action$.pipe(
    ofType(todoActions.SET_TODO_COMPLETE),
    tap((action) => console.warn(action)),
    mergeMap((action) =>
      concat(
        of(todoActions.setTodosLoading(true)),
        ajax({
          url: `https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io/patch/${action.payload.id}`,
          headers: {
            'X-Api-Key':
              'PMAK-5ef63db179d23c004de50751-10300736bc550d2a891dc4355aab8d7a5c',
            'Content-Type': 'application/json',
          },
          method: 'PATCH',
          body: {
            isComplete: action.payload.isComplete,
          },
        }).pipe(
          map(() => {
            return {
              type: todoActions.LOAD_TODOS_SUCCESS,
              payload: utils.toDoMapper(
                utils.toDoPatcher(state$.value.todo.results, action.payload)
              ),
            };
          }),
          catchError(() => EMPTY)
        ),
        of(todoActions.setTodosLoading(false))
      )
    )
  );
