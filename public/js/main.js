 var socket = io('https://websocket.btcchina.com/'); //connect to api
 socket.emit('subscribe', 'marketdata_cnybtc');
 socket.emit('subscribe', 'marketdata_cnyltc');
 socket.emit('subscribe', 'grouporder_cnybtc');
 socket.emit('subscribe', 'grouporder_cnyltc');
 socket.on('connect', function () { //create connection to socket

     socket.on('ticker', function (data) { //listen to ticker event
         console.log(data);

         // Update the Market Name
         $('#market').text(data.ticker.market);

         // Update the High selling price
         $('#high-count').text(data.ticker.high);

         // Update the Low selling price
         $('#low-count').text(data.ticker.low);

         // Update the Buy price
         $('#buy').text(data.ticker.buy);

         // Update the Sell price
         $('#sell').text(data.ticker.sell);

         // Update the Volume
         $('#volume').text(data.ticker.vol);

         $('#volume1').text(data.ticker.last);

         $('#volume2').text(data.ticker.open);

         $('#volume3').text(data.ticker.vwap);


     });




     socket.on('trade', function (data) {
         console.log(data);


         // Update the amount
         $('#amount').text(data.amount);

         // Update the price
         $('#price').text(data.price);



     });

     //grouporder
     socket.on('grouporder', function (data) {
         console.log(data);
         $('#grouporder-price').text(data.grouporder.ask[0].price);
         $('#totalamount').text(data.grouporder.ask[0].totalamount);

         $('#type').text(data.grouporder.bid[0].type);

         $('#price1').text(data.grouporder.bid[1].price);

         $('#type2').text(data.grouporder.ask[2].type);

         $('#price2').text(data.grouporder.ask[2].price);


     });

 });
