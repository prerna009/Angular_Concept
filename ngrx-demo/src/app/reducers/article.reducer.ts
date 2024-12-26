import { createReducer, on } from "@ngrx/store";
import { Article } from "../models/article";
import { addArticle } from "../actions/article.action";

export const initialState : Article[]= [];

// export function ArticleReducer(state=initialState,{a}):Article[]{
//     switch(action.type){
//         case ArticleActionType.ADD_ITEM:
//             return [...state,payload];
            
//         default:
//             return state;
//     }
// }

export const ArticleReducer = createReducer(
    initialState,  // Initial state for articles
    on(addArticle, (state, {payload}) => [...state, payload])  // Handle AddArticleAction
);