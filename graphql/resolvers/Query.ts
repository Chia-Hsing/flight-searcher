import Amadeus from 'amadeus'

type LocationsArgs = {
    keyword: string
}

export const Query = {
    locations: async (_parent: any, { keyword }: LocationsArgs, { amadeus }: any) => {
        const res = await amadeus.referenceData.locations.get({
            keyword,
            subType: Amadeus.location.any,
            view: 'LIGHT',
        })

        return res.data
    },
}
