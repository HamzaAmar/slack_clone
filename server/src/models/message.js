const message = (sequelize, dataType) => {
  const Message = sequelize.define('message', {
    text: {
      type: dataType.STRING,
      allowNull: false
    }
  });

  Message.associate = models => {
    Message.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    Message.belongsTo(models.Channel, {
      foreignKey: {
        name: 'channelId',
        value: 'channel_id'
      }
    });
  };

  return Message;
};

export default message;
