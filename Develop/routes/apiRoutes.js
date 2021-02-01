const fs = require('fs');
const express = require('express');
const uniqid = require('uniqid');

module.exports = (app) => {
  // GET
  app.get('/api/notes', (req, res) => res.json(data));

  // POST
  app.post('/api/notes', (req, res) => {
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  app.post('/api/clear', (req, res) => {
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
