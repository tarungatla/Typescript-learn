var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// Promise
function myAsyncFunction() {
    return new Promise(function (resolve, reject) {
        // Some asynchronous operation
        setTimeout(function () {
            // Successful operation resolves promiseCheck
            var success = true;
            if (success) {
                // Resolve the promise with the operation result if the operation was successful
                resolve("The result is success");
            }
            else {
                var rejectCode = 404;
                var rejectMessage = "The result is failed and your operation result is ".concat(rejectCode);
                // Reject the promise with the operation result if the operation failed
                reject(new Error(rejectMessage));
            }
        }, 2000);
    });
}
// Use the promise
myAsyncFunction()
    .then(function (result) {
    console.log(result); // output : The result is success 
})
    .catch(function (error) {
    console.error(error); // output : The result is failed and your operation result is 404
});
//--------OR-----------
// const caller = async () => {
//     const response = await myAsyncFunction();
//     console.log(response);
// }
// caller();
console.log("Running...");
var fetchApi = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/users")];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error("Failed to fetch users (HTTP status code: ".concat(response.status, ")"));
                }
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                console.log(data);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error(error_1);
                throw error_1;
            case 4: return [2 /*return*/];
        }
    });
}); };
fetchApi();
var fetchUserData = function (id, callback) { return __awaiter(_this, void 0, void 0, function () {
    var api;
    return __generator(this, function (_a) {
        api = "https://jsonplaceholder.typicode.com/users/".concat(id);
        fetch(api)
            .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error("Network response was not ok.");
            }
        })
            .then(function (data) {
            var user = {
                name: data.name,
                email: data.email,
            };
            callback(null, user);
        })
            .catch(function (error) {
            callback(error, null);
        });
        return [2 /*return*/];
    });
}); };
// Usage of fetchUserData with a callback function
fetchUserData(1, function (error, user) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(user);
    }
});
//-------------------OR--------------------------------
var solve = function (id, callback) { return __awaiter(_this, void 0, void 0, function () {
    var api, response, data, user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                api = "https://jsonplaceholder.typicode.com/users/".concat(id);
                return [4 /*yield*/, fetch(api)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                user = {
                    name: data.name,
                    email: data.email,
                };
                callback(null, user);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                callback(error_2, null);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
solve(1, function (error, user) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(user);
    }
});
