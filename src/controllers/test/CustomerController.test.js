const SequelizeMock = require('sequelize-mock');
const Sequelize = require('sequelize');
const Customer = require('../Customer');
const DBConnectionMock = new SequelizeMock();

const MockData = [
    {
        ID: 1,
        NAME: 'test1',
    },
    {    ID: 2,
        NAME: 'test2',
    }
];

const UserMock = DBConnectionMock.define('Customer', MockData, {
    instanceMethods: {
        create: function () {
            console.log('---------------')
            return this.get('firstName') + ' ' + this.get('lastName');
        },
    }
});

const config = {};
var Controller = Customer.CustomerController;
Controller.database = UserMock;

let request = {};
let status = () => {
    return {send: (result) => {return result}}
};

let resource = {
    status,
};

describe('Testing Customer Model ', () => {

    it('should be able to get all data', async () => {

        let result = await Controller.read(request, resource);

        MockData.forEach(( element, index) => {
            expect(result['0'][index]).toBe(MockData[index]);
        }); 
    });

    /* It turned out that sequelize-mock doesn't have any "storage", (https://github.com/BlinkUX/sequelize-mock/issues/16)
        //so I can't mock inserting and getting by IDs

    it('should be able to get by ID', async () => {
        request = {
            params:{
                id: 2
            } 
        };

        let result2 = await Controller.readByID(request, resource);

        console.log(result2)

        expect(result2['0'][0]).toBe(MockData[1]);
    });

    it('should be able to create', async () => {
        let createRequest = {
            params:{
                'NAME': 'Name3',
                'CUSTOMER_ID': 3,
                'STREET_ADDRESS': 'STREET_ADDRESS3',
                'POSTAL_CODE': 'postal code3',
                'COUNTRY': 'COUNTRY3'
            } 
        };

        let result2 = await Controller.create(createRequest, resource);
        let result = await Controller.read(request, resource);
        console.log(result)

        expect(result2['0'][0]).toBe(MockData[1]);
    });*/
});
