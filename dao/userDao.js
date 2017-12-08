//获取数据库链接
var db = require('../common/basicConnection');
//用户相关sql
var sqlCom = require('../common/sqlCommands'); 

/**
 * 用户登录action
 */

 function loginAction(req,res,next){
     //获取页面传值
    var param = req.body;
    db.queryArgs(sqlCom.user_sql.queryName,[param.name],function(err,data){
        var result;
        if(data.length == 0){
            result = {
                result:'-1',
                msg:'用户名不存在'
            }
        }else{
            var resData = JSON.parse(JSON.stringify(data))[0];
            if(resData.pwd == param.pwd){
                result = {
                    result:0,
                    msg:'登录成功'
                }
            }else{
                result = {
                    result:'-1',
                    msg:'密码错误'
                }
            }
        }
        db.doReturn(res,result);
    });
 }

 module.exports = {
     loginAction:loginAction
 }