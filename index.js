//var Web3 = require("web3");
//以太坊合约数据分析工具
// 创建web3对象
var web3 = new Web3();
// 连接到以太坊节点
web3.setProvider(new Web3.providers.HttpProvider("http://localhost:7545"));

let contractAddress = '0x9a78d09ea1146aa8833de6020f90e8855692aef9'

async function asyncPrint(index) {   
    var p=web3.eth.getStorageAt(contractAddress, index);
    var value;
    try {
        value = await p;
    }
    catch (err) {
        console.error(err);
    }
    console.log(`[${index}]` + value);
}

for (index = 0; index < 10; index++){   
    asyncPrint(index);
}
//var BigNumber = require('bignumber.js');
//var text = '{"totalRewards":"41129512960086356841608","totalReferralCommissions":"4809271676735187567387","volumeDay":"3197721764587349895834","volumeWeek":"63916398062963460540341","volumeBiWeek":"220084228881841773592302","volumeMonth":"223650189388598861478783"}';
//var obj = JSON.parse(text);
//console.log(obj["totalRewards"]);
//x = new BigNumber(obj["totalRewards"],10);
//
//console.log(x);
