const team = (sequelize, dataType) => {
  const Team = sequelize.define('team', {
    name: {
      type: dataType.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: ['^[a-z]+$', 'i']
      }
    }
  });

  Team.associate = models => {
    Team.belongsToMany(models.User, {
      through: {
        model: 'member'
      },
      foreignKey: {
        name: 'teamId',
        value: 'time_id'
      }
    });
  };

  return Team;
};

export default team;
