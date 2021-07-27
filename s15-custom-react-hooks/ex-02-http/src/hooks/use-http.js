import { useState, useCallback } from 'react'

const useHttpHook = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true)
        setError(null)

        //'https://react-udemy-http-1fbf3-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body
                    ? JSON.stringify(requestConfig.body)
                    : null
            })

            if (!response.ok) {
                throw new Error('Request failed!')
            }
            const data = await response.json()
            applyData(data)
        } catch (err) {
            setError(err.message || 'Something went wrong!')
        }
        setIsLoading(false)
    }, [])

    return {
        isLoading,
        error,
        sendRequest
        // Same as:
        /*
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest
        */
    }
}

export default useHttpHook
