// Promise
function myAsyncFunction(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        // Some asynchronous operation
        setTimeout(() => {
            // Successful operation resolves promiseCheck
            const success = true;

            if (success) {
                // Resolve the promise with the operation result if the operation was successful
                resolve(
                    `The result is success`
                );
            } else {
                const rejectCode: number = 404;
                const rejectMessage: string = `The result is failed and your operation result is ${rejectCode}`;
                // Reject the promise with the operation result if the operation failed
                reject(new Error(rejectMessage));
            }
        }, 2000);
    });
}

// Use the promise
myAsyncFunction()
    .then((result) => {
        console.log(result); // output : The result is success 
    })
    .catch((error) => {
        console.error(error); // output : The result is failed and your operation result is 404
    });
//--------OR-----------

// const caller = async () => {
//     const response = await myAsyncFunction();
//     console.log(response);
// }
// caller();
console.log("Running..."); //-> This will be printed first


interface User {
    id: number;
    name: string;
    email: string;
}

const fetchApi = async (): Promise<void> => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(
                `Failed to fetch users (HTTP status code: ${response.status})`
            );
        }

        const data: User[] = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

fetchApi();

// A callback is a function that is passed as an argument to another function

type UserWithoutId = {
    name: string;
    email: string;
};

const fetchUserData = async (
    id: number,
    callback: (error: Error | null, user: UserWithoutId | null) => void
) => {
    const api = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(api)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Network response was not ok.");
            }
        })
        .then((data) => {
            const user: UserWithoutId = {
                name: data.name,
                email: data.email,
            };
            callback(null, user);
        })
        .catch((error) => {
            callback(error, null);
        });
};

// Usage of fetchUserData with a callback function
fetchUserData(1, (error, user) => {
    if (error) {
        console.error(error);
    } else {
        console.log(user);
    }
});

//-------------------OR--------------------------------
const solve = async (
    id: number,
    callback: (error: Error | null, user: UserWithoutId | null) => void
) => {
    try {
        const api = `https://jsonplaceholder.typicode.com/users/${id}`;
        const response = await fetch(api);
        const data = await response.json();
        const user: UserWithoutId = {
            name: data.name,
            email: data.email,
        };
        callback(null, user);
    }
    catch (error) {
        callback(error as Error,null);
    }
}
solve(1, (error, user) => {
    if (error) {
        console.error(error);
    } else {
        console.log(user);
    }
});