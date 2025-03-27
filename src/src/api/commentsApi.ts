import { baseApi } from ".";

export type CommentData = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

const commentsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getComments: build.query<CommentData[], void>({
            query: () => '/comments',
            /* transformResponse: (res: CommentData[] ) => {
                console.log(res)
                return res.map((el) => fromTreeToArr(el)).flat()
            } */
        })
    }),
    overrideExisting: true,
})

export const { useGetCommentsQuery } = commentsApi;