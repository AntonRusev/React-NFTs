export const request = async (method, url, data) => {

    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };

            options.body = JSON.stringify(data);
        }

        const userData = JSON.parse(localStorage.getItem('userData'));
        
        if (userData) {
            options.headers = {
                ...options.headers,
                'Authorization': userData.accessToken,
            };
        }
    }

    try {
        const response = await fetch(url, options);

        if (response.ok !== true) {
            if (response.status === 403) {
                // sessionStorage.removeItem('userData'); TODO
            }
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status === 204) {
            return response;
        } else {
            const result = await response.json();
    
            return result;
        }
    

    } catch (err) {
        alert(err.message);
        throw err;
    }
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const patch = request.bind(null, 'PATCH');
export const del = request.bind(null, 'DELETE');
