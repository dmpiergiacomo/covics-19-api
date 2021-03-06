export default {
    server: {
        port: process.env.PORT || 3000
    },
    mongodb: {
        uri: process.env.DB_URI || 'mongodb://localhost:27017',
        db: 'covics-19',
        collection_predictions: 'predictions',
        collection_distributions: 'distributions'
    }
};
