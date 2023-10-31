var message;
var logindistance;

command /messagechange
   trigger:

on join:
  getlastlogintime();
    if (logindistance =< 0)
    {
    send "　%player%　さんオプ鯖へようこそ！　to player
    }
    else if (logindistance =< 1)
    {
    send " "
    }
    else if (logindistance =< 7)
    {
    send""
    }
    else
    send " %logindistance% 日ぶりですね！　" to player


//最終ログイン日からの日数取得
function getlastlogintime(logindistance){
  logindistance = 0;
  logindistance =  (played) [date] of %player% ;　
  return {logindistance}
}

//
function messagechange()




command /menu:
    trigger:

