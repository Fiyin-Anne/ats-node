class ATSRouter {

    constructor(data) {
        this.router = data.router
        this.path = data.path;
        this.middlewares = data.middlewares || [];
        this.action = data.action;
        this.method = data.method;


        switch (this.method) {
            case 'post':
                return this.makePostRequest(this.path, this.middlewares, this.action);
            case 'get':
                this.makeGetRequest(this.path, this.middlewares, this.action);
                break;
            case 'put':
                this.makePutRequest(this.path, this.middlewares, this.action);
                break;
            case 'delete':
                this.makeDeleteRequest(this.path, this.middlewares, this.action);
                break;
            default:
                this.makeGetRequest(this.path, this.middlewares, this.action);


        }

    }
    
    makePostRequest(path, middlewares = [], action) {
        this.router.post(path, ...middlewares, action);
        return this.router;
    }

    makeGetRequest(path, middlewares, action) {
        this.router.get(path, ...middlewares, action);
        return this.router;
    }

    makePutRequest(path, middlewares, action) {
        this.router.put(path, ...middlewares, action);
        return this.router;
    }

    makeDeleteRequest(path, middlewares, action) {
        this.router.delete(path, ...middlewares, action);
        return this.router;
    }

    
}

// const atsRouter = new ATSRouter()
module.exports = ATSRouter;