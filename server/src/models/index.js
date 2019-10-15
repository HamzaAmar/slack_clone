import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
    define: { underscored: true }
  }
);

const models = {
  User: sequelize.import('./user'),
  Message: sequelize.import('./message'),
  Team: sequelize.import('./team'),
  Channel: sequelize.import('./channel')
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };
export default models;
