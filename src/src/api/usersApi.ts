import { baseApi } from ".";

type AddressData = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string,
    }
}

type CompanyData = {
    name: string,
    catchPhrase: string,
    bs: string,
}

type UserData = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: AddressData,
    phone: string,
    website: string,
    company: CompanyData,
}

const usersApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query<UserData[], void>({
            query: () => '/users',
            /* transformResponse: (res: CommentData[] ) => {
                console.log(res)
                return res.map((el) => fromTreeToArr(el)).flat()
            } */
        })
    }),
    overrideExisting: true,
})

export const { useGetUsersQuery } = usersApi;