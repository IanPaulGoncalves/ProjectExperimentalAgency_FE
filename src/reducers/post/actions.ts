import { getPostsService, getPostsDetailService } from '../../services/postService';

export const GET_POST = '@post/GET_POST';
export const GET_POST_DETAIL = '@post/GET_POST_DETAIL';

export function getPost() {
  return async (dispatch: any) => {
    const post = await getPostsService();
    dispatch({
      type: GET_POST,
      payload: {
        post
      }
    });
  };
}

export function getPostDetail(id: number) {
  return async (dispatch: any) => {
    const postFilter = await getPostsDetailService(id);
    dispatch({
      type: GET_POST_DETAIL,
      payload: {
        postFilter
      }
    });
  };
}

