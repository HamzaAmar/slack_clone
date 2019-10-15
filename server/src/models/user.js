const user = (sequelize, dataType) => {
  const User = sequelize.define('user', {
    name: {
      type: dataType.STRING,
      allowNull: false,
      validate: {
        is: ['^[a-z]+$', 'i']
      }
    },
    email: {
      type: dataType.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: dataType.STRING,
      allowNull: false
    }
  });

  User.associate = models => {
    User.belongsToMany(models.Team, {
      through: {
        model: 'member'
      },
      foreignKey: {
        name: 'userId',
        value: 'user_id'
      }
    });
    User.belongsTo(models.Channel, {
      through: {
        model: 'channel_member'
      },
      foreignKey: {
        name: 'userId',
        value: 'user_id'
      }
    });
    User.belongsTo(models.User, {
      foreignKey: 'owner'
    });
  };

  return User;
};

export default user;
