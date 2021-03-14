import React from 'react'
import axios from 'axios'

const baseUrl = "https://localhost:44355/api/"
const apikey = "MySecretkey"

function Api(url = baseUrl) {
    return {
        fetchAll: (apiMethod) => axios.get(url + apiMethod, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                ApiKey: ` ${apikey}`,
            },
        }),
        fetchById: (apiMethod, id) => axios.get(url + apiMethod + id, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                ApiKey: ` ${apikey}`,
            },
        }),
        create: (apiMethod, data) => axios.post(url + apiMethod, data, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                ApiKey: ` ${apikey}`,
            },
        }),
        update: (apiMethod, data) => axios.put(url + apiMethod, data, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                ApiKey: ` ${apikey}`,
            },
        }),
        delete: (apiMethod, id) => axios.delete(url + apiMethod + id, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                ApiKey: ` ${apikey}`,
            },
        })

    }
}

export default Api
