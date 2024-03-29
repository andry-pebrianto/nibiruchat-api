const chatModel = require("../models/chat.model");

module.exports = (io, socket) => {
  socket.on("join-room", (id) => {
    try {
      socket.join(id);
    } catch (error) {
      console.log(error);
    }
  });
  socket.on("chat-history", async (data) => {
    try {
      const { sender, receiver } = data;
      // select all chat related to sender & receiver
      const listChat = await chatModel.list(sender, receiver);

      io.to(sender).emit("send-message-response", listChat.rows);
    } catch (error) {
      console.log(error);
    }
  });
  socket.on("send-message", async (data) => {
    try {
      const {
        id, sender, receiver, chat,
      } = data;
      // insert new chat
      await chatModel.store({
        id,
        sender,
        receiver,
        chat,
        date: new Date(),
        chatType: "text",
      });
      // select all chat related to sender & receiver
      const listChat = await chatModel.list(sender, receiver);

      io.to(data.receiver).emit("send-message-response", listChat.rows);
    } catch (error) {
      console.log(error);
    }
  });
  socket.on("edit-message", async (data) => {
    try {
      const {
        sender, receiver, chatId, chat,
      } = data;
      // update chat by id
      await chatModel.updateChat(chatId, chat);
      // select all chat related to sender & receiver
      const listChat = await chatModel.list(sender, receiver);

      io.to(sender).emit("send-message-response", listChat.rows);
      io.to(receiver).emit("send-message-response", listChat.rows);
    } catch (error) {
      console.log(error);
    }
  });
  socket.on("delete-message", async (data) => {
    try {
      const { sender, receiver, chatId } = data;
      // delete chat by id
      await chatModel.deleteChat(chatId);
      // select all chat related to sender & receiver
      const listChat = await chatModel.list(sender, receiver);

      io.to(sender).emit("send-message-response", listChat.rows);
      io.to(receiver).emit("send-message-response", listChat.rows);
    } catch (error) {
      console.log(error);
    }
  });
};
