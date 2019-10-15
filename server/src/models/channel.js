const channel = (squelize, dataType) => {
  const Channel = squelize.define('channel', {
    name: {
      type: dataType.STRING,
      allowNull: false
    },
    public: {
      type: dataType.BOOLEAN,
      allowNull: false
    }
  });

  Channel.associate = models => {
    Channel.belongsTo(models.Team, {
      foreignKey: {
        name: 'teamId',
        value: 'time_id'
      }
    });
    Channel.belongsToMany(models.User, {
      through: {
        model: 'channel_member'
      },
      foreignKey: {
        name: 'channelId',
        value: 'channel_id'
      }
    });
  };
  return Channel;
};

export default channel;
