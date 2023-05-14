import {connect} from 'mongoose'

try {
    connect(process.env.MONGO_URI || 'localhost:27017')
    console.log('MongoDB connected')
} catch (error) {
    console.log(error)
    process.exit(1)
}