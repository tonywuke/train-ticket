/**
 * Created by Tonywuke on 16/十二月/27.
 */
var log4js = require("log4js");
exports.log4js_config = require("./logger.json");
log4js.configure(this.log4js_config);
exports.logger = log4js.getLogger("app");