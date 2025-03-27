import { baseApi } from ".";

export type PostData = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const postsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPosts: build.query<PostData[], void>({
            query: () => '/posts',
            /* transformResponse: (res: CommentData[] ) => {
                console.log(res)
                return res.map((el) => fromTreeToArr(el)).flat()
            } */
        })
    }),
    overrideExisting: true,
})

export const { useGetPostsQuery } = postsApi;