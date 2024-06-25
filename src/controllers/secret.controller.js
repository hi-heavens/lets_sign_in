'use strict';

const yourSecret = async function (req, res) {
  const id = await req.user.sub;
  const name = req.user.name;
  return res.send(`Welcome ${name}. Your personal secret id is ${id}!`);
};

module.exports = { yourSecret };
