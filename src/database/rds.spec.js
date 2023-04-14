const { RDS } = require('./rds');

describe('RDS', () => {
  it('deve consultar o banco', async () => {
    try {
      const [{ result }] = await RDS.$queryRaw`SELECT 1 + 1 AS result`;
      expect(result).toEqual(2);
    } catch (_error) {
      fail();
    }
  });
});