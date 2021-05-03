import db from './dataStore';

interface participant {
  id: string;
  name: string;
  alias: string;
}

const getAll = async (): Promise<participant[]> => {
  const { rows } = await db.query('SELECT * FROM participants');
  return rows;
};

export default { getAll };
