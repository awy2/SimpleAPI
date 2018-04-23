const db = require('../index');

describe('Testing Database ', () => {

    it('should connect', async () => {

        let ableToConnect = await db.sequelize.authenticate().then(() => {
            return true;
        })
        .catch(() => {
            return false;
        });
        expect(ableToConnect).toBe(true);
    })
});
