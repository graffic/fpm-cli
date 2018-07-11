const axios = require('axios')

const BASE_URL = 'https://jsonplaceholder.typicode.com'

/**
 * Get the data property of an object
 * @param {Object} param0
 */
const getData = ({data}) => data

/**
 * Get all posts
 * @returns {Promise<Array<Object>>}
 */
const getPosts = async () => axios.get(`${BASE_URL}/posts`).then(getData)

/**
 * Get comments for a specific post Id.
 * @param {number} postId
 * @returns {Promise<Array<Object>>}
 */
const getComments = async (postId) => axios.get(`${BASE_URL}/posts/${postId}/comments`).then(getData)

module.exports = {getPosts, getComments}
