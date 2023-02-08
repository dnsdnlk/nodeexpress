const express = require('express')
const app = express()
var path = require('path');
app.get('/ncexpress', function (req, res) {
	res.sendFile(path.join('/home/abcznqec/ncexpress' + '/project/index.html'));
})
app.get('/ncexpress/page1', function (req, res) {
	res.sendFile(path.join('/home/abcznqec/ncexpress' + '/project/page1.html'));
})
app.get('/ncexpress/page2', function (req, res) {
	res.sendFile(path.join('/home/abcznqec/ncexpress' + '/project/page2.html'));
})
app.listen(3001)
