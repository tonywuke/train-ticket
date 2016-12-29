/**
 * Created by Tonywuke on 16/十二月/27.
 */
var https = require('https');
var log = require('../logger/logger');

exports.getLeftTicket=function (){
    var options = {
        hostname: 'kyfw.12306.cn',
        path: '/otn/lcxxcx/query?purpose_codes=ADULT&queryDate=2016-12-29&from_station=BJP&to_station=XMS',
        rejectUnauthorized: false
    };

    var req = https.get(options, function(res){
        var json = '';
        res.on('data', function (d) {
            json += d;
        });
        res.on('end',function(){
            //获取到的数据
            json = JSON.parse(json);
            leftTicketInfo=json.data.datas;

            var space=' ';
            var newLine=' . ';

            for(var i=0,size=leftTicketInfo.length;i<size;i++){
                var record=leftTicketInfo[i];
                var code=record['station_train_code'];

                if(code=='K571') {
                    var date=record['start_train_date'];
                    var yw=record['yw_num'];
                    var value = code + space + date + space + yw + newLine;
                    log.logger.info(value);
                }
            }
        });

    });
}
