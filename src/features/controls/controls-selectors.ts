import { RootState } from '../../store';

export const selectCategory = (state: RootState) => state.controls.category;
export const selectSearch = (state: RootState) => state.controls.search;
