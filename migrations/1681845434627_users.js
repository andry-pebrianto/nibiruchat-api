/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("users", {
    id: {
      type: "uuid",
      notNull: true,
      primaryKey: true,
    },
    username: {
      type: "VARCHAR(55)",
      notNull: true,
    },
    email: {
      type: "VARCHAR(55)",
      notNull: true,
      unique: true,
    },
    phone: {
      type: "VARCHAR(15)",
    },
    bio: {
      type: "VARCHAR(505)",
    },
    password: {
      type: "VARCHAR(205)",
      notNull: true,
    },
    photo: {
      type: "VARCHAR(205)",
    },
    email_token: {
      type: "VARCHAR(205)",
    },
    date: {
      type: "timestamp with time zone",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });

  pgm.sql(`
    ALTER TABLE users
    ADD COLUMN is_verified BOOLEAN DEFAULT FALSE;
  `);
};

exports.down = (pgm) => {
  pgm.dropTable("users");
};
