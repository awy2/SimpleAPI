const SequelizeMock = require('sequelize-mock');
const Sequelize = require('sequelize');
const CustomerAddress = require('../CustomerAddress');
const DBConnectionMock = new SequelizeMock();

const MockData = [
    {
        ID: 1,
        NAME: 'Name1',
        CUSTOMER_ID: 1,
        STREET_ADDRESS: 'STREET_ADDRESS1',
        POSTAL_CODE: 'postal code1',
        COUNTRY: 'COUNTRY1'
    },
    {            
        ID: 2,
        NAME: 'Name2',
        CUSTOMER_ID: 2,
        STREET_ADDRESS: 'STREET_ADDRESS2',
        POSTAL_CODE: 'postal code2',
        COUNTRY: 'COUNTRY2'
    }
];

const UserMock = DBConnectionMock.define('Customer_Address', MockData);

const config = {};
var Controller = CustomerAddress.CustomerAddressController;
Controller.database = UserMock;

let request = {};
let status = () => {
    return {send: (result) => {return result}}
};

let resource = {
    status,
};

describe('Testing Customer Address Model ', () => {

    it('should be able to get all data', async () => {

        let result = await Controller.read(request, resource);
        MockData[0].Name = 'f'
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
                NAME: '1234'
            } 
        };

        let result2 = await Controller.create(createRequest, resource);
        let result = await Controller.read(request, resource);
        console.log(result)

        expect(result2['0'][0]).toBe(MockData[1]);
    });*/
});
