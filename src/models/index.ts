import fs from 'fs'
import path from 'path'
import { Sequelize } from 'sequelize'

var basename = path.basename(module.filename)
var env = process.env.NODE_ENV || 'development'
var config = require(path.relative(__dirname, 'config/config.json'))[env]
var db = {}