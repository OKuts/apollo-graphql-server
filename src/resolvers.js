const resolvers = {
    Query: {
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTracksForHome();
        },
        track: async (_, {id}, {dataSources}) => {
            const track = await dataSources.trackAPI.getTrack(id);
            const modules = await dataSources.trackAPI.getTrackModules(id);
            return {...track, modules};
        },
    },
    Mutation: {
        incrementTrackViews: async (_, { id }, { dataSources }) => {
            const track = await dataSources.trackAPI.incrementTrackViews(id);
            return {
                code: 200,
                success: true,
                message: `Successfully incremented number of views for track ${id}`,
                track,
            };
        },
    },
    Track: {
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        }
    }
};

module.exports = resolvers;
