const company = require('../controllers/company');
const express = require('express');
const router = express.Router();
const ATSRouter = require('./index');

const handler_hash = { 
    "/api/company/new": {
        path: "/new",
        middleware: [],
        method: 'post',
        action: company.addNewCompany
    },

    "/api/company/update": {
        path: "/api/add",
        middleware: [],
        method: 'post',
        action: company.addNewCompany
    }
}


const companyHandler = () => {

    let newrouter = router;
    for (const item in handler_hash) {

        let handler_item = handler_hash[item];
        handler_item.router = newrouter;
        newrouter = new ATSRouter(handler_item); //atsrouter returns the router object
        // console.log("HERE", newrouter)
    }

    return newrouter;
}

module.exports = companyHandler();