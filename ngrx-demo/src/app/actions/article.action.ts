import { Action, createAction, props } from "@ngrx/store";
import { Article } from "../models/article";


export const addArticle=createAction(
    '[ARTICLE] Add ARTICLE',
    props<{payload:Article}>()
)

// export class AddArticleAction implements Action{
//     readonly type=ArticleActionType;
//     constructor(public payload:Article){};
// }

// export type ArticleAction=AddArticleAction;