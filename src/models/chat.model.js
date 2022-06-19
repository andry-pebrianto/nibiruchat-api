const db = require("../config/db");

module.exports = {
  store: (data) => {
    const { id, sender, receiver, chat, chatType, date } = data;

    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO chats (id, sender, receiver, chat_type, chat, date) VALUES ($1, $2, $3, $4, $5, $6)",
        [id, sender, receiver, chatType, chat, date],
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
  deleteChat: (id) => {
		return new Promise((resolve, reject) => {
			db.query("DELETE FROM chats WHERE id=$1", [id], (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	},
  list: (sender, receiver) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT userSender.photo AS photo, chats.date, chats.id, chats.chat, userSender.id AS sender_id, userReceiver.id AS receiver_id FROM chats LEFT JOIN users AS userSender ON chats.sender=userSender.id LEFT JOIN users AS userReceiver ON chats.receiver=userReceiver.id WHERE (sender='${sender}' AND receiver='${receiver}') OR (sender='${receiver}' AND receiver='${sender}')`,
        (err, res) => {
          if (err) {
            reject(err);
          }
          resolve(res);
        }
      );
    });
  },
};
